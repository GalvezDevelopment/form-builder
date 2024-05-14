import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeaderComponent } from './core/components/header/header.component';
import { AppState } from './core/state/app-state.interface';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Observable } from 'rxjs';
import { selectXSmall } from './core/services/ui/breakpoint.selectors';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _store: Store<AppState> = inject(Store);
  public isXSmall$: Observable<boolean> = this._store.select(selectXSmall);
}
