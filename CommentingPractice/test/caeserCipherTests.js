var assert = require('assert');
const Services = require('./allServices')


describe('CommentPractice', function () {
  describe('caesarCipher', function () {
    it('should return the given object when the it is not a string', function () {
      let obj = 1000;
      assert.equal(Services.CaeserCipher.caesarCipher(obj), obj);
    });
    it('should handle undefined', function(){
        assert.ok(Services.CaeserCipher.caesarCipher());

    });
  });
});