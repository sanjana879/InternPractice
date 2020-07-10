const assert = require('chai').assert;
const Services = require('./allServices');

describe('Product', function(){
    it('should return the product of two numbers', function(){
        let a = 2;
        let b = 3;
        let result = Services.Product.product(a,b);
        assert.equal(result, 2*3);
    });
    it('should return a number given two numbers', function(){
        let a = 2;
        let b = 3;
        let result = Services.Product.product(a,b);
        assert.typeOf(result, 'number');
    });
    it('should return a "Make sure to input two valid numbers" if one of the inputs is not a number', function(){
        let a = 2;
        let b = "A";
        let result = Services.Product.product(a,b);
        assert.equal(result, "Make sure to input two valid numbers")
    });
})