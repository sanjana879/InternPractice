/** 
* @file Starter code from Mitchell
* @author Mitchell Lin (Web Developer)
*/

/**
 * Will encrypt lowercase string with a left shift of 3 (Caesar Cipher).
 * @param {string} input - only lowercase characters
 * @return string
 */
function caesarCipher(input)
{
    //ensures input is a string
    if (typeof input != 'string') 
    {
        return input;
    }
    let output = "";
    //sets any uppercase characters to lowercase
    input = input.toLowerCase();
    //iterates through string and shifts each character
    for (var i = 0; i < input.length; i++) {
        let ascii = input.charCodeAt(i) - 3;
        if (ascii < 97){
            ascii += 26;
        }
        var newChar = String.fromCharCode(ascii);
        output+=String(newChar);
    }
    return output;
}

 export { caesarCipher }