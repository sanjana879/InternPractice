/**
* @file a product function that returns the products of two numbers.
* @author Cameron Senor
*/

/**
* Returns the product of two numbers.
* @param {int} num1 - First number
* @param {int} num2 - Second number
* return int 
*/
function product(num1, num2){
  var assert = require('chai').assert;
  if(typeof num1 != 'number' || typeof num2 != 'number'){
    return "Make sure to input two valid numbers"
  }
  return num1 * num2
}
  
  
export { product }
