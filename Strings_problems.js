//* Strings *//

//? Problem 1 :- check if a string is pangram or not

//* pangram :- a sentence that contains all the letters of the alphabet at least once.

/*
Input :- Hello how are you 
Output :- false
Input :- A quick brown fox jumps over the lazy dog.
Output :- true 

*/
//* Time Complexity :- O(n) where n is the length of the string
//* Space Complexity :- O(1) due to constant space used

let sentence = "The quick brown fox jumps over the lazy dog.";

function isPangram(str) {
  // edge case
  if (str.length === 0) return false;

  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  str = str.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (!str.includes(alphabet[i])) return false;
  }
  return true;
}

console.log(isPangram(sentence)); // true

//? Problem 2 :- Tokenize a string

/* 
Input: Banana and Mango
Token: a
Output: [B, n, n,  ,nd M, ngo]
*/

//* Time Complexity :- O(n) where n is the length of the string
//* Space Complexity :- O(n) due to the space used by the output array

let input = "Banana and Mango";
let token = "a";
function tokenizeTheString(str, token) {
  if (str.length === 0) return [];
  let tokenArray = [];
  let previousLiteralTemp = ""; // temp variable to store the previous literal

  for (let i = 0; i < str.length; i++) {
    if (str[i] === token) {
      tokenArray.push(previousLiteralTemp);
      previousLiteralTemp = "";
    } else {
      previousLiteralTemp += str[i];
    }
  }
  tokenArray.push(previousLiteralTemp);
  return tokenArray;
}

console.log(tokenizeTheString(input, token)); // [B, n, n,  ,nd M, ngo]
