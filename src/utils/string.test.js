import { trimAllSpaces } from './string';

describe('String', () => {
  describe('trimAllSpaces', () => {
    it('Should remove single spaces between character', () => {
      const test = ' a b c ';
      const expected = 'abc';

      expect(trimAllSpaces(test)).toEqual(expected);
    });

    it('Should remove all spaces between character', () => {
      const test = ' a      b c     ';
      const expected = 'abc';

      expect(trimAllSpaces(test)).toEqual(expected);
    });

    it('Should return empty string in case no arguments', () => {
      const expected = '';

      expect(trimAllSpaces()).toEqual(expected);
    });
  });
});
