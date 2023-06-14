// const isPalindrome = (input) => {
//     if(input.length === 1) return true
//     if(input.length === 2) return input[0] === input[1]
//     if(input[0] === input.slice(-1)) return isPalindrome(input.slice(1, -1))
//         return false
// }

































const isPalindrome = (input) => {
    if (input.length === 1) return true
    if (input.length === 2) return input[0] === input[1]
    if (input[0] === input.slice(-1)) return isPalindrome(input.slice(1,-1))
    return false
}















console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))





















