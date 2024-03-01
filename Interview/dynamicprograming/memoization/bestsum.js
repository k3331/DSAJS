function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

// Example usage:
const targetSum = 7;
const numbers = [5, 3, 4, 7];
const result = bestSum(targetSum, numbers);

console.log(`Best way to sum ${targetSum}: ${result}`);
