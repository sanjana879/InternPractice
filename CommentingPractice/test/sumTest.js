const assert = require('chai').assert; 
const Services = require('./allServices'); 

describe('Sum',function() {
    it('should return the sum of two positive numbers',function() {
        let x = 6;
        let y = 2;
        let result = Services.Sum.sum(x,y);
        assert.equal(result,6+2);
    });
    it('should return a negative number', function(){
        let x = 2;
        let y = -3;
        let result = Services.Sum.sum(x,y);
        assert.equal(result, -1);
    });
    it('should return a zero as a valid number', function(){
        let x = 3;
        let y = -3;
        let result = Services.Sum.sum(x,y);
        assert.equal(result, 0);
    });
    it('should return numeric only', function(){
        let x = 2;
        let y = 6;
        let result = Services.Sum.sum(x,y);
        assert.typeOf(result, 'number');
    });
    it('should return proper text when user provide non-numeric value', function(){
        let x = 7;
        let y = "@";
        let result = Services.Sum.sum(x,y);
        assert.equal(result, "Please provide Numbers only")
    });
    
})