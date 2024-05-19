import { ApiResponse } from '../api/api-response.interface';
import { FormError } from '../errors/form.error';
import { FormConfig } from '../models/form-config.interface';
import { FormRepository } from '../ports/driven/form.repository';
import { FormDomainService } from '../services/form.domain-service';

export class FormUseCase {
  constructor(private formRepository: FormRepository) {}

  async createForm(): Promise<ApiResponse<FormConfig>> {
    try {
      const blueprint = await this.formRepository.create();
      FormDomainService.validate(blueprint.data as FormConfig);
      return blueprint;
    } catch (err: unknown) {
      if (err instanceof FormError)
        throw new Error('Form received is badly structured');
      throw new Error('Server did not respond when creating the form');
    }
  }

  async updateForm(form: FormConfig): Promise<ApiResponse<void>> {
    try {
      FormDomainService.validate(form);
      return await this.formRepository.update(form);
    } catch (err: unknown) {
      if (err instanceof FormError)
        throw new Error('Form to update is badly structured');
      throw new Error('Server did not respond when updating the form');
    }
  }
}
