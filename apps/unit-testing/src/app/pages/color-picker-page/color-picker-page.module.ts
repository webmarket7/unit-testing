import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPickerPageRoutingModule } from './color-picker-page-routing.module';
import { ColorPickerModule } from '@dev-meetup/color-picker';
import { ColorPickerPageComponent } from './color-picker-page.component';


@NgModule({
  declarations: [
    ColorPickerPageComponent
  ],
  imports: [
    CommonModule,
    ColorPickerPageRoutingModule,
    ColorPickerModule
  ],
})
export class ColorPickerPageModule {}
