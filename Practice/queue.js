class Queue {
  constructor() {
    this.items = []

  }

  enqueue(el) {
    this.items.push(el)
  }

  dequeue() {
    this.items.shift()
  }

  size() {
    return this.items.length()
  }

  isEmpty() {
    return this.items.length() == 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items[0]

    }
  }
  print() {
    console.log(this.items.toString())
  }

}

let data = new Queue()

data.enqueue(2)

data.enqueue(3)



