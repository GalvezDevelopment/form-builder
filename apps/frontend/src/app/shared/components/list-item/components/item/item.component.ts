import { Component, input, output } from '@angular/core';
import { ListItem, ListItemActionType } from '../../list-container.component';

export interface ItemEvent {
  id: string;
  type: ListItemActionType;
}

@Component({
  selector: 'builder-list-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  config = input.required<ListItem>();
  select = output<ItemEvent>();

  protected emitEvent(type: ListItemActionType): void {
    this.select.emit({ id: this.config().id, type });
  }
}
