import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPickerPageComponent } from './color-picker-page.component';


const routes: Routes = [
  {
    path: '',
    component: ColorPickerPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorPickerPageRoutingModule {
}
