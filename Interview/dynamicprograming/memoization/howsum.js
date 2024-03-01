function canSumWithPair(targetSum, numbers, memo = {}) {
  // Check if the result is already memoized
  if (memo[targetSum] !== undefined) {
    return memo[targetSum];
  }

  // Base cases
  if (targetSum === 0) {
    return []; // Empty set can add up to 0
  }

  if (targetSum < 0) {
    return null; // Cannot add up to a negative number
  }

  // Check if any of the numbers can lead to the target sum
  for (let num of numbers) {
    const remainder = targetSum - num;

    const remainderResult = canSumWithPair(remainder, numbers, memo);

    if (remainderResult !== null) {
      // Memoize the result for the current targetSum
      memo[targetSum] = [num, ...remainderResult];
      return memo[targetSum];
    }
  }

  // Memoize the result for the current targetSum
  memo[targetSum] = null;
  return null;
}

// Example usage
console.log(canSumWithPair(7, [5, 3, 4, 7])); // Output: [4, 3]
