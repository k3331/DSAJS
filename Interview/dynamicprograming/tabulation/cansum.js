function canSum(targetSum, numbers) {
  // Initialize a table with (targetSum + 1) elements, all set to false
  const table = Array(targetSum + 1).fill(false);

  // Base case: an empty set can always add up to 0
  table[0] = true;

  // Iterate through each element in the numbers array
  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      // If the current position in the table is true, update positions for numbers
      for (let num of numbers) {
        if (i + num <= targetSum) {
          table[i + num] = true;
        }
      }
    }
  }

  // The final result is at the last position of the table
  return table[targetSum];
}

// Example usage
console.log(canSum(7, [3, 4, 3, 5, 1])); // Output: true
