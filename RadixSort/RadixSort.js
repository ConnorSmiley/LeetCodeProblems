










const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const digitCount = (num) => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (nums) => {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums)
    for (let d = 0; d < maxDigitCount; d++){
        let digitBuckets = Array.from({length:10}, () => [])
        for (let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
}

console.log(getDigit([1,2,4,6]))




























