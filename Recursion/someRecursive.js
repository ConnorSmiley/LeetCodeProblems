



































const someRecursive = (input, callback) => {
   if (input.length === 0) return false
    if(callback(input[0])) return true
    return someRecursive(input.slice(1), callback)
}


























console.log(someRecursive([1,2,3,4], isOdd))
console.log(someRecursive([4,6,8,9], isOdd))
console.log(someRecursive([4,6,8], isOdd))
console.log(someRecursive([4,6,8], val => val > 10))














