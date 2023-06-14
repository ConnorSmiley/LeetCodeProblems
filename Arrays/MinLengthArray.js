// const minSubArrayLen = (input, num) => {
//     let right = 0
//     let left = 0
//     let sum = 0
//     let min = Infinity
//
//     while (right !== input.length) {
//         sum += input[right]
//
//         while (sum >= num) {
//             min = Math.min(min, right - left + 1)
//             sum -=input[left]
//             left++
//         }
//
//         right++
//     }
//     return min == Infinity ? 0 : min
// }



// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;
//
//     while (start < nums.length) {
//         // if current window doesn't add up to the given sum then
//         // move the window to right
//         if(total < sum && end < nums.length){
//             total += nums[end];
//             end++;
//         }
//             // if current window adds up to at least the sum given then
//         // we can shrink the window
//         else if(total >= sum){
//             minLen = Math.min(minLen, end-start);
//             total -= nums[start];
//             start++;
//         }
//         // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//         else {
//             break;
//         }
//     }
//
//     return minLen === Infinity ? 0 : minLen;
// }





































const minSubArrayLen = (input, num) => {
    let start = 0
    let end = 0
    let window = 0
    let temp = 0
    while (end < input.length) {
        if (start < input.length && temp < num) {
            window += input[end]
            console.log(window)
        }
    }
}













console.log(minSubArrayLen([2,3,1,2,4,3], 7))
// console.log(minSubArrayLen([1,2,3,4,5], 20))
// console.log(minSubArrayLen([2,1,6,5,4], 9))
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) )
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55))
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))






































