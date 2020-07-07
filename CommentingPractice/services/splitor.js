/**
 * @file Some starter code from Adil
 * @author Adil Merribi (Mobile Dev)
 */

/**
 * concatenates a string into characters
 * @param {string} str 
 * @returns array of characters
 */

function myChars(str) {
    if (typeof str != 'string') //ensure we're dealing with a string
    {
        return str;
    }
    var result = str.split("");
    return result;
 }


export {myChars}
