function fibonacciTabulation(n) {
  if (n <= 1) {
    return n;
  }

  // Create a table to store results of subproblems
  const table = new Array(n + 1);

  // Initialize base cases
  table[0] = 0;
  table[1] = 1;

  // Fill in the table by iteratively computing Fibonacci numbers
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  // The result is stored in the last entry of the table
  return table[n];
}

// Example usage
const result = fibonacciTabulation(6);
console.log(result); // Output: 8
