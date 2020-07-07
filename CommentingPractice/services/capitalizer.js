/**
 * @file Some starter code from Amonte
 * @author Amonte Andrews (no team)
 */


 /**
  * Randomly capitalizes letters within the string.
  * @param {string} input 
  * @returns string
  */
function randomlyCapitalize(input)
{
    if(typeof input != 'string') //ensure we're dealing with a string
    {
        return input;
    }

    let output = "";
    let index  = 0;
    //iterate through string and make a random decision on whether to capitalize
    for(var char in input) 
    {
        let current = input[index];
        if(Math.floor(Math.random() * (10) > 5)) 
        {
            current = current.toUpperCase();
        }
        output+=current;
        index++;

    }
    return output;
}

 export { randomlyCapitalize }