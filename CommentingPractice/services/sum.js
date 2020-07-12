/**
* @file a sum function that returns the sum of two numbers.
* @author Adrianna Zhao (UI)
*/

/**
* Returns the sum of two numbers.
* @param {int} x - First number
* @param {int} y - Second number
* return int 
*/
function sum(x, y) {
    if(typeof x != 'number' || typeof y != 'number') {
        return "Please provide Numbers only"
    }
    return x + y
}


export { sum }
