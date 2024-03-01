// class Queue{
//   constructor(){
//     this.items = []
//   }

//   enqueue(element){
//     this.items.push(element)
//   }

//   dequeue(){
//     return this.items.shift()
//   }


// isEmpty(){
//   return this.items.length ===0
// }
// size(){
//   return this.items.size()
// }
// peek(){
//   if(!this.isEmpty()){
//     return this.items[0]

//   }
//   return null
 
// } print(){
//   console.log(this.items.toString())
// }
// }


class Queue{

  constructor(){
    this.item ={}
    this.front = 0
    this.rear =0
  }

  enqueue(el){
    this.item[this.rear] = el
    this.rear++
  }

  dequeue(){
    const item = this.item[this.front]
    delete this.item[this.front]
    this.front++
  }
  peek(){
    return this.item[this.front]
  }

  isEmpty(){
    return this.rear-this.front ===0
  }
  size(){
    return this.rear-this.front
  }

  print(){
    console.log(Object.values(this.item).toString())
  }

  
}

let q = new Queue()

q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)

q.dequeue()
q.print()
console.log(q.peek())
