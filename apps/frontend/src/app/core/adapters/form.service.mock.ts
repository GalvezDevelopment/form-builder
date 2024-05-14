import { Injectable } from '@angular/core';
import { ApiResponse } from '../../domain/api/api-response.interface';
import { FormError } from '../../domain/errors/form.error';
import { FormConfig } from '../../domain/models/form-config.interface';
import { FormRepository } from '../../domain/ports/driven/form.repository';
import { FormConfigId } from '../../domain/types/form-config-id.type';
import { clone } from '../../utils/deep-clone.util';

@Injectable({
  providedIn: 'root',
})
export class FormMockService implements FormRepository {
  async create(): Promise<ApiResponse<FormConfig>> {
    localStorage.setItem(mockedForm.id, clone(mockedForm));
    return Promise.resolve({
      status: 200,
      data: mockedForm,
    } as ApiResponse<FormConfig>);
  }

  async get(id: string): Promise<ApiResponse<FormConfig | null>> {
    const res = localStorage.getItem(id);
    if (!res) {
      return Promise.resolve({
        status: 404,
        error: `Form with given id (${id}) does not exist`,
        data: null,
      } as ApiResponse<null>);
    }

    return Promise.resolve({
      status: 200,
      data: JSON.parse(res) as FormConfig,
    } as ApiResponse<FormConfig>);
  }

  async update(form: FormConfig): Promise<ApiResponse<void>> {
    const formToUpdate = await this.get(form.id);

    if (formToUpdate.error)
      return Promise.resolve({
        status: formToUpdate.status,
        error: formToUpdate.error,
      } as ApiResponse<void>);

    const toSave = clone(form);
    const toUpdate = clone(formToUpdate);

    if (toSave === toUpdate) throw new FormError('Form is equal to stored one');

    localStorage.setItem(form.id, toSave);

    return Promise.resolve({ status: 200 } as ApiResponse<void>);
  }

  async delete(id: FormConfigId): Promise<ApiResponse> {
    const formToDelete = await this.get(id);
    if (!formToDelete)
      return Promise.resolve({
        status: 404,
        error: 'Form to delete does not exist',
      } as ApiResponse);
    return Promise.resolve({ status: 200 } as ApiResponse);
  }
}

const mockedForm: FormConfig = {
  id: '' + Math.random() * 1000,
  userId: '6516321',
  sections: [],
  onCreationDate: new Date(),
};
