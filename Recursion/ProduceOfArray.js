



































const x = (num) => {
    if (num.length === 0) return 1
    return num[0] * x(num.slice(1))
}


console.log(x([1,2,3,4,7]))

























