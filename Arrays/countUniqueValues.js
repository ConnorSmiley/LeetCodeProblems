














































const countUniqueValues = (input) => {
    if (!input.length) return 0
    let object = {}
    for (let i = 0; i < input.length; i++){
        object[input[i]] = object[input[i]] + 1 || 1
    }
    let val = Object.values(object)
    return val.length
}



console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]) )
console.log(countUniqueValues([-2,-1,-1,0,1]))























