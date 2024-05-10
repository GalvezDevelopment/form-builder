import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialComponents = [MatButtonModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [],
  exports: [...materialComponents],
})
export class SharedModule {}
