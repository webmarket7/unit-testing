import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from '../../services/core-service.service';


@Component({
  selector: 'dev-meetup-color-picker-page',
  templateUrl: './color-picker-page.component.html',
  styleUrls: ['./color-picker-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerPageComponent {
  selectedColor$: Observable<string | null>;

  constructor(private _coreService: CoreService) {
    this.selectedColor$ = this._coreService.selectedColor$;
  }

  onColorSelected(hexColor: string): void {
    this._coreService.saveColor(hexColor);
  }
}
