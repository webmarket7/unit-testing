import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerPageComponent } from './color-picker-page.component';
import { BehaviorSubject, take } from 'rxjs';
import { ColorPickerPageService } from './services/color-picker-page.service';
import DoneCallback = jest.DoneCallback;
import { By } from '@angular/platform-browser';


const SELECTED_COLOR_BY_DEFAULT = '#ffffff';

class ColorPickerPageServiceMock {
  selectedColor$ = new BehaviorSubject(SELECTED_COLOR_BY_DEFAULT);
  saveColor = jest.fn();
}

describe('ColorPickerPageComponent', () => {
  let component: ColorPickerPageComponent;
  let fixture: ComponentFixture<ColorPickerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorPickerPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ColorPickerPageService,
          useClass: ColorPickerPageServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test model', () => {
    it('should pass the correct selected color to color picker', (done: DoneCallback) => {
      const colorPickerPageService = TestBed.inject(ColorPickerPageService);
      const testColor = '#fafafa';

      (colorPickerPageService.selectedColor$ as BehaviorSubject<string | null>).next(testColor);

      component.selectedColor$
        .pipe(take(1))
        .subscribe((selectedColor: string | null) => {
          expect(selectedColor).toBe(testColor);
          done();
        });
    });

    test('when user selects a color it gets saved', () => {
      const colorPickerPageService = TestBed.inject(ColorPickerPageService);
      const testColor = '#fafafa';

      component.onColorSelected(testColor);

      expect(colorPickerPageService.saveColor).toHaveBeenCalledWith(testColor);
    });
  });

  describe('test template', () => {
    it('should pass the correct selected color to color picker', () => {
      const colorPickerPageService = TestBed.inject(ColorPickerPageService);
      const testColor = '#fafafa';

      (colorPickerPageService.selectedColor$ as BehaviorSubject<string | null>).next(testColor);

      fixture.detectChanges();

      const colorPickerDE = fixture.debugElement.query(By.css('dev-meetup-color-picker'));
      const selectedColor = colorPickerDE.nativeNode.selectedColor;

      expect(selectedColor).toBe(testColor);
    });

    test('when user selects a color it gets saved', () => {
      const colorPickerPageService = TestBed.inject(ColorPickerPageService);
      const testColor = '#fafafa';
      const colorPickerDE = fixture.debugElement.query(By.css('dev-meetup-color-picker'));

      colorPickerDE.triggerEventHandler('colorSelected', testColor);

      expect(colorPickerPageService.saveColor).toHaveBeenCalledWith(testColor);
    });
  });
});
