// getName(); // Namaste Javascript
// console.log(x); // undefined
// var x = 7;
// function getName() {
//   console.log("Namaste Javascript");
// }


// let obj = {
//   name: {
//     first: 'A',
//     last: 'b',
//   },
//   address: {
//     state: {
//       city: {
//         province: "abc"
//       }
//     }
//   },
// }



// const { name: { first }, address } = obj

// console.log('line 29', first)



// var a = 30;
// let b = a + 20;
// let a = 25;
// console.log(a + b);


// let a = "25"
// let b = 25
// console.log(a == b);
// console.log(99 + 1 + "10")


// 

// function adii(val) {

//   let k = val.split('')

//   let c = {}

//   for (let i = 0; i < k.length; i++) {
//     console.log(k[i])

//     if (c[k[i]]) {

//       ++c[k[i]]

//     } else {

//       c[k[i]] = 1

//     }
//   }

//   console.log(c)

// }

// adii('cccat')


// let obj = {
//   name: 'adii',
//   location: {

//     place: 'mumbai',
//     address: 'affsf'

//   }
// }

// obj.location['zipcode'] = '4011105'


// console.log(obj)





let obj = {
  adi: 'adi',
  two: 'two'
}


function Neo(cat) {
  console.log(this.adi, this.two, cat)
}


Function.prototype.myBind = function (object, ...main) {

  let fun = this

  return function (...args) {

    fun.apply(object, [...args, ...main])
  }



}

let nest = Neo.myBind(obj);

nest('cat')