const assert = require("chai").assert;
const Services = require("./allServices");
const expect = require("chai").expect;

describe("CommentPractice", function () {
  describe("Arithmetic", function () {
    it("should return num1 % num2", function () {
      let num1 = 6;
      let num2 = 4;
      let result = Services.Arithmetic.Modulo(num1, num2);
      assert.equal(result, 2);
    });
    it("should return undefined if input is not two numbers", function () {
      let num1 = 58;
      let num2 = "name";
      let result = Services.Arithmetic.Modulo(num1, num2);
      expect(Services.Arithmetic.Modulo(num1, num2)).to.be.a("undefined");
    });
  });
});
