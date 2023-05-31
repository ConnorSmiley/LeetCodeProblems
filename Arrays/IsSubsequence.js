




































const isSubsequence = (input, input2) => {
    let i = 0
    let d = 0
    while (d < input2.length) {
        if (input[i] === input2[d]) i++
        if (i === input.length)  return true
        d++
    }
    return false
}







console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))
































