



const sortedFrequency = (x, num) => {
    let object = {}

    for (let i in x) {
        object[x[i]] = object[x[i]] + 1 || 1
    }
    if (object[num] === undefined) {
        return 0
    }
    return object[num]
}








console.log(sortedFrequency([1,1,2,2,2,2,3],2))
console.log(sortedFrequency([1,1,2,2,2,2,3],3))
console.log(sortedFrequency([1,1,2,2,2,2,3],1))
console.log(sortedFrequency([1,1,2,2,2,2,3],4))





























