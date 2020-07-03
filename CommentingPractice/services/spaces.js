/**
 * @file A space adding file from Martin
 * @author Martin Vityk (Firebase)
 */


 /**
  * Adds spaces between every character in the string
  * @param {string} input 
  * @returns string
  */
 function addSpace(input)
{
    if(typeof input != 'string') //ensure we're dealing with a string
    {
        return input;
    }

    let output = "";
    let index  = 0;
    //iterate through string and add space to the end of string
    for(var char in input) 
    {
        let current = input[index];
        output += current+" ";
        index++;

    }
    return output;
}

 export { randomlyCapitalize }