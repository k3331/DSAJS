function bestSum(targetSum, numbers) {
  // Initialize a table with (targetSum + 1) elements, all set to null
  const table = Array(targetSum + 1).fill(null);

  // Base case: an empty set can always add up to 0
  table[0] = [];

  // Iterate through each element in the numbers array
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const nextIndex = i + num;

        if (nextIndex <= targetSum) {
          // Ensure the current number hasn't been used before
          const currentCombination = [...table[i], num];
          if (table[nextIndex] === null || currentCombination.length < table[nextIndex].length) {
            table[nextIndex] = currentCombination;
          }
        }
      }
    }
  }

  // The final result is at the last position of the table
  return table[targetSum];
}

// Example usage
const targetSum = 7;
const numbers = [5, 3, 4, 7];
const result = bestSum(targetSum, numbers);

console.log(`Best way to sum ${targetSum}: ${result}`);
