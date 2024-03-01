function gridTravelerTabulation(m, n) {
  // Create a 2D table to store results of subproblems
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  // Base case: There is one way to reach the starting point
  table[1][1] = 1;

  // Fill in the table by iteratively computing the number of ways to reach each cell
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];

      if (i + 1 <= m) {
        // Move down
        table[i + 1][j] += current;
      }

      if (j + 1 <= n) {
        // Move right
        table[i][j + 1] += current;
      }
    }
  }

  // The result is stored in the bottom-right corner of the table
  return table[m][n];
}

// Example usage:
const rows = 3;
const cols = 3;
const result = gridTravelerTabulation(rows, cols);
console.log(`Number of ways to travel in a ${rows}x${cols} grid: ${result}`);
