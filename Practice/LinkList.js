class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}


class LinkList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  prepend(value) {
    let node = new Node(value)
    if (this.head == null) {

      this.head = node

    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value) {
    let node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head

      while (prev.next) {
        prev = prev.next
      }

      prev.next = node
      this.size++
    }
  }

  print() {
    let curr = this.head
    let list = ''

    while (curr) {
      list += `${curr.value}`

      curr = curr.next


    }
    console.log(list)
  }


  reversePrint(node = this.head) {

    if (node === null) {
      console.log('I am back')
      return
    }
    this.reversePrint(node.next)
    console.log(node.value)
  }

}

insert(value, index){
  if (index < 0 || index > this.size) {
    return null
  }
  let node = new Node(value)
  let prev = this.head
  for (i = 0; i < index - 1; i++) {

    prev = prev.next


  }
  node.next = prev.next;
  prev.next = node.next
}


let list = new LinkList()

list.prepend(3)
list.prepend(4)
list.prepend(5)
list.prepend(6)

list.append(7)

list.print()

list.reversePrint()