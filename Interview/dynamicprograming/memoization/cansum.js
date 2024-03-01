function canSum(targetSum, numbers, memo = {}) {
  // Check if the result is already memoized
  if (memo[targetSum] !== undefined) {
    return memo[targetSum];
  }

  // Base cases
  if (targetSum === 0) {
    return true; // Empty set can add up to 0
  }

  if (targetSum < 0) {
    return false; // Cannot add up to a negative number
  }

  // Check if any of the numbers can lead to the target sum
  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum(remainder, numbers, memo)) {
      // Memoize the result for the current targetSum
      memo[targetSum] = true;
      return true;
    }
  }

  // Memoize the result for the current targetSum
  memo[targetSum] = false;
  return false;
}

// Example usage
console.log(canSum(7, [3, 4, 3, 5, 1])); // Output: true
