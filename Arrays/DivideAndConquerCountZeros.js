




const countZeroes = (x) => {
    let object = {}
    for (let i = 0; i < x.length; i++){
        object[x[i]] = object[x[i]] + 1 || 1
    }
    if (object[0] === undefined) {
        return 0
    } else {
        return object[0]
    }
}















console.log(countZeroes([1,1,1,1,0,0]))
console.log(countZeroes([1,0,0,0,0]))
console.log(countZeroes([0,0,0]) )
console.log(countZeroes([1,1,1,1]))





