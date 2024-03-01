function greet(name, book) {
  console.log(`Hello, ${name}!,${book} I am ${this.job}.`);
}

const person = {
  job: 'developer'
};

greet.call(person, 'Alice', 'book'); // Output: Hello, Alice! I am developer.