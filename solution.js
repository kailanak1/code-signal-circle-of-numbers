function circleOfNumbers(n, firstNumber) {
    let halfway = Math.round(n/2)
    let total = firstNumber + halfway
    if(total >= n){
        return total - n
    } else {
        return total
    }
}
