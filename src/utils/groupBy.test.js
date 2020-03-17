import { groupBy } from './groupBy';

describe('GroupBy', () => {
  describe('groupBy', () => {
    it('Should group by color', () => {
      const test = {
        a: { name: 'Anna', color: 'red' },
        b: { name: 'John', color: 'blue' },
        c: { name: 'Jenny', color: 'red' }
      };
      const expected = {
        red: [
          { name: 'Anna', color: 'red' },
          { name: 'Jenny', color: 'red' }
        ],
        blue: [{ name: 'John', color: 'blue' }]
      };

      expect(groupBy('color')(test)).toMatchObject(expected);
    });

    it('Should group by nested object value', () => {
      const test = {
        a: { name: 'Anna', address: { city: 'Barcelona' } },
        b: { name: 'Jenny', address: { city: 'Barcelona' } },
        c: { name: 'John', address: { city: 'Madrit' } },
        d: { name: 'Brad', color: 'red', address: { city: 'Sevilla' } },
        e: { name: 'Jenny', color: 'red', address: { city: 'Sevilla' } }
      };
      const expected = {
        Barcelona: [
          { name: 'Anna', address: { city: 'Barcelona' } },
          { name: 'Jenny', address: { city: 'Barcelona' } }
        ],
        Sevilla: [
          { name: 'Brad', color: 'red', address: { city: 'Sevilla' } },
          { name: 'Jenny', color: 'red', address: { city: 'Sevilla' } }
        ],
        Madrit: [{ name: 'John', address: { city: 'Madrit' } }]
      };

      expect(groupBy('address.city')(test)).toMatchObject(expected);
    });
  });
});
