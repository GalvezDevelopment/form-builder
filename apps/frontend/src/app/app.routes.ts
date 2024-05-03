import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./features/form-builder/form-builder.module').then(m => m.FormBuilder)
    }
];
