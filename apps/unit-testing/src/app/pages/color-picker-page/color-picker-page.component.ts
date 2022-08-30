import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorPickerPageService } from './services/color-picker-page.service';


@Component({
  selector: 'dev-meetup-color-picker-page',
  templateUrl: './color-picker-page.component.html',
  styleUrls: ['./color-picker-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerPageComponent {
  selectedColor$: Observable<string | null>;

  constructor(private _colorPickerPageService: ColorPickerPageService) {
    this.selectedColor$ = this._colorPickerPageService.selectedColor$;
  }

  onColorSelected(hexColor: string): void {
    this._colorPickerPageService.saveColor(hexColor);
  }
}
