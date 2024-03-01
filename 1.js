// function fibonacci(n){
//   const fib =[0,1];

//   for(let i =2;i<n; i++){
//     fib[i] = fib[i-1]+fib[i-2]


//   }
//    return fib

// }


// console.log(fibonacci(10000));

let obj = {
  adi: 'adi',
  two: 'two'
}


function Neo(cat) {
  console.log(this.adi, this.two, cat)
}


Function.prototype.myBind = (object, ...main) => {

  let fun = this

  return function (...args) {

    fun.apply(object, [...args, ...main])
  }



}

let nest = Neo.myBind(obj);

nest('cat')