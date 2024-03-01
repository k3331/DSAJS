class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity
    this.items = new Array(capacity)
    this.currentLength = 0
    this.front = -1
    this.rear = -1
  }

  isFull() {
    return this.currentLength === this.capacity
  }

  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(el) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.items[this.rear] = el;
      this.currentLength += 1
    }
    if (this.front == -1) {
      this.front = this.rear
    }

  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    let item = this.items[this.front];

    this.items[this.front] = null;

    this.front = (this.front + 1) % this.capacity
    this.currentLength -= 1

    if (this.isEmpty()) {
      this.front = -1
      this.rear = -1
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front]
    }
    return null
  }

  print() {
    if (this.isEmpty()) {
      return null
    } else {
      let str = ''
      let i

      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " "
      }
      str += this.items[i] + " "
      console.log(str)

    }
  }
}

let q = new CircularQueue(3)

q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.dequeue()
q.enqueue(6)

q.print()
console.log(q.peek())