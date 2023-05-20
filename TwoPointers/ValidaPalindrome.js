// let s1 = "A man, a plan, a canal: Panama"
// let s2 = "race a car"
// let s3 = " "
//
//
// const something = (input) => {
//     let array = []
//
//     let splitted = input.split(/[',:\s]+/).join('').toLowerCase()
//
//     if (splitted === [...splitted].reverse()) return true
//     return false
// }
//
//
// console.log(something(s1))
// console.log(something(s2))
// console.log(something(s3))




let string = 'Hello'

const something = (input) => {
    let map = new Map()
    let object = input.toLowerCase().split('')
    object.forEach(x => map.set(x, map.get(x) + 1 || 1))
    let sorted = [...map].sort((a, b) => b[1] - a[1])
    return map
}


console.log(something(string))
