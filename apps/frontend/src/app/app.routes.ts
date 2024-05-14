import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { environment } from '../environments/environment';
import { FormService } from './core/adapters/form.service';
import { FormMockService } from './core/adapters/form.service.mock';
import { FORM_SELECTED_KEY } from './core/state/app-state.interface';
import { FormEffects } from './features/form-builder/state/form.effects';
import { reducer as formReducer } from './features/form-builder/state/form.reducer';

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
