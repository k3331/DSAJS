function greet(name) {
  console.log(`Hello, ${name}! I am ${this.job}.`);
}

const person = {
  job: 'developer'
};

const greetPerson = greet.bind(person);
greetPerson('Alice'); // Output: Hello, Alice! I am developer.