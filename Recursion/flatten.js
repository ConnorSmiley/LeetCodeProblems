// const flatten = (input) => {
//     let array = []
//     for (let i = 0; i < input.length; i++){
//         if (Array.isArray(input[i])) {
//             array = array.concat(flatten(input[i]))
//         }else {
//             array.push(input[i])
//         }
//     }
//     return array
// }
//










































const flatten = (input) => {
    let array = []
    for (let i = 0; i < input.length; i++){
        if (Array.isArray(input[i])) {
            array = array.concat(flatten(input[i]))
        } else {
            array.push(input[i])
        }
    }
    return array
}




























console.log(flatten([1, 2, 3, [4, 5] ]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1],[2],[3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) )











































