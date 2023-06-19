










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
    return swapIdx
}

const quicksort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = x(arr, left, right)

        quicksort(arr,left, pivotIndex-1)
        quicksort(arr,pivotIndex+1,right)
    }
    return arr
}


console.log(quicksort([4,2,7,9,1,3,7,8]))
