function* numberGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const generator = numberGenerator();

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// ... and so on
