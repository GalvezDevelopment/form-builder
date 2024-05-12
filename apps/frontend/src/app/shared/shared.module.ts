import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const materialComponents = [MatButtonModule, MatIconModule, MatMenuModule];

@NgModule({
  declarations: [],
  imports: [],
  exports: [...materialComponents],
})
export class SharedModule {}
