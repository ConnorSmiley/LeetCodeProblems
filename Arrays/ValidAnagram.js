






































const validAnagram = (input, input2) => {
    let object = {}
    let object2 = {}
    for (let i = 0; i < input.length; i++){
        object[input[i]] = object[input[i]] + 1 || 1
    }
    for (let i = 0; i < input2.length; i++){
        if (!object[input2[i]]) {
            return false
        } else {
            object[input[i]] -= 1
        }
    }
    return true

}





console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza') )
console.log(validAnagram('anagram', 'nagaram') )
console.log(validAnagram("rat","car"))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))























