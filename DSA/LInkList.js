class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    }
    else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  print() {
    if (this.isEmpty()) {
      console.log('this list is empty')
    }
    else {
      let curr = this.head
      let listValues = ''

      while (curr) {

        listValues += `${curr?.value} `
        curr = curr.next



      }
      console.log(listValues)
    }
  }
  printReverse(curr = this.head) {
    if (curr === null) {
      return; // Base case: reached the end of the list
    }

    // Recursively move to the next node
    this.printReverse(curr.next);

    // Print the value when backtracking
    console.log(curr.value);
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      const prev = this.head

      while (prev.next) {
        prev = prev.next
      }
      prev.next = node

    }
    this.size++

  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return
    }

    if (index === 0) {
      this.prepend(value)

    } else {
      const node = new Node(value)

      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }

      node.next = prev.next
      prev.next = node
      this.size++


    }



  }

  removeNode(index) {
    let removeNode
    if (index === 0) {
      removeNode = this.head
      this.head = removeNode.next
    } else {
      let prev = this.head

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next
    }
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null
    }

    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
      return value
    }
    else {
      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if (prev.next) {
        let removeNode = prev.next
        prev.next = removeNode.next
        this.size--
        return value
      }
      return null
    }
  }

  reverse() {
    let prev = null
    let curr = this.head
    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next

    }
    this.head = prev
  }

  search(value) {
    if (this.isEmpty()) {
      return -1
    }
    let curr = this.head
    let i = 0
    while (curr) {
      if (curr.value === value) {
        return i
      }
      i++
      curr = curr.next

    }
    return -1
  }

}


const list = new LinkList()

list.prepend(3)
list.append(2)

list.prepend(4)
list.prepend(5)
list.prepend(6)
list.insert(55, 2)
list.print()
list.removeNode(2)

console.log(list.search(2))


list.print()
list.printReverse()

console.log(list.isEmpty())