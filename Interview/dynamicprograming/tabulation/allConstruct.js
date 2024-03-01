function allConstructTabulation(target, wordBank) {
  // Initialize a table with subproblem solutions
  const table = Array(target.length + 1).fill().map(() => []);

  // Base case: an empty string can be constructed in one way (using an empty array of words)
  table[0] = [[]];

  // Fill in the table for each position in the target string
  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        // Append the current word to all combinations of the prefix
        const newCombinations = table[i].map((combination) => [...combination, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
}

// Example usage
const result = allConstructTabulation("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]);
console.log(result);
  