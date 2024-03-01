const person = {
  firstName: "John",
  lastName: "Doe",
  introduce: function (greeting) {
    console.log(`${greeting}, I'm ${this.firstName} ${this.lastName}.`);
  }
};


const anotherPerson = {
  firstName: "Alice",
  lastName: "Johnson"
};

// Use the introduce method from the person object with anotherPerson as the context
person.introduce.apply(anotherPerson, ["Hello"]); // Output: Hello, I'm Alice Johnson.