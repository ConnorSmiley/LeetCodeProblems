


























const power = (num, squared) => {
   if (squared === 0)  return 1
    return num * power(num, squared - 1)
}


console.log(power(2,4))


















