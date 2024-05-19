import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CardModule } from './components/card/card.module';

const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ...materialComponents,
  ],
})
export class SharedModule {}
