const merge = (input) => {
    if(input.length <= 1) return input
    let mid = Math.floor(input.length/2)
    let left = merge(input.slice(0,mid))
    let right = merge(input.slice(mid))
    return merge(left, right)
}
