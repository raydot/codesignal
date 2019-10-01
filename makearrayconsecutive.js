//https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function makeArrayConsecutive2(statues) {
    if (statues[0] == statues[1]) return 0
    // sort the array numerically instead of as a string
    statues = statues.sort(((a, b) => a - b))
    //console.log("sorted:', statues)
    let range = (statues[statues.length - 1] - statues[0]) + 1
    console.log('range:', range)
    return range - statues.length
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))
console.log(makeArrayConsecutive2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))