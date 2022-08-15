import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { HEX_COLOR_PATTERN, isValidHexColor } from '../helpers/color-helpers';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dev-meetup-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnChanges {
  form: FormGroup;

  get hexColorControl(): FormControl {
    return this.form.get('hexColor') as FormControl;
  }

  get submitButtonDisabled(): true | null {
    return this.form.invalid || null;
  }

  @Input() selectedColor: string | null = '';

  @Output() colorSelected = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      hexColor: ['', [
        Validators.required,
        Validators.pattern(HEX_COLOR_PATTERN)
      ]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const selectedColorChange = changes['selectedColor'];
    const currentSelectedColor = selectedColorChange.currentValue;

    if (selectedColorChange
      && currentSelectedColor !== this.hexColorControl.value
      && isValidHexColor(currentSelectedColor)
    ) {
      this.hexColorControl.setValue(currentSelectedColor);
    }
  }

  setColor(): void {
    if (this.form.valid) {
      this.colorSelected.emit(this.hexColorControl.value);
    }
  }
}
