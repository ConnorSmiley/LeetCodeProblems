










const x = (arr, start = 0, end = arr.length + 1) => {
    const swap = (array, i, d) => {
        let temp = array[i]
        array[i] = array[d]
        array[d] = temp
    }

    let pivot = arr[start]
    let swapIdx = start

    for (let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    console.log(arr)
    return swapIdx
}


console.log(x([4,2,7,9,1,3,7,8]))
