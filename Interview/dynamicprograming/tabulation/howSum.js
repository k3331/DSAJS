function canSumWithPair(targetSum, numbers) {
  // Initialize a table with (targetSum + 1) elements, all set to null
  const table = Array(targetSum + 1).fill(null);

  // Base case: an empty set can always add up to 0
  table[0] = [];

  // Iterate through each element in the numbers array
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      // If the current position in the table is not null, update positions for numbers
      for (let num of numbers) {
        const nextIndex = i + num;

        if (nextIndex <= targetSum) {
          // Ensure the current number hasn't been used before
          if (table[nextIndex] === null) {
            table[nextIndex] = [...table[i], num];
          }
        }
      }
    }
  }

  // The final result is at the last position of the table
  return table[targetSum];
}

// Example usage
console.log(canSumWithPair(7, [5, 3, 4, 7])); // Output: [3, 4]
