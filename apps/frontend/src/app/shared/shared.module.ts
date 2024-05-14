import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const materialComponents = [MatButtonModule, MatIconModule, MatMenuModule];

@NgModule({
  declarations: [],
  imports: [],
  exports: [CommonModule, ...materialComponents],
})
export class SharedModule {}
