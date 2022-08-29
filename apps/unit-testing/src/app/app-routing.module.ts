import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'color-picker',
    loadChildren: () => import('./pages/color-picker-page/color-picker-page.module').then(m => m.ColorPickerPageModule),
  },
  {
    path: '',
    redirectTo: 'color-picker',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
