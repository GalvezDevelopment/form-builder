import { FormConfig } from "../../domain/models/form-config.interface";
import { User } from "../../domain/models/user.interface";

export interface AppState {
    user: User;
    forms: FormConfig[];
    [FORM_SELECTED_KEY]: FormConfig;
}

export const FORM_SELECTED_KEY = 'formSelected';