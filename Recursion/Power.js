


























const power = (num, squared) => {
    if (squared === 0) return 1
    return power(num, squared - 1) * num
}


console.log(power(2,4))


















