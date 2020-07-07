var assert = require('assert');
const Services = require('./allServices')

var expect = require('chai').expect

describe('CommentPractice', function () {
  describe('caesarCipher', function () {
    it('should return the given object when the it is not a string', function () {
      let obj = 1000;
      let result = Services.CaeserCipher.caesarCipher(obj);
      assert.equal(result, obj);
      expect(result).to.be.a('string'); //example of a failing test

    });
    it('should handle undefined', function(){

        expect(Services.CaeserCipher.caesarCipher()).to.be.a('undefined')

    });
  });
});