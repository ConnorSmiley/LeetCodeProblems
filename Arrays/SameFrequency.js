
// const sameFrequency = (input, input2) => {
//     let map = new Map()
//     let s = input.toString()
//     let s2 = input2.toString()
//     if (s.length !== s2.length) return false
//
//     for (let i of s){
//         map.set(i, map.get(i) + 1 || 1)
//     }
//
//     for (let i of s2){
//         map.delete(i, map.get(i))
//     }
//     return (map.size === 0)
// }







const sameFrequency = (input, input2) => {
    let map = new Map()
    let s = input.toString()
    let s2 = input2.toString()

    for (let i of s) {
        map.set(i, map.get(i) + 1 || 1)
    }

    for (let i of s2){
        map.delete(i)
    }
    if (map.size !== 0){
        return false
    }
    return true

}





console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22,222))
console.log(sameFrequency(0,0))





























