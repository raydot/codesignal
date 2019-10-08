function almostIncreasingSequence(sequence) {
  if (sequence.length == 1) return true;

  let goodToGo = 0,
    i = 0,
    j = 0;

  while (i < sequence.length && goodToGo < 2) {
    for (j = i + 1; j < sequence.length; j++) {
      if (sequence[i] >= sequence[j]) {
        sequence.splice(j, 1);
        i--;
        j = i + 1;
        goodToGo++;
        //break;
      } else {
        i++;
      }
    }
  }

  console.log("goodToGo", goodToGo);

  return goodToGo <= 2 ? false : true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
