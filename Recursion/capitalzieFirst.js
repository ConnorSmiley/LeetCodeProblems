const capitalizeFirst = (input) => {
    let array = []
    for (let i = 0; i < input.length; i++){
        let arr = input[i]
        let c = arr[0].toUpperCase()
        array.push(c + input[i].slice(1))
    }
    return array
}





































































console.log(capitalizeFirst(['car','taco','banana']))
