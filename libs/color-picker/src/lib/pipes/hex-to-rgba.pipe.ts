import { Pipe, PipeTransform } from '@angular/core';
import { hexToRgba, isValidHexColor } from '../helpers/color-helpers';

@Pipe({
  name: 'hexToRgba'
})
export class HexToRgbaPipe implements PipeTransform {

  transform(hexColor: string | null): string {
    if (hexColor && isValidHexColor(hexColor)) {
      const rgba = hexToRgba(hexColor);

      if (rgba) {
        return rgba;
      }
    }

    return 'Invalid color';
  }
}
