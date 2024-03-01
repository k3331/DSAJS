class Stack{
  constructor(){
    this.items = []
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    return this.items.pop()
  }


isEmpty(){
  return this.items.length ===0
}
size(){
  return this.items.size()
}
peek(){
 return this.items[this.items.length-1]
} print(){
  console.log(this.items.toString())
}
}

let stack = new Stack()

stack.push(3)
stack.push(4)
stack.push(5)
stack.push('Adii')

console.log(stack.peek())

stack.pop()

stack.print()

