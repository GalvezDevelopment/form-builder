import { Injectable } from '@angular/core';
import { FormRepository } from '../../domain/ports/driven/form.repository';
import { ApiResponse } from '../../domain/api/api-response.interface';
import { FormConfig } from '../../domain/models/form-config.interface';

@Injectable()
export class FormService implements FormRepository {
    create(): Promise<ApiResponse<FormConfig>> {
        throw new Error('Method not implemented.');
    }
    get(id: string): Promise<ApiResponse<FormConfig>> {
        throw new Error('Method not implemented.');
    }
    update(form: FormConfig): Promise<ApiResponse<boolean>> {
        throw new Error('Method not implemented.');
    }
    delete(): Promise<ApiResponse<boolean>> {
        throw new Error('Method not implemented.');
    }
}
