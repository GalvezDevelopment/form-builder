import { Component } from '@angular/core';

@Component({
  selector: 'builder-card-title',
  template: `
    <h3>
      <ng-content></ng-content>
    </h3>
  `,
  styleUrl: './card-title.component.scss',
})
export class CardTitleComponent {}
