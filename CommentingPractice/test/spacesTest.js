const assert = require("chai").assert;
const Services = require("./allServices");
const expect = require("chai").expect;

describe("CommentPractice", function () {
  describe("Spaces", function () {
    it("should return input with space between each letter", function () {
      let input = "GIRAFFE";
      let result = Services.Spaces.addSpace(input);
      assert.equal(result, "G I R A F F E ");
    });
    it("should return input if input is not string", function () {
      let input = 58;
      let result = Services.Spaces.addSpace(input);
      assert.equal(result, input);
    });
    it("should handle undefined", function () {
      expect(Services.Spaces.addSpace()).to.be.a("undefined");
    });
  });
});
