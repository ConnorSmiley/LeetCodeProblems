const a = 'aaaabbbcccccccc'

function compute (x) {
    let count = 0
    let result = ""
    for (let i = 0; i <= x.length; i++) {
        if (x[i] === x[i + 1]) {
            count ++
        } else {
            result += count + x[i]
            count = 1
        }
    }
    return result
}



console.log(compute(a))
