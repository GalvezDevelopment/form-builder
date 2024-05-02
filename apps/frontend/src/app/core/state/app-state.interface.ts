import { FormConfig } from "../../domain/models/form-config.interface";
import { User } from "../../domain/models/user.interface";

export interface AppState {
    user: User;
    forms: FormConfig[];
    formSelected: FormConfig;
}

export interface AppStore {
    form: any[];
}