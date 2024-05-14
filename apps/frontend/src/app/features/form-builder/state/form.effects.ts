import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, from, map } from 'rxjs';
import { FormService } from '../../../core/adapters/form.service';
import { FormConfig } from '../../../domain/models/form-config.interface';
import { createForm, createdForm } from './form.actions';

@Injectable()
export class FormEffects {
  formCreated$ = createEffect(() =>
    this._actions$.pipe(
      ofType(createForm),
      exhaustMap(() =>
        from(this._formSrv.create()).pipe(
          map((response) => createdForm({ form: response.data as FormConfig }))
        )
      )
    )
  );
  constructor(private _formSrv: FormService, private _actions$: Actions) {}
}
