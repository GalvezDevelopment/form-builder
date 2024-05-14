import { createAction, props } from '@ngrx/store';
import { BreakpointsState } from './breakpoint.service';

export const setSize = createAction(
  '[Breakpoint Service] Setting screen size',
  props<{ sizes: BreakpointsState }>()
);
