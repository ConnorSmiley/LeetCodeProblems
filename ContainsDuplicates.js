// let mapped = nums.map((a, i) => {
//     return i
// })
//
// let array = mapped.some((a, i) => {
//     return mapped.indexOf(a) !== i
// })
//
// function xxx(array) {
//     if (array) {
//         return false
//     } else {
//         return true
//     }
// }
// console.log(xxx(array))
//
//
//
// let nums = [1,2,3,1]
//
// const test = function(nums) {
//     let xxx = new Set([...nums]
//     )
//     return xxx.size !== nums.length
// }
// console.log(test(nums))
//
//
// let nums = [1,2,3,1]
//
// function something(num) {
//     const xxx = new Map()
//
//     for (let i = 0; i < num.length; i++) {
//         if (xxx.has(num[i])) return true
//         else (xxx.set(num[i]))
//     }
//    return false
// }
//
// console.log(something(nums))


let array = [1, 2, 3, 1]
let array2 = [1, 2, 3]


function something(nums) {
    let object = {}
    for (let i = 0; i < nums.length; i++) {
        console.log(nums)
        console.log(nums[i])

        let x = nums[i]
        if (object[x]) {
            return true
        } else {
            object[x] = true
        }
    }
    return false
}

console.log(something(array))
console.log(something(array2))














