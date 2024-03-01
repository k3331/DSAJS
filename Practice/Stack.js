class Stack {

  constructor() {
    this.items = []
  }

  push(val) {
    this.items.push(val)
  }

  pop() {
    this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }

  peek() {
    this.items[this.items.length - 1]
  }

  print() {
    console.log(this.items.toString())
  }

}


let data = new Stack()

data.push(3)

data.push(4)

data.push(5)

data.push(6)

data.print()


