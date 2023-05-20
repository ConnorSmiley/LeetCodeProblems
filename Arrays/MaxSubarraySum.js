let array1 = [1, 2, 3, 2, 8, 1, 5]
let number = 1
// let array2 = [1,2,5,2,8,1,5], 4)
// let array3 = [4,2,1,6], 1)
// let array4 = [4,2,1,6,2], 4)
// let array5 = [[]], 4


const something = (input, number) => {
    let max = 0
    let temp = 0
    for (let i = 0; i < number; i++) {
        max += i
    }
    temp = max
    for (let i = number; i < input.length; i++) {
        temp = temp - input[i-number] + input[i]
        max = Math.max(max, temp)

    }
    return max
}


console.log(something(array1, number))
