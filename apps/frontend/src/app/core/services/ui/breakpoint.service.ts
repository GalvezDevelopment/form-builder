import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state.interface';
import { setSize } from './breakpoint.actions';

export interface BreakpointsState {
  [breakpoint: string]: boolean;
}

export interface BreakpointsDictionary {
  [breakpoint: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private _breakpoint$: BreakpointObserver = inject(BreakpointObserver);
  private _store: Store<AppState> = inject(Store);
  private _mediaQueries: string[] = [
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
  ];

  public startListening(): void {
    this._breakpoint$
      .observe(this._mediaQueries)
      .subscribe((sizes) => this.setScreenSize(sizes.breakpoints));
  }

  private setScreenSize(sizes: BreakpointsState): void {
    this._store.dispatch(setSize({ sizes }));
  }
}
