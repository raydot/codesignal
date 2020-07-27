/**
 * Check an array to see if the elements are in order.
 *  Not dealing with edge cases like item not being a number, etc.
 */

// this works
const isArrayInOrder = (array) => {
  //console.log(array);
  let lowNum = Number.NEGATIVE_INFINITY;
  let found = false;
  array.forEach((element) => {
    if (element >= lowNum) {
      // console.log("False");
      lowNum = element;
    } else {
      found = true;
    }
  });
  return !found;
};

/** TESTS FOR isArrayInOrder
let testArray = [1, 2, 3, 4, 7, 11, 22, 31, 800];
let foo = isArrayInOrder(testArray);
console.log(foo);

let testArray2 = [-800, -30, -5, 0, 10, 55, 200, 2000, 1999];
console.log(isArrayInOrder(testArray2));
*/

/**
 * Array minus me
 * Generate arrays from an array.  Each array should have one of the
 * original array elements missing.
 */

// this works
const arrayMinusMe = (ar) => {
  let i, j;
  ar.forEach((foo, i_index) => {
    outArray = [];
    for (j = 0; j < ar.length; j++) {
      if (j != i_index) {
        outArray.push(ar[j]);
      }
    }
  });
  if (isArrayInOrder(outArray)) {
    return true;
  }
};

// Testing for arrayMinusMe()
// const testArray = [1, 3, 2, 1];
//arrayMinusMe(testArray);

/**
 *
 * almostIncreasingSequence
 * Should be the solution to the puzzle.
 */
const almostIncreasingSequence = (sequence) => {
  let sequenceFound = false;
  if (arrayMinusMe(testArray)) {
    sequenceFound = true;
  }
  return sequenceFound;
};

//const testArray = [1, 3, 2];
const testArray = [10, 1, 2, 3, 4, 5];
console.log("AIS:", almostIncreasingSequence(testArray));
