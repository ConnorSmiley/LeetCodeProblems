// let array =["eat","tea","tan","ate","nat","bat"]
//
// const something = (a) => {
//     let object = {}
//     console.log(object)
//     for (let b of a){
//         let sort = b.split("").sort().join("")
//         for (i of sort) {
//             object[i] ? object[i].push(b) : object[i] = [b]
//         }
//         return Object.values(object);
//     }
// }
//
// console.log(something(array))


// let array = ["eat", "tea", "tan", "ate", "nat", "bat"]
//
// const something = (a) => {
//     let object = {}
//
//     for (let i of a) {
//         let letters = i.split('').sort().join('')
//         // console.log(letters.split(''))
//         // console.log({i})
//         // console.log({letters})
//
//         if (object[letters]) {
//             let weird = letters.split('').sort().join('')
//
//             object[weird].push(i)
//
//             // console.log([i])
//             // console.log(object)
//             // console.log(object[letters])
//         } else {
//             object[letters] = [i.split('').sort().join('')]
//         }
//     }
//     return Object.values(object)
// }
//
// console.log(something(array))


// const groupAnagrams = function (strs) {
//     const map = new Map();
//
//     strs.forEach(v => {
//         const key = v.split('').sort().join('');
//         map.has(key) ? map.set(key, [...map.get(key), v]) : map.set(key, [v]);
//     })
//
//     return [...map.values()];
// };


// let array = ["eat", "tea", "tan", "ate", "nat", "bat"]
//
// const something = (a) => {
//     let object = {}
//
//     for (let i of a) {
//         let letters = i.split('').sort().join('')
//         // console.log(letters.split(''))
//         // console.log({i})
//         // console.log({letters})
//
//         if (object[letters]) {
//             let weird = letters.split('').sort().join('')
//
//             object[weird].push(i)
//
//             // console.log([i])
//             // console.log(object)
//             // console.log(object[letters])
//         } else {
//             object[letters] = [i]
//         }
//     }
//     return Object.values(object)
// }
//
// console.log(something(array))


// let array = ["eat", "tea", "tan", "ate", "nat", "bat", "tab", "ant"]
//
// const groupAnagrams = function (strs) {
//     let map = new Map()
//     strs.forEach(x => {
//         let splitted = x.split('').sort().join()
//
//         map.has(splitted) ? map.set(splitted, [...map.get(splitted), x]) : map.set(splitted, [x])
//     })
//     return map.values()
// }
//
// console.log(groupAnagrams(array))


let array = ["eat", "tea", "tan", "ate", "nat", "bat", "tab", "ant"]


const groupAnagrams = function (strs) {
    let map = new Map()
    strs.forEach(x => {
        let splitted = x.split('').sort().join('')
        map.has(splitted) ? map.set(splitted, [...map.get(splitted), x]) : map.set(splitted, [x])

    })
    return map
}

console.log(groupAnagrams(array))

























