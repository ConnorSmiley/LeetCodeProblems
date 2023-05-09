// array = [1, 1, 1, 2, 2, 3]
// // k = 2
// array1 = [1]
// // k = 1
// array2 = [20, 20, 10, 10, 11, 11, 21, 12, 13, 14, 15]
// // k = 1
// array3 = [3, 1, 4, 4, 5, 2, 6, 1]
// // K = 2
// array4 = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9]
// // K = 4
//
// const something = (nums, k) => {
//     let map = new Map()
//     nums.forEach(x => map.set(x, map.get(x) + 1 || 1))
//     let sort = [...map.entries()].sort((a, b) => b[1] - a[1])
//     let mapped = sort.map(x  => x.shift())
//     return mapped.slice(0, k)
// }
//
//
// // console.log(something(array, 2))
// // console.log(something(array1, 1))
// console.log(something(array2, 2))
// // console.log(something(array3, 4))
// // console.log(something(array4, 5))


array = [1, 1, 1, 2, 2, 3]
// k = 2
array1 = [1]
// k = 1
array2 = [20, 20, 10, 10, 11, 11, 21, 12, 13, 14, 15]
// k = 1
array3 = [3, 1, 4, 4, 5, 2, 6, 1]
// K = 2
array4 = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9]
// K = 4

const something = (nums, k) => {
    let map = new Map()
    nums.forEach(x => map.set(x, map.get(x) + 1 || 1))
        let sorted = [...map].sort((a, b) => b[1] - a[1])
        let mapped = sorted.map(x  => x.shift())
        return mapped.slice(0, k)
}


// console.log(something(array, 2))
// console.log(something(array1, 1))
console.log(something(array2, 2))
// console.log(something(array3, 4))
// console.log(something(array4, 5))
























