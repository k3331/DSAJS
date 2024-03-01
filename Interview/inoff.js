const obj = { a: 1, b: 2, c: 3 };

for (let prop in obj) {
  console.log(prop, obj[prop]);
}



const iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
