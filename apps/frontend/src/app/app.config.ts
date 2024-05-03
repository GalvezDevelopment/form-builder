import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { appRoutes } from './app.routes';
import { reducer as formReducer } from './features/form-builder/state/form.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({}),
    provideRouter(appRoutes)
  ],
};
