import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderComponent } from './core/components/header/header.component';
import { selectXSmall } from './core/services/ui/breakpoint.selectors';
import { AppState } from './core/state/app-state.interface';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _store: Store<AppState> = inject(Store);
  public isXSmall$: Observable<boolean> = this._store.select(selectXSmall);
}
