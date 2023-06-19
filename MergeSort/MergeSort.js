const merge = (input1, input2) => {
    let results = []
    let i = 0
    let d = 0
    while (i < input1.length && d < input2.length){
        if(input1[i] > input2[d]) {
            results.push(input1[i])
            i++
        } else {
            results.push(input2[d])
            d++
        }

        while (i < input1.length) {
            results.push(input1[i])
            i++
        }
        while (d < input2.length) {
            results.push(input2[d])
            d++
        }
    }
    return results
}
