








let sum = [-4, -3, -2, -1, 0, 1]

const something = (input) => {
    //track left node
    let left = 0
    //track right node
    let right = input.length -1
    // loop array
    while (left < right) {
        let sum = input[left] + input[right]
        if (sum === 0) {
            return [input[left], input[right]]
        } else if (sum > 0) {
            right--
        }else {
            left++
        }
    }

}




console.log(something(sum))
