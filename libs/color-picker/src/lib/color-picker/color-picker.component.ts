import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HEX_COLOR_PATTERN } from '../helpers/color-helpers';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dev-meetup-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {
  form: FormGroup;

  get hexColorControl(): FormControl {
    return this.form.get('hexColor') as FormControl;
  }

  @Input() selectedColor: string | null = '';

  @Output() colorSelected = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      hexColor: ['', Validators.pattern(HEX_COLOR_PATTERN)]
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      hexColor: this.selectedColor
    });
  }

  setColor(): void {
    if (this.form.valid) {
      this.colorSelected.emit(this.hexColorControl.value);
    }
  }
}
