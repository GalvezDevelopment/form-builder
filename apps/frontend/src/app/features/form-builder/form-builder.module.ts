import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBuilderComponent } from './home-builder.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBuilderComponent,
  },
];

@NgModule({
  declarations: [HomeBuilderComponent],
  providers: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBuilder {}
