










const averagePair = (input, target) => {
    let start = 0
    let end = input.length - 1
    while (start < end) {
        let avg = (input[start] + input[end]) / 2
        if (avg === target) return true
        else if (avg < target) {
            start++
        } else {
            end--
        }
    }
    return false
}


console.log(averagePair([1, 2, 3], 1.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))
