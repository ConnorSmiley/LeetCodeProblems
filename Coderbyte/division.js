const num1 = 6
const num2 = 24


function division (a,b) {
    let temp = 0
    const limit = Math.min(a,b)
    for (let i = 1; i <= limit; i++) {
        if (a % i === 0 &&  b % i === 0) {
            temp += i
        }
    }
    return temp
}

console.log(division(num1, num2))
