import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './services/core-service.service';

@Component({
  selector: 'dev-meetup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  selectedColor$: Observable<string | null>;

  constructor(private _coreService: CoreService) {
    this.selectedColor$ = this._coreService.selectedColor$;
  }

  onColorSelected(hexColor: string): void {
    this._coreService.saveColor(hexColor);
  }
}
