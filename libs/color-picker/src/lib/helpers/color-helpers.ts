export const HEX_COLOR_PATTERN = /^#([A-Fa-f0-9]{3}){1,2}$/;

export function isValidHexColor(color: string | null): boolean {
  return typeof color === 'string' ? HEX_COLOR_PATTERN.test(color) : false;
}

export function hexToRgba(hexColor: string | null, alpha = 1): string | null {
  if (hexColor) {
    const getChunksFromString = (str: string, chunkSize: number): RegExpMatchArray | null => {
      return str.match(new RegExp(`.{${chunkSize}}`, 'g'));
    };
    const convertHexUnitTo256 = (hexStr: string): number => {
      return parseInt(hexStr.repeat(2 / hexStr.length), 16);
    };
    const getAlphaFloat = (a: number | undefined, alpha: number): number => {
      if (typeof a !== 'undefined') {
        return a / 255;
      }

      if (!alpha || (alpha < 0 || alpha > 1)) {
        return 1;
      }

      return alpha;
    };

    const chunkSize = Math.floor((hexColor.length - 1) / 3);
    const hexArr = getChunksFromString(hexColor.slice(1), chunkSize) as RegExpMatchArray;
    const [ r, g, b, a ] = hexArr.map(convertHexUnitTo256);

    return `rgba(${ r }, ${ g }, ${ b }, ${ getAlphaFloat(a, alpha) })`;
  }

  return null;
}
