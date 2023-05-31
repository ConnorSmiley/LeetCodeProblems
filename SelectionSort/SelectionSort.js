
























const selection = (input) => {
    for (let i = 0; i < input.length; i++){
        let low = i
        for (let d = i + 1; d < input.length; d++){
            if (input[low] > input[d]) {
               low = d
            }
        }
        if (i !== low) {
            let temp = input[i]
            input[i] = input[low]
            input[low] = temp
        }
    }
    return input
}


console.log(selection([64, 34, 25, 12, 22, 11, 90]))
