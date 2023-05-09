// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

let string = ['(', ')', '{', '}', '[', ']']
let string2 = [')', '}', '{', '[', ']']


const something = (s) => {
    const mapped = new Map()
    const v = s

    const sSort = s.sort()

    s.forEach(x => mapped.set(x, mapped.get(x)))

    const sorted = [...mapped].sort((a,b)  => a[0] + b[0])

    const shi = sorted.map(x  => x.shift())
    const com = shi.every((value, index)  => value === sSort[index]) ? true : false

    console.log(v)
    console.log(shi)
    console.log(sSort)

    return com
}

console.log(something(string))
console.log(something(string2))



























