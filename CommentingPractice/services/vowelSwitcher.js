/**
  @file Some starter code from Richard
  @author Richard Watson (Backend Development team)
*/

/**
Goes through the user's input and switches every vowel to another random vowel
@param {string} input
@returns {string}
*/
function randomVowels(input) {
  if (typeof input != "string") {
    //checks if input is a String
    throw "Please input a string";
  }
  input = input.toLowerCase();

  let output = "";
  let vowels = "aeiou";
  for (var i = 0; i < input.length; i++) {
    if (isVowel(input.charAt(i))) {
      output += vowels[Math.floor(Math.random() * 4)];
    } else {
      output += input[i];
    }
  }
  console.log("Original input: " + input + "\n" + "Output: ");
  return output;
}

function isVowel(char) {
  return (
    char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
  );
}
export { randomVowels };
