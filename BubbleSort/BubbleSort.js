






















const bSort = (input) => {
    for (let i = input.length; i > 0; i--) {
        for (let d = 0; d < i + 1; d++){
            if (input[d] > input[i]) {
               let temp = input[d]
                input[d] = input[i]
                input[i] = temp
            }
        }
    }
    return input
}


console.log(bSort([64, 34, 25, 12, 22, 11, 90]))
