const assert = require('assert'); 
const Services = require('./allServices'); 
const expect = require('chai').expect 

describe('CommentPractice', function () {
    describe('backwardsName', function() {
        it('should return the given input when the input is not a string', function(){
            let input = 1; 
            let result = Services.Backwards.backwardsName(input); 
            assert.equal(result,input); 
        });
        it('should handle undefined', function(){
            expect(Services.Backwards.backwardsName()).to.be.a('undefined'); 
        })
    });


});