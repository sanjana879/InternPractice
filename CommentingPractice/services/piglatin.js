/**
 * @file A pig latin file
 * @author Sonia Saitawdekar
 */

 /**
  * Translates the given string to pig latin
  * @param {string} input - the string to translate
  * @returns {string} - input in pig latin, all lowercase
  */
 function toPigLatin(input) {
     if(typeof input != 'string') {
         return "input was not a string";
     }
     input.toLowerCase;
     let output = "";
     if (isVowel(input.charAt(0))) {
       output = input + "yay";
     } else {
       output = input.substring(1,input.length) + input.charAt(0) + "ay";
     }
     return output;
 }

 /**
  * Checks if the given character is a vowel
  * @param {char} char - character to check
  * @returns {boolean} - true is char was a vowel, false otherwise
  */
 function isVowel(char) {
   return char == "a" || char == "e" || char == "i" || char == "o" || char == "u";
 }

 export { toPigLatin }