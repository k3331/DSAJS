
// console.log('line 2', length)

// let length = 10;
// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);

function test() {
  var foo = 33; // Declared in the function scope

  if (foo) {
    let foo = foo + 55; // Declared in the block scope of the if statement
    console.log(foo, 1); // Logs the block-scoped 'foo' (foo + 55), which is 88
  }

  console.log(foo, 2); // Logs the function-scoped 'foo' (33)
}

test();