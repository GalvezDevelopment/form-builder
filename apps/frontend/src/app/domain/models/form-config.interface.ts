import { FormConfigId } from '../types/form-config-id.type';
import { FormSection } from './form-section.interface';

export interface FormConfig {
  id: FormConfigId;
  name?: string;
  userId: string;
  sections: FormSection[];
  onCreationDate?: Date;
  onModifiedDate?: Date;
}
