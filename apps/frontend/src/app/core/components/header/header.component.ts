import { Component, ViewChild, inject } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { selectXSmall } from '../../services/ui/breakpoint.selectors';
import { AppState } from '../../state/app-state.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _router: Router = inject(Router);
  private _store: Store<AppState> = inject(Store);
  public isXSmall$: Observable<boolean>;

  @ViewChild(MatMenuTrigger) private _menu!: MatMenuTrigger;

  constructor() {
    this.isXSmall$ = this._store.select(selectXSmall);
  }

  public redirectHome(): void {
    this._router.navigate(['/']);
  }
}
