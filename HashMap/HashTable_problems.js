//? Problem 1 :- Find whether an array is subset of another array

/*
**Input**: 
arr1=[1, 3, 4, 2, 5, 6] 
arr2=[1, 4, 2] 

**Output**: arr2 is a subset of arr1
    
**Input**:

arr1[10, 5, 2, 23, 19],
arr2=[19, 5, 3]

**Output**: arr2 is not a subset of arr1
*/
//* TC - O(m+n)
//* SC - O(m)
const arr1 = [5, 6, 7, 8, 9, 10, 11];
const arr2 = [7, 8, 9, 11];

function isSubsetOfAnotherArray(arr1, arr2) {
  const map = new Map();
  for (const element of arr1) {
    map.set(element, true);
  }
  for (const element of arr2) {
    if (!map.has(element)) return false;
  }
  return true;
}

console.log(isSubsetOfAnotherArray(arr1, arr2));
