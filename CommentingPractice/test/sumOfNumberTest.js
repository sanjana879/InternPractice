
const assert = require('assert');
const Services = require('./allServices');
const expect = require('chai').expect

describe('CommentPractice', function () {
  describe('sumOfNumber', function () {
    it('should return the given object when the result is correct', function () {
      let obj = 15;
      let result = Services.SumOfNumber.sumOfNumber(obj);
      assert.equal(result, 120);

    });
    it('should handle undefined', function(){
        let obj = 15;
        expect(Services.SumOfNumber.sumOfNumber(obj)).to.be.a('number')

    });
    it('should throw type error', function(){
      let obj = "string";
      expect(() => Services.SumOfNumber.sumOfNumber(obj)).to.throw(TypeError);
    });
    it('should not throw type error', function(){
      let obj = 15;
      expect(() => Services.SumOfNumber.sumOfNumber(obj)).to.not.throw(TypeError);
    });
  });
});