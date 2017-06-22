/* eslint-env mocha */
const expect = require('chai').expect;
const { average } = require('./average.js');

describe('#average(nums)', () => {
  describe('Ideal Behavior', () => {
    it('returns the only element of a single element array', () => {
      expect(average([1])).to.eq(1);
      expect(average([2])).to.eq(2);
    });
    it('returns the average of an array of length > 1', () => {
      expect(average([2, 4])).to.eq(3);
    });
    it('recognizes numeric strings', () => {
      expect(average(['2', 4])).to.eq(3);
    });
  });
  describe('Error Behavior', () => {
    it('throws an error with an empty array', () => {
      expect(() => average([])).to.throw('Empty Input');
    });
    it('throws an error with non-numeric input', () => {
      expect(() => average([4, 'asdf'])).to.throw('asdf', 'Invalid Input');
    });
  });
});
