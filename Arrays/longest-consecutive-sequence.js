// nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// nums2 = [100, 4, 200, 1, 3, 2]
//
// function something(nums) {
//     let set = new Set();
//     for(const n of nums) {
//         set.add(n);
//     }
//     let max = 0;
//     for(let n of set) {
//         if(!set.has(n-1)) {
//             let count = 0;
//             while(set.has(n++)) {
//                 count++;
//             }
//             max = Math.max(count, max);
//         }
//     }
//     return max;
// };
//


nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
nums2 = [100, 4, 200, 1, 3, 2]


const something = (input) => {
    let set = new Set(input)

    let final = 0
    for (let i of set) {
        let count = 0
        if (!set.has(i - 1)) {
            count = 0
            while (set.has(i++)) {
                count++
            }
            final = count
        }
    }
    return final
}


console.log(something(nums))
console.log(something(nums2))

















