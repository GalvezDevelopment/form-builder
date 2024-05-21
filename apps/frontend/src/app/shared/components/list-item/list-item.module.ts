import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ItemComponent } from './components/item/item.component';
import { ListContainerComponent } from './list-container.component';

@NgModule({
  declarations: [ListContainerComponent, ItemComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ListContainerComponent, ItemComponent],
})
export class ListItemModule {}
