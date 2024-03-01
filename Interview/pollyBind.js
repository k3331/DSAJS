let obj = {
  name: 'Jack',
};

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (obj, ...args) {
  let func = this;
  // Accepting arguments passed to newFunc
  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};

let newFunc = myFunc.myBind(obj)
newFunc('a_random_id', 'India') // Jack, a_random_id, New York