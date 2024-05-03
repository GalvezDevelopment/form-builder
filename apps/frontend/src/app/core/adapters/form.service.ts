import { Injectable } from '@angular/core';
import { FormRepository } from '../../domain/ports/driven/form.repository';
import { ApiResponse } from '../../domain/api/api-response.interface';
import { FormConfig } from '../../domain/models/form-config.interface';
import { FormConfigId } from '../../domain/types/form-config-id.type';

@Injectable({
    providedIn: 'root'
})
export class FormService implements FormRepository {
    create(): Promise<ApiResponse<FormConfig>> {
        throw new Error('Method not implemented.');
    }
    get(id: string): Promise<ApiResponse<FormConfig | null>> {
        throw new Error('Method not implemented.');
    }
    update(form: FormConfig): Promise<ApiResponse> {
        throw new Error('Method not implemented.');
    }
    delete(id: FormConfigId): Promise<ApiResponse> {
        throw new Error('Method not implemented.');
    }
}
