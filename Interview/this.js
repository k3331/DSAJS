// 1. Global Context
console.log(this); // points to the global object (e.g., window in a browser)

// 2. Function Context
function exampleFunction() {
  console.log(this);
}
exampleFunction(); // points to the global object

// 3. Method Context
const myObject = {
  myMethod: function () {
    console.log(this);
  }
};
myObject.myMethod(); // points to myObject

// 4. Constructor Context
function MyClass() {
  console.log(this);
}
const myInstance = new MyClass(); // points to myInstance

// 5. Event Context
document.getElementById('myButton').addEventListener('click', function () {
  console.log(this); // points to the DOM element with id 'myButton'
});

// 6. Arrow Function Context
const arrowFunction = () => {
  console.log(this); // inherits value of this from the surrounding scope
};
arrowFunction();
