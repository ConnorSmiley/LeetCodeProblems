// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

let string = ['(', ')', '{', '}', '[', ']']
let string2 = [')', '}', '{', '[', ']']
let string3 = ['(', ')', '}', '{', '[', ']']
let string4 = ['}', '{']
let string5 = ['(]']
let string6 = ['(', ')']


const something = (s) => {
    let object = {'{': '}', '(': ')', '[': ']'}
    let temp = []
    for (let i = 0; i < s.length; i++){
        if (object[s[i]]) {
            temp.push(object[s[i]])
        } else if (s[i] !== temp.pop()) {
            return false
        }
    }
    return !temp.length
}

console.log(something(string))
console.log(something(string2))
console.log(something(string3))
console.log(something(string4))
console.log(something(string5))
console.log(something(string6))



























