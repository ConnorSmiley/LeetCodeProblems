// // num = [1, 2, 3, 4]
// // num2 = [-1, 1, 0, -3, 3]
// //
// //
// // const something = (nums) => {
// //     const length = nums.length;
// //     const result = new Array(length).fill(1);
// //     console.log(result)
// //
// //     // Calculate the product of elements before the current index
// //     let productBefore = 1;
// //     for (let i = 0; i < length; i++) {
// //         result[i] *= productBefore;
// //         productBefore *= nums[i];
// //     }
// //
// //     // Calculate the product of elements after the current index
// //     let productAfter = 1;
// //     for (let i = length - 1; i >= 0; i--) {
// //         result[i] *= productAfter;
// //         productAfter *= nums[i];
// //     }
// //
// //     return result;
// // }
// //
// // console.log(something(num))
// // console.log(something(num2))
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// num = [1, 2, 3, 4]
// num2 = [-1, 1, 0, -3, 3]
//
//
// const something = (nums) => {
//     const length = nums.length;
//     const result = new Array(length).fill(1)
//
//     let productBefore = 1;
//     for (let i = 0; i < length; i++) {
//         result[i] *= productBefore;
//         productBefore *= nums[i];
//     }
//
//     let productAfter = 1;
//     for (let i = length - 1; i >= 0; i--) {
//         result[i] *= productAfter;
//         productAfter *= nums[i];
//     }
//
//     return result;
// }
//
// console.log(something(num))
// console.log(something(num2))
//


// num = [1, 2, 3, 4]
// num2 = [-1, 1, 0, -3, 3]
//
// const something = (nums) => {
//     const result = []
//
//     let prefix = 1
//     for (let i=0; i<nums.length; i++) {
//         result[i] = prefix
//         prefix *= nums[i]
//     }
//
//     let suffix = 1
//     for (let i=nums.length - 1; i>=0; i--) {
//         result[i] *= suffix
//         suffix *= nums[i]
//     }
//
//     return result
// };
//
// console.log(something(num))
// console.log(something(num2))


num = [1, 2, 3, 4]
num2 = [-1, 1, 0, -3, 3]
num3 = [1, 2, 3, 4, 5]


const something = (nums) => {
    let array = new Array()

    let right = 1
    for (let i = 0; i < nums.length; i++) {
        array[i] = right
        right *= nums[i]
    }

    let left = 1
    for (let d = array.length - 1; d >= 0; d--) {
        array[d] = left
        left *= nums[d]
    }
    return array

}

console.log(something(num))















