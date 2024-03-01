// Implicit Coercion
var x = 5;
var y = "10";
var result1 = x + y;
console.log(result1); // Output: "510"

var a = 10;
var b = "5";
var sum = a + b;
console.log(sum); // Output: 15

// Explicit Coercion
var x = "5";
var y = 10;
var result2 = Number(x) + y;
console.log(result2); // Output: 15

var a = 10;
var b = "20";
var sum2 = a + parseInt(b);
console.log(sum2); // Output: 30

// Truthy and Falsy Values
if ("Hello") {
  console.log("Truthy"); // Output: Truthy
}

if (0) {
  console.log("Falsy"); // This block will not be executed
}
