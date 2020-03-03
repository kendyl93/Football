import { any, equal } from './array';

describe('array', () => {
  describe('any', () => {
    it('should return true because array has some elements', () => {
      const array = [{}, 4, [], 'qwe'];
      const expected = true;

      expect(any(array)).toBe(expected);
    });

    it('should return false because array has NO elements', () => {
      const array = [];
      const expected = false;

      expect(any(array)).toBe(expected);
    });
  });

  describe('equal', () => {
    it('should return true because arrays are equals', () => {
      const a = [1, 4, 5, 'qwe'];
      const b = [1, 4, 5, 'qwe'];
      const expected = true;

      expect(equal(a, b)).toEqual(expected);
    });

    it('should return false because arrays are NOT equals', () => {
      const a = [1, 4, 5];
      const b = [1, 8, 10];
      const expected = false;

      expect(equal(a, b)).toEqual(expected);
    });
  });
});
