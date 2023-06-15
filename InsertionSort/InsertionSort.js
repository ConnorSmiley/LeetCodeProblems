





const insertionSort = (input) => {
    for (let i = 0; i < input.length; i++){
        let currentVal = input[i]
        for (let d = i-1; d >= 0 && input[d] > currentVal; d--){
            input[d+1] = input[d]
        }
        input[d+1] = currentVal
    }
    return input
}













































