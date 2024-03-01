// Function to calculate Fibonacci number using recursion and memoization
function fibonacci(n, memo = {}) {
  // Check if the result is already memoized
  if (n in memo) {
    return memo[n];
  }

  // Base case: if n is 0 or 1
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // Recursive case: calculate Fibonacci number for n
  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  // Memoize the result before returning
  memo[n] = result;

  return result;
}

// Example usage
const n = 10;
const result = fibonacci(n);
console.log(`The ${n}-th Fibonacci number is: ${result}`);
