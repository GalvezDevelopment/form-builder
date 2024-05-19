import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardBodyComponent } from './components/body/card-body.component';
import { CardFooterComponent } from './components/footer/card-footer.component';
import { CardTitleComponent } from './components/title/card-title.component';
import { CardWithActionsComponent } from './variants/two-buttons/two-buttons.components';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const components = [
  CardComponent,
  CardTitleComponent,
  CardBodyComponent,
  CardFooterComponent,
  CardWithActionsComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatButtonModule],
  exports: [...components],
})
export class CardModule {}
