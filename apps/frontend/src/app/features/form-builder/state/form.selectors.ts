import { createSelector } from '@ngrx/store';
import { AppState } from '../../../core/state/app-state.interface';

const featureSelected = (state: AppState) => state.formSelected;

export const selectFormConfig = createSelector(featureSelected, form => form);