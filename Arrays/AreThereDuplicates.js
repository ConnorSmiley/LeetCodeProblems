// const areThereDuplicates = (...input) => {
//     let object = {}
//     for (let i = 0; i < input.length; i++){
//         object[input[i]] = object[input[i]] + 1 || 1
//     }
//     console.log(object)
//     for (let key in object) {
//         if (object[key] > 1) {
//             return false
//         }
//     }
//     return true
// }


















































const areThereDuplicates = (...input) => {
    let object = {}
    for (let i = 0; i < input.length; i++){
        object[input[i]] = object[input[i]] + 1 || 1
    }
    for (let key in object) {
        if (object[key] > 1) {
            return false
        }
    }
    return true
}




console.log(areThereDuplicates('a', 'b', 'c', 'a')
)
console.log(areThereDuplicates(1, 2, 2)
)
console.log(areThereDuplicates(1, 2, 3)
)
















