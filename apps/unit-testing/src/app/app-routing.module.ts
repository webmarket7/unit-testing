import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';


export const routes: Routes = [
  {
    path: 'color-picker',
    loadChildren: () => import('./pages/color-picker-page/color-picker-page.module').then(m => m.ColorPickerPageModule),
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'color-picker',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
