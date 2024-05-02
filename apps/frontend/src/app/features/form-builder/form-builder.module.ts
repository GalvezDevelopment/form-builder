import { NgModule } from "@angular/core";
import { HomeBuilderComponent } from "./home-builder.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/form.reducer";
import { EffectsModule } from "@ngrx/effects";
import { FormEffects } from "./state/form.effects";

const routes: Routes = [
    {
        path: '',
        component: HomeBuilderComponent
    }
];

@NgModule({
    declarations: [HomeBuilderComponent],
    providers: [],
    imports: [
        RouterModule.forChild(routes),
        StoreModule.forFeature('form', reducer),
        EffectsModule.forFeature([FormEffects])
    ],
    exports: [RouterModule]
})
export class FormBuilder {}