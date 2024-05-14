import { Breakpoints } from '@angular/cdk/layout';
import { createSelector } from '@ngrx/store';
import { AppState, BREAKPOINT_KEY } from '../../state/app-state.interface';

const selectFeature = (state: AppState) => state[BREAKPOINT_KEY];

export const selectBreakpoint = createSelector(selectFeature, (state) => state);
export const selectXSmall = createSelector(
  selectFeature,
  (state) => state[Breakpoints.XSmall]
);
