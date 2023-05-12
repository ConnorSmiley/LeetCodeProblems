nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
nums2 = [100, 4, 200, 1, 3, 2]


const something = (input) => {
    let map = new Map()

    let temp = []

    let sorted = input.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        temp = sorted[i]
        if (sorted[i] === temp[i + 1]) {
            map.add(sorted[i])
        } else {
            return false
        }
    }
}


console.log(something(nums))
console.log(something(nums2))

















