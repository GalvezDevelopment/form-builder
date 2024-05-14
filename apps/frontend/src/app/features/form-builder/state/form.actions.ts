import { createAction, props } from '@ngrx/store';
import { FormConfig } from '../../../domain/models/form-config.interface';

export const createForm = createAction('[Form Builder] Create a form');
export const createdForm = createAction(
  '[Form Builder] Form created',
  props<{ form: FormConfig }>()
);
export const updateForm = createAction(
  '[Form Builder] Update the form',
  props<{ form: FormConfig }>()
);
export const getAllForms = createAction('[Form Builder] Get all user forms');
