import { FormComponent } from "./form-component.interface";

export interface FormSection {
    id: string;
    title?: string;
    subtitle?: string;
    elements: FormComponent[];
}