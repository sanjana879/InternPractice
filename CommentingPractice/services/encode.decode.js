/**
 * @file encoder/decode by Henry
 * @author Henry Chen
 */


 /**
  * Encodes a string and decodes encoded string.
  * @param {string} input 
  * @returns string
  */

const dict={
    "a":"/","b":"#","c":"v","d":"l", "e":"]","f":"s","g":"@","h":"5",
    "i":"j","j":"6","k":"{","l":"2", "m":"}","n":"9","o":"0","p":"h",
    "q":"<","r":">","s":"$","t":"r", "u":"?","v":"-","w":"+","x":"=",
    "y":")","z":"%",
    "1":"m","2":"x","3":"a","4":"c","5":":","6":"!","7":"k","8":"y","9":"t","0":"[",
}

function encode(input){
    /** check type of input */
    if (typeof input != 'string') 
    {
        return input;
    }
    let encodedArray=[];
    for (letter of input){
        encodedArray.push(dict[letter])
    }
    encodedString=encodedArray.join('');
    return (encodedString);

}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
function decode(input){
    /** check type of input */
    if (typeof input != 'string') 
    {
        return input;
    }
    let decodedArray=[];
    for (letter of input){

        decodedArray.push(getKeyByValue(dict,letter))
    }
    decodedString=decodedArray.join('');
    return (decodedString);

}
export { dict, encode, getKeyByValue,decode}