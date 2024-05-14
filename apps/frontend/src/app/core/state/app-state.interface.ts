import { FormConfig } from '../../domain/models/form-config.interface';
import { User } from '../../domain/models/user.interface';
import { BreakpointsState } from '../services/ui/breakpoint.service';

export interface AppState {
  user: User;
  forms: FormConfig[];
  [FORM_SELECTED_KEY]: FormConfig;
  [BREAKPOINT_KEY]: BreakpointsState;
}

export const FORM_SELECTED_KEY = 'formSelected';
export const BREAKPOINT_KEY = 'breakpoint';
