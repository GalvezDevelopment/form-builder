import { Component, ViewChild, inject } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _router: Router = inject(Router);

  @ViewChild(MatMenuTrigger) private _menu!: MatMenuTrigger;

  public redirectHome(): void {
    this._router.navigate(['/']);
  }
}
