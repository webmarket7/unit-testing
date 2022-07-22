import { HexToRgbaPipe } from './hex-to-rgba.pipe';
import { hexToRgba, isValidHexColor } from '../helpers/color-helpers';

jest.mock('../helpers/color-helpers');

const mockHexToRgba = hexToRgba as jest.MockedFunction<typeof hexToRgba>;
const mockIsValidHexColor = isValidHexColor as jest.MockedFunction<typeof isValidHexColor>;

describe('HexToRgbaPipe', () => {
  let pipe: HexToRgbaPipe;

  beforeEach(() => {
    pipe = new HexToRgbaPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return valid rgba if hex color is valid', () => {
    mockIsValidHexColor.mockReturnValue(true);
    mockHexToRgba.mockReturnValue('test');

    expect(pipe.transform('#000000')).toBe('test');
  });

  it('should return message if hexColor is invalid or null', () => {
    mockIsValidHexColor.mockReturnValue(false);
    expect(pipe.transform('#00000')).toBe('Invalid color');

    mockIsValidHexColor.mockReturnValue(false);
    expect(pipe.transform(null)).toBe('Invalid color');
  });
});
