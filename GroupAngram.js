// let array =["eat","tea","tan","ate","nat","bat"]
//
// const something = (a) => {
//     let object = {}
//     console.log(object)
//     for (let b of a){
//         let sort = b.split("").sort().join("")
//         for (i of sort) {
//             object[i] ? object[i].push(b) : object[i] = [b]
//         }
//         return Object.values(object);
//     }
// }
//
// console.log(something(array))


let array = ["eat", "tea", "tan", "ate", "nat", "bat"]

const something = (a) => {
    let object = {}

    for (let i of a) {
        let letters = i.split('').sort().join('')
        // console.log(letters.split(''))
        // console.log({i})
        // console.log({letters})

        if (object[letters]) {
            let weird = letters.split('').sort().join('')

            object[weird].push(i)

            // console.log([i])
            // console.log(object)
            // console.log(object[letters])

        } else {

            object[letters] = [i.split('').sort().join('')]
        }
    }
    return Object.values(object)
}

console.log(something(array))
