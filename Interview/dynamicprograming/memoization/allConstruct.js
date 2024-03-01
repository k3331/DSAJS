function allConstruct(target, wordBank, memo = {}) {
  // Check memoization table
  if (target in memo) {
    return memo[target];
  }

  // Base case: an empty string can be constructed in one way (using an empty array of words)
  if (target === "") {
    return [[]];
  }

  const result = [];

  // Check if the target can be constructed using the words in the word bank
  for (const word of wordBank) {
    if (target.startsWith(word)) {
      // If the word is a prefix of the target, recursively find allConstruct for the remaining part
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);

      // Append the current word to all combinations of the remaining suffix
      const targetWays = suffixWays.map(way => [word, ...way]);

      result.push(...targetWays);
    }
  }

  // Memoize the result
  memo[target] = result;
  return result;
}

// Example usage
const result = allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]);
console.log(result);
