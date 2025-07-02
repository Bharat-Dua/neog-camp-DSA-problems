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

//? Problem 3 :- Given a string count the number of time each word has occurred in the string.
/*
Input: "Hello from hello to hello"

Output: {
  "Hello":1,
  "from":1,
  "hello":2,
  "to":1
}
*/

//* using 2d array to store the frequency of each word
//* Time Complexity :- O(n^2) where n is the number of words and m is the length of the word
//* Space Complexity :- O(n) due to the space used by the 2d array

let inputSentence = "Hello from hello to hello";

function isWordPresentInArray(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === word) {
      arr[i][1] += 1; // increment the frequency of the word
      return true;
    }
  }
  return false;
}
function countEachWordOccurence(str) {
  let frequencyArray = []; // 2d array to store the frequency of each word
  let words = str.split(" ");
  for (const word of words) {
    if (!isWordPresentInArray(frequencyArray, word)) {
      frequencyArray.push([word, 1]); // if the word is not present in the array, add it with frequency 1
    }
  }
  return frequencyArray;
}

console.log(countEachWordOccurence(inputSentence));

//? Problem 4 :- Find largest and smallest word in  a string

//* brute force approach :-

//* Time complexity :- o(n)
//* Space complexity :- o(n)

/*
Input : "This is a test string"
Output : Minimum length word: a
         Maximum length word: string
*/
let inputStr = "This is a test string";
function findMinMaxWordInString(str) {
  if (!str) return ["smallestWord: '', largestWord: ''"];
  str = str.split(" ");
  let smallestWord = str[0];
  let largestWord = inputStr[0];
  for (const word of str) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
    if (word.length < smallestWord.length) {
      smallestWord = word;
    }
  }
  return [`smallestWord: ${smallestWord},largestWord: ${largestWord}`];
}

console.log(findMinMaxWordInString(inputStr));

//* optimised approach
//* TC - O(N) SC- O(1);

function findMinMaxWordInString(str) {
  if (!str) return ["smallestWord: '', largestWord: ''"];
  let smallestWord = str.trim();
  let largestWord = str.trim();
  let currentWord = "";
  let isWord = false;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar === " " || i === str.length) {
      if (isWord) {
        if (currentWord.length > largestWord.length) {
          largestWord = currentWord;
        }
        if (currentWord.length < smallestWord.length) {
          smallestWord = currentWord;
        }
        currentWord = "";
      }
    } else {
      currentWord += currentChar;
      isWord = true;
    }
  }
  return [`smallestWord: ${smallestWord}, largestWord: ${largestWord}`];
}

console.log(findMinMaxWordInString(inputStr));
["smallestWord: a, largestWord: This is a test string"];
