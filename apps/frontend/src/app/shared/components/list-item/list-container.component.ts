import { Component, input } from '@angular/core';

export type ListItemActionType = 'select' | 'read' | 'remove';

export interface ListItemAction {
  text: string;
  type: ListItemActionType;
}

export interface ListItem<I = any> {
  id: I;
  title: string;
  actions: ListItemAction[];
}

@Component({
  selector: 'builder-list-container',
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.scss',
})
export class ListContainerComponent {
  config = input.required<ListItem>();
  source = input<unknown[]>([]);
}
