import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { FormService } from './core/adapters/form.service';
import { FormMockService } from './core/adapters/form.service.mock';
import { FormEffects } from './features/form-builder/state/form.effects';
import { provideState } from '@ngrx/store';
import { reducer as formReducer } from './features/form-builder/state/form.reducer';
import { FORM_SELECTED_KEY } from './core/state/app-state.interface';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./features/form-builder/form-builder.module').then(
        (m) => m.FormBuilder
      ),
    providers: [
      {
        provide: FormService,
        useExisting: environment.useMockFormSrv ? FormMockService : FormService,
      },
      provideState(FORM_SELECTED_KEY, formReducer),
      provideEffects([FormEffects]),
    ],
  },
];
