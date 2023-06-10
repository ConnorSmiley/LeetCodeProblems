// let array1 = [1, 2, 3, 2, 8, 1, 5]
// let number1 = 2
// let array2 = [1,2,5,2,8,1,5], 4)
// let array3 = [4,2,1,6], 1)
// let array4 = [4,2,1,6,2], 4)
// let array5 = [[]], 4


// const something = (input, num) => {
    // let window = 0
    // let temp = 0
    // for (let i = 0; i < num; i++){
    //     window += input[i]
    // }
    // temp = window
    // for (let i = num; i < input.length; i++){
    //     temp = temp + input[i] - input[i - num]
    //     window = Math.max(window, temp)
    // }
    // return window


// }

// console.log(something(array1, number1))





























// let array1 = [1, 2, 3, 2, 8, 1, 5]
// let number1 = 2




const maxSubarraySum = (input, num) => {
    let total = 0
    for (let i = 0; i < num; i++){
        total += input[i]
    }
    let currentTotal = total
    for (let i = 0; i < input.length; i++){
        currentTotal = input[i] - input[num]
        total = Math.max(total, currentTotal)
    }
    return total

}








// console.log(maxSubarraySum([100,200,300,400], 2))
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 3))
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
// console.log(maxSubarraySum([2,3], 3))












