"use strict";

var uniqueInOrder = function(iterable) {
  //your code here - remember iterable can be a string or an array
  //let lastVar;
  if (typeof iterable == "string") iterable = iterable.split("");
  let outArr = [];
  iterable.forEach(item => {
    if (item != outArr[outArr.length - 1]) outArr.push(item);
  });
  console.log(outArr);
};

uniqueInOrder("AAAABBBCCDAABBB");

/**
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */
