let tokens1 = ["2", "1", "+", "3", "*"]
let tokens2 = ["4", "13", "5", "/", "+"]
let tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]


const something = (input) => {
    let temp = []
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            temp.push(parseInt(input[i]))
            continue
        }
       switch (input[i]) {
           case "+":
       }

    }
}


console.log(something(tokens1))
console.log(something(tokens2))
console.log(something(tokens3))













