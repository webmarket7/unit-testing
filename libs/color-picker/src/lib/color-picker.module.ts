import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HexToRgbaPipe } from './pipes/hex-to-rgba.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ColorPickerComponent,
    HexToRgbaPipe
  ],
  exports: [ColorPickerComponent],
})
export class ColorPickerModule {}
