function gridTraveler(m, n, memo = {}) {
  const key = `${m},${n}`;

  // Check if the result is already memoized
  if (key in memo) {
    return memo[key];
  }

  // Base cases
  if (m === 1 && n === 1) {
    return 1; // There is one way to reach the starting point
  }
  if (m === 0 || n === 0) {
    return 0; // No way to reach if either dimension is zero
  }

  // Recursive calls
  const waysToMoveRight = gridTraveler(m, n - 1, memo);
  const waysToMoveDown = gridTraveler(m - 1, n, memo);

  // Memoize the result before returning
  memo[key] = waysToMoveRight + waysToMoveDown;

  return memo[key];
}

// Example usage:
const rows = 3;
const cols = 3;
const result = gridTraveler(rows, cols);
console.log(`Number of ways to travel in a ${rows}x${cols} grid: ${result}`);
