//LIFO

//Last In, First Out




class Node {
    constructor(value) {
        this.value = value
        this.next = null

    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0

    }
    push(val) {
        const newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop() {
        if(!this.first) return null
            let temp = this.first
            if(this.first === this.last) {
                this.last = null
            }
            this.first = this.first.next
            this.size--
            return temp.value
    }
}


const stack = new Stack()

stack.push("a")
stack.push("b")
stack.push("c")
stack.push("d")
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)




































