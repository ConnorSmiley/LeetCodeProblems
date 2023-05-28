




const areThereDuplicates = (...input) => {
    let s = input.toString().split(/[',]+/)
    let object = {}
    for (let i = 0; i < s.length; i++) {
        object[s[i]] = (object[s[i]] || 0) + 1
    }
    for (i in object) {
        if (object[i] > 1) return false
    }
    return true
}










console.log(areThereDuplicates('a', 'b', 'c', 'a')
)
console.log(areThereDuplicates(1, 2, 2)
)
console.log(areThereDuplicates(1, 2, 3)
)

