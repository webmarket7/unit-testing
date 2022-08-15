import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerComponent } from './color-picker.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';

const pipeTransformResult = 'test';

@Pipe({
  name: 'hexToRgba'
})
class MockHexToRgbaPipe implements PipeTransform {
  transform(): string {
    return pipeTransformResult;
  }
}

const setHexColorValue = (form: FormGroup, value: string) => form.get('hexColor')?.setValue(value);

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ColorPickerComponent, MockHexToRgbaPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test form', () => {
    let form: FormGroup;

    beforeEach(() => {
      form = component.form;
    });

    test('form is invalid if hexColor field is empty', () => {
      setHexColorValue(form, '');

      expect(form.invalid).toBe(true);
    });

    test('form is invalid if hexColor field gets color with invalid format', () => {
      const invalidValues = ['#0', '#00', '#0000', '#00000', '0'];

      invalidValues.forEach((invalidValue: string) => {
        setHexColorValue(form, invalidValue);
        expect(form.invalid).toBe(true);
      });
    });

    test('form is valid if hexColor field gets color with valid format', () => {
      setHexColorValue(form, '#000000');
      expect(form.valid).toBe(true);

      setHexColorValue(form, '#000');
      expect(form.valid).toBe(true);
    });

    test('setColor method is called after form is submitted', () => {
      // const buttonDE = fixture.debugElement.query(By.css('button[type=submit]'));
      const formDE = fixture.debugElement.query(By.css('.swatch-toolbar'));
      const spy = jest.spyOn(component, 'setColor');

      setHexColorValue(form, '#000000');
      expect(form.invalid).toBe(false);

      fixture.detectChanges();
      expect(component.submitButtonDisabled).toBe(null);

      // buttonDE.triggerEventHandler('click', new Event('click'));
      formDE.triggerEventHandler('submit', new Event('submit'));
      expect(spy).toHaveBeenCalled();
    });
  });

  test('hexColor emitted when form is submitted', () => {
    const expectedValue = '#000000';
    const spy = jest.spyOn(component.colorSelected, 'emit');

    setHexColorValue(component.form, expectedValue);
    component.setColor();

    expect(spy).toHaveBeenCalledWith(expectedValue);
  });

  test('selectedColor input value populated into form if valid', () => {
    const expectedValue = '#000000';

    component.selectedColor = expectedValue;
    component.ngOnChanges({ selectedColor: new SimpleChange(undefined, component.selectedColor, true) });

    expect(component.form.get('hexColor')?.value).toBe(expectedValue);
  });

  test('selectedColor input value populated into form if valid', () => {
    const expectedValue = '#000000';

    component.selectedColor = expectedValue;
    fixture.detectChanges();

    const swatchColorDE = fixture.debugElement.query(By.css('.swatch-color'));
    expect(swatchColorDE.attributes['style']).toBe('background-color: rgb(0, 0, 0);');

    const hexColorDE = fixture.debugElement.query(By.css('.hex-color'));
    expect(hexColorDE.nativeElement.textContent.trim()).toBe(expectedValue);

    const rgbaColorDE = fixture.debugElement.query(By.css('.rgba-color'));
    expect(rgbaColorDE.nativeElement.textContent.trim()).toBe(pipeTransformResult);
  });
});
