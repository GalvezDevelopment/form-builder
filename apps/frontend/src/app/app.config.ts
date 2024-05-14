import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appRoutes } from './app.routes';
import { breakpointReducer } from './core/services/ui/breakpoint.reducer';
import { BreakpointService } from './core/services/ui/breakpoint.service';
import { BREAKPOINT_KEY } from './core/state/app-state.interface';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({}),
    provideState(BREAKPOINT_KEY, breakpointReducer),
    provideRouter(appRoutes),
    provideAnimationsAsync('noop'),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: function (srv: BreakpointService) {
        return () => {};
      },
      deps: [BreakpointService],
    },
    provideStoreDevtools({
      maxAge: 15,
    }),
  ],
};
