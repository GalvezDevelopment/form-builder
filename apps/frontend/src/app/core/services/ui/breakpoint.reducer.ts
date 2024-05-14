import { createReducer, on } from '@ngrx/store';
import { setSize } from './breakpoint.actions';
import { BreakpointsState } from './breakpoint.service';

const initialState: BreakpointsState = {};

export const breakpointReducer = createReducer(
  initialState,
  on(setSize, (state, { sizes }) => ({ ...state, ...sizes }))
);
