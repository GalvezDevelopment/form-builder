import { ApiResponse } from "../../api/api-response.interface";
import { FormConfig } from "../../models/form-config.interface";
import { FormConfigId } from "../../types/form-config-id.type";

export interface FormRepository {
    create(): Promise<ApiResponse<FormConfig>>;
    get(id: FormConfigId): Promise<ApiResponse<FormConfig>>;
    update(form: FormConfig): Promise<ApiResponse<boolean>>;
    delete(): Promise<ApiResponse<boolean>>;
}