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
  // for (i = 0; i < sequence.length; i++) {
  //     for (j = i + 1; j < sequence.length; j++) {
  //         if (sequence[i] > sequence[j]) {
  //             goodToGo++
  //         }
  //     }
  // }
  // //goodToGo = 0
  // for (j = i; j < sequence.length; j++) {
  //     if (sequence[i] >= sequence[j]) {
  //         goodToGo++
  //     }
  // }

  //if (goodToGo > 2) return false
  //if (sequence[i] >= sequence[i + 1]) {
  // if (j < sequence[i]) {
  //     //goodToGo++
  //     //j = sequence [i]
  //     j = sequence[i]
  //     console.log('j:', j)
  // } else {
  //     goodToGo++
  // }

  //return true;
  console.log("goodToGo", goodToGo);

  return goodToGo <= 2 ? true : false;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
