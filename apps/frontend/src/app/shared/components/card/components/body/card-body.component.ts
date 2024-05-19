import { Component } from '@angular/core';

@Component({
  selector: 'builder-card-body',
  template: ` <ng-content></ng-content> `,
  styleUrl: './card-body.component.scss',
})
export class CardBodyComponent {}
