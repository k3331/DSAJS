function canConstruct(target, wordBank, memo = {}) {
  // Check memoization table
  if (target in memo) {
    return memo[target];
  }

  // Base case: an empty string is always constructible
  if (target === "") {
    return true;
  }

  // Check if the target can be constructed using the words in the word bank
  for (const word of wordBank) {
    if (target.startsWith(word)) {
      // If the word is a prefix of the target, recursively check the remaining part of the target
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        // Memoize the result
        memo[target] = true;
        return true;
      }
    }
  }

  // Memoize the result
  memo[target] = false;
  return false;
}

// Example usage
const result = canConstruct("abcdef", ["ab", "bc", "cd", "def", "abcd"]);
console.log(result);
