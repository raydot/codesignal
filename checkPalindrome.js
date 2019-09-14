function checkPalindrome(inputString) {
    // You only need check half the string...
    var isl = inputString.length
    var terminal = Math.floor(isl/2) 
    
    console.log("isl: ", isl)
    console.log("terminal", terminal)

    for (let i = 0; i < terminal; i++) {
        console.log("i:", i, "isl - i - 1:", isl - i - 1)        
        if (inputString[i] != inputString[isl - i - 1]) {
            console.log(i, inputString[i], inputString[isl - i - 1])
            return false
        }
    }
    return true
}

checkPalindrome("abbabba");