




























const x = (num) => {
    if (num < 2) return 1
    return x(num - 1) + x(num - 2)
}

console.log(x(2))




















