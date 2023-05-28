// let c = "anagram"
// let d = "anagram"
//
// function sort(a, v) {
//     return (a.split('').sort().join("") === v.split('').sort().join(''))
// }
//
// console.log(sort(c, b))


// let word1 = "anagram"
// let word2 = "anagram"
//
//
// function something(a, b) {
//     if (a.length !== b.length) return false
//
//     const map = {}
//
//     for (let i = 0; i < a.length; i++) {
//         map[a[i]] ? map[a[i]]++ : map[a[i]] = 1
//     }
//     console.log(map)
//
//     for (let i = 0; i < b.length; b++){
//         if (map[b[i]]) map[b[i]]--
//         else return false
//     }
//     console.log(map)
//     return true
// }
//
// console.log(something(word1, word2))


// const a = 'car'
// const b = 'car'
//
// function something(c, d) {
//     if (c.length !== d.length) return false
//     const objectmap = {}
//
//     for (let i = 0; i < c.length; i++) {
//         objectmap[c[i]] ? objectmap[c[i]]++ : objectmap[c[i]] = 1
//     }
//     console.log(objectmap)
//
//     for (let i = 0; i < d.length; d++) {
//         if (objectmap[d[i]]) objectmap[d[i]]--
//         else return false
//     }
//     return true
// }
//
// console.log(something(a, b))


// let a = "anagram"
// let b = "anagram"
//
// function hashMap(c, d) {
//     let object = {}
//     for (let i = 0; i < c.length; i++) {
//         object[c[i]] = object[c[i]] ? object[c[i]]+1 : object[c[i]] = 1
//         object[d[i]] = object[d[i]] ? object[d[i]]-1 : object[d[i]] - 1
//         console.log(object)
//     }
//
//     for (key in object) {
//         if (object[key] !== 0) {
//             return false
//         }
//     }
//     return true
// }
//
// console.log(hashMap(a,b))


let a1 = "anagram"
let b1 = "anagram"

function something(a, b) {
    let object = {}
    let s = a.split('')
    let s2 = b.split('')
    for (let i = 0; i < s.length; i++){
        object[s[i]] = (object[s[i]]) + 1 || 1
    }
    for (let i = 0; i < s2.length; i++){
        object[s2[i]] -= object[s2[i]] - 1
    }
}

console.log(something(a1, b1))
console.log(something('dfdaf', 'aaf'))



























