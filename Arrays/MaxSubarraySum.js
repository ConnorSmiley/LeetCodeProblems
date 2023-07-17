// const maxSubarraySum = (input, num) => {
//     //max
//     let max = 0
//     //temp
//     let temp = 0
//     //loop
//     for (let i = 0; i < num; i++){
//         //first 3
//         max += input[i]
//     }
//     //adding to temp
//     temp = max
//     //sliding window loop
//     for (let i = num; i < input.length; i++){
//         //iteratoring over sliding window
//         temp = temp + input[i] - input[i - num]
//         //compare which window is max
//         max = Math.max(temp, max)
//     }
//
//     // if (temp > max) {
//     //     max = temp
//     // }
//
//     return max
// }





























// let array1 = [1, 2, 3, 2, 8, 1, 5]
// let number1 = 2




// const maxSubarraySum = (input, num) => {
//     let total =0
//     let temp = 0
//     for (let i = 0; i < num; i++){
//         total += input[i]
//     }
//     temp = total
//     for (let i = num; i < input.length; i++){
//         temp += input[i] - input[i-num]
//         total = Math.max(total, temp)
//
//     }
//     return total
// }





































const maxSubarraySum = (input, num) => {
    let total = 0
    let temp = 0
    for (let i = 0; i < num; i++){
        total += input[i]
    }
    temp = total
    for (let i = num; i <input.length; i++) {
        temp += input[i] - input[i - num]
        total = Math.max(total, temp)
    }
    return total
}


// console.log(maxSubarraySum([100,200,300,400], 2))
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 3))
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
// console.log(maxSubarraySum([2,3], 3))

























