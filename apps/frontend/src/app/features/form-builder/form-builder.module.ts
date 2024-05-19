import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBuilderComponent } from './home-builder.component';
import { SharedModule } from '../../shared/shared.module';
import { CreationFormStepperComponent } from './components/stepper/creation-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBuilderComponent,
  },
];

@NgModule({
  declarations: [HomeBuilderComponent, CreationFormStepperComponent],
  providers: [],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class FormBuilder {}
