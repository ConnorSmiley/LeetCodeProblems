// let array = [
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
//     12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//     24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//     36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//     48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//     60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//     72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//     84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//     96, 97, 98, 99, 100
// ]
//
//
// const something = (input, val) => {
//     let min = 0
//     let max = input.length - 1
//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2)
//         if (input[middle] < val) {
//             min = middle + 1
//         } else if (input[middle] > val) {
//             max = middle - 1
//         } else {
//             return middle
//         }
//     }
//
// }
//
//
// console.log(something(array, 76))
//

// console.log(something(array, 9))



































































































let array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
    72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
    96, 97, 98, 99, 100
]


const something = (input, val) => {
    let min = 0
    let max = input.length-1
    while (min <= max) {
        let mid = Math.floor((min/max) /2)
        let curr = input[mid]
        if (array[mid < val)  {
            min = mid + 1
        }
        if (array[mid] > val) {
            max = mid - 1
        }
        else {
            return mid
        }
    }

}


console.log(something(array, 76))


// console.log(something(array, 9))



















