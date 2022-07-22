import { isValidHexColor, hexToRgba } from './color-helpers';

describe('ColorHelpers', () => {

  describe('test isValidHexColor', () => {
    it('should return false if hex color is null', () => {
      expect(isValidHexColor(null)).toBe(false);
    });

    it('should return false if hex color is invalid string', () => {
      expect(isValidHexColor('#00000')).toBe(false);
      expect(isValidHexColor('#0000000')).toBe(false);
      expect(isValidHexColor('00000')).toBe(false);
      expect(isValidHexColor('')).toBe(false);
    });

    test('returns true if hex color is valid', () => {
      const isValid = isValidHexColor('#000000');

      expect(isValid).toBe(true);
    });
  });

  describe('test hexToRgba', () => {
    it('should return null if hex color is null', () => {
      expect(hexToRgba(null)).toBe(null);
    });

    it('should return correct rgba string if hex color is valid', () => {
      expect(hexToRgba('#000000')).toBe('rgba(0, 0, 0, 1)');
    });

    it('should return correct rgba string with alpha 1 if alpha is invalid', () => {
      expect(hexToRgba('#000000', 2)).toBe('rgba(0, 0, 0, 1)');
    });

    it('should return correct rgba string if hex color is 8 character long', () => {
      expect(hexToRgba('#32CD3266', 2)).toBe('rgba(50, 205, 50, 0.4)');
    });
  });
});
