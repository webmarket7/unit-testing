import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerPageComponent } from './color-picker-page.component';


describe('ColorPickerPageComponent', () => {
  let component: ColorPickerPageComponent;
  let fixture: ComponentFixture<ColorPickerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorPickerPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
