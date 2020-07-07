/**
 * @file Starter code from Iniya :)
 * @author Iniya Rajamani (Front-End Web Developer)
 */

 
 /**
  * Converts a sentence into an array of words.
  * @param {string} sentence - The sentence to split.
  * @returns {Array} words - The array of words in the sentence.
  */
 function sentenceToWords(sentence)
 {
    if(typeof input != 'string') //Makes sure the input is a String
        throw "Input was not a String!"; //Throws an error if not a String

    var words = sentence.split(" "); //Split method between every space
    return words;
 }

export {sentenceToWords}