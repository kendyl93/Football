import { datesEqual, transformDateMonthAndYearToArray } from './date';

describe('date', () => {
  describe('transformDateMonthAndYearToArray', () => {
    it('should return an array with number of day, month(minus 1) and year from date', () => {
      const date = new Date('2020/05/25');
      const expected = [25, 4, 2020];

      expect(transformDateMonthAndYearToArray(date)).toEqual(expected);
    });

    it('should ignore time and should return an array with number of day, month(minus 1) and year from date', () => {
      const date = new Date('2020-01-25T20:06:51.410Z');
      const expected = [25, 0, 2020];

      expect(transformDateMonthAndYearToArray(date)).toEqual(expected);
    });
  });

  describe('datesEqual', () => {
    it('should return true because dates are equal', () => {
      const a = new Date('2020/05/25');
      const b = new Date('2020/05/25');
      const expected = true;

      expect(datesEqual(a, b)).toEqual(expected);
    });

    it('should ignore time and return true because dates are equal', () => {
      const a = new Date('Mon Mar 02 2020 09:00:00 GMT+0100');
      const b = new Date('Mon Mar 02 2020 09:00:00 GMT+0100');
      const expected = true;

      expect(datesEqual(a, b)).toEqual(expected);
    });

    it('should ignore time and return false because dates are NOT equal', () => {
      const a = new Date('2020-01-24T20:06:51.410Z');
      const b = new Date('2020-01-25T20:06:51.410Z');
      const expected = false;

      expect(datesEqual(a, b)).toEqual(expected);
    });
  });
});
