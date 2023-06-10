
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
    let object = {}
    let s1 = input.toString().split('')
    let s2 = input2.toString().split('')

    for (let i = 0; i < s1.length; i++){
        object[s1[i]] = object[s1[i]] + 1 || 1
    }
    for (let i = 0; i < s2.length; i++){
        if (object[s2[i]]) {
            object[s2[i]]--
        }
    }
    for (let i in object) {
        if (object[i] > 0) {
            return false
        }
    }
    return true
}





console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22,222))
console.log(sameFrequency(0,0))





























