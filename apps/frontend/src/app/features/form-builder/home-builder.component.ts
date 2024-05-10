import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../../core/state/app-state.interface';
import { createForm } from './state/form.actions';
import { selectFormConfig } from './state/form.selectors';

@Component({
  selector: 'designer-home',
  template: `
  `,
})
export class HomeBuilderComponent implements OnInit {
  formCreated$: Observable<string>;

  constructor(private _store: Store<AppState>) {
    this.formCreated$ = _store
      .select(selectFormConfig)
      .pipe(map(({ id }) => id));
  }

  ngOnInit(): void {
    this._store.dispatch(createForm());
  }
}
