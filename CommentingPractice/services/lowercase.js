/**
 * @file Some starter code from Ramitha
 * @author Ramitha Kotarkonda (Web Developer)
 */


 /**
  * Makes all the letters in the string lowercase.
  * @param {string} input 
  * @returns string
  */
function lowercase(input)
{
    if (typeof input != 'string') //ensure we're dealing with a string
    {
        return input;
    }
   
    /* converts all the characters in the string to lowercase. */

    let output = "";
    output = input.toLowerCase();
    return output;
}

 export { lowercase }
