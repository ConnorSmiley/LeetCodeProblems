let values = [1, 1, 1, 1, 2, 4, 5, 5]


const something = (input) => {
    let i = 0
    for (let j = 1; j < input.length; j++) {
        if (input[i] !== input[j]) {
            i++
            input[i] = input[j]
        }
    }
    return i + 1
}

console.log(something(values))
