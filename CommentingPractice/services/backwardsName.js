/** 
* @file Starter code from Luis 
* @author Luis Moran (Web Developer)
*/


/**
 * Will take input of name and return name backwards
 * @param {string} input 
 * @return string
 */

// The function will take an input that should be a name then reverse the name. 
const backwardsName = input => {
    // will check to make sure string is input.
    if(typeof input !== 'string'){
        return input;
    }
    //
    // 1.Will make input first into an array for each letter in the input. 
    // 2.Will then reverse the array order
    // 3.Will combine the array into a string again   
    let output = input.split("").reverse().join('').toUpperCase();
    
    return output; 
    
}

export {backwardsName}