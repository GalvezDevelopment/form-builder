import { createReducer, on } from '@ngrx/store';
import { FormConfig } from '../../../domain/models/form-config.interface';
import { createdForm } from './form.actions';

export const initialState: Partial<FormConfig> = {};

export const reducer = createReducer(
    initialState,
    on(createdForm, (state, { form }) => ({ ...form }))
);