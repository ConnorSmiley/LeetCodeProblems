// nums = [2,7,11,15]
//
// function nestedLoop(a,b) {
//     for (let i = 0; i < a.length; i ++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (nums[i] + nums[j] == b) {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(nestedLoop(nums, 9))




// list = [2,7,11,15]
//
// var twoSum = function(nums, target) {
//     if (nums.length === 2) return [0, 1];
//     const len = nums.length;
//     let map = {};
//     for(let i = 0; i < len; i++) {
//         let n = target - nums[i];
//         let find = map[n];
//         if(find !== undefined) return [find, i];
//         else map[nums[i]] = i;
//     }
// };
//
//
// console.log(twoSum(list, 9))

// hashmap


// list = [2, 7, 11, 15]
//
// function something(num, target) {
//
//     let object = {}
//
//     for (let i = 0; i < num.length; i++) {
//
//         // showing current object
//         object[num[i]] = i
//
//         let n = target - num[i]
//         let find = object[n]
//         //
//         // if (find !== undefined) return [find, i]
//         // else object[num[i]] = i
//
//
//         console.log(object)
//         console.log(n)
//         console.log(find)
//     }
// }
//
// console.log(something(list, 9))
//




list = [2, 7, 11, 15]

function something(num, target) {
    let map = new Map()
    num.forEach(x => map.set(x, map.get(x) + 1 || 1))
    console.log(map)
}

console.log(something(list, 9))










// list = [2, 7, 11, 15]
//
// function something(num, target) {
//
//
// }
//
// console.log(something(list, 9))






















