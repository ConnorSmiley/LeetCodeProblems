// const findLongestSubstring = (input) => {
//     let longest = 0
//     let map = {}
//     let temp = 0
//
//     for (let i = 0; i < input.length; i++){
//
//         let checked = input[i]
//
//         if (map[checked]) {
//             temp = Math.max(temp, map[checked])
//         }
//
//         longest = Math.max(longest, i - temp + 1)
//
//         map[checked] = i + 1
//     }
//     return longest
// }











































const findLongestSubstring = (input) => {
    let start = 0
    let longest = 0
    let object = {}
    for (let i = 0; i < input.length; i++){
       if (object[input[i]]) {
           start = Math.max(start, object[input[i]])
       }

       longest = Math.max(longest, )
    }
    object[input[i]] = i + 1
}




//2 pointers
//hashmap


//loop
//compare if answer
//save
//comparison
//loop again




// console.log(findLongestSubstring('') )
// console.log(findLongestSubstring('rithmschool'))
// console.log(findLongestSubstring('thisisawesome'))
// console.log(findLongestSubstring('thecatinthehat'))
// console.log(findLongestSubstring('bbbbbb') )
// console.log(findLongestSubstring('longestsubstring'))
// console.log(findLongestSubstring('thisishowwedoit'))
//

console.log(findLongestSubstring('abcac'))















