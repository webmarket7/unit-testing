import { TestBed } from '@angular/core/testing';
import { ColorPickerPageService } from './color-picker-page.service';
import { subscribeSpyTo } from '@hirez_io/observer-spy';


describe('ColorPickerPageService', () => {
  let service: ColorPickerPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorPickerPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save color to state', () => {
    const testColor = '#fafafa';
    const spy = jest.spyOn(service.selectedColorSubject, 'next');

    service.saveColor(testColor);

    expect(spy).toHaveBeenCalledWith(testColor);
  });

  it('should select color from state', () => {
    const observerSpy = subscribeSpyTo(service.selectedColor$);

    expect(observerSpy.getValues()).toEqual(['#000000']);
  });
});
