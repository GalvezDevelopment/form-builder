import { Injectable } from "@angular/core";
import { FormService } from "../../../core/adapters/form.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createForm, createdForm } from "./form.actions";
import { exhaustMap, from, map, tap } from "rxjs";
import { FormConfig } from "../../../domain/models/form-config.interface";

@Injectable()
export class FormEffects {
    formCreated$ = createEffect(() => this._actions$.pipe(
        ofType(createForm),
        exhaustMap(() => from(this._formSrv.create()).pipe(
            map(response => createdForm({ form: response.data as FormConfig }))
        ))
    ));
    constructor(private _formSrv: FormService, private _actions$: Actions) {}
}