import { FormConfig } from "../models/form-config.interface";

export class FormDomainService {
    static validate(form: FormConfig): void {
        if (!form) throw new Error('Invalid form config');
        else if (!form.id || !form.id.trim()) throw new Error('Forms must have an id');
        else if (!form.name || !form.name.trim()) throw new Error('Forms must have a name');
        else if (!Array.isArray(form.sections)) throw new Error('Unknown form sections');
        else if (!form.sections.length) throw new Error('Forms must have one default section at least');
    }
}