function isBalanced(str) {
  const stack = [];
  const openingBrackets = '([{';
  const closingBrackets = ')]}';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();
      if (!lastOpeningBracket || !isMatchingPair(lastOpeningBracket, char)) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were balanced
  return stack.length === 0;
}

function isMatchingPair(openingBracket, closingBracket) {
  return (
    (openingBracket === '(' && closingBracket === ')') ||
    (openingBracket === '[' && closingBracket === ']') ||
    (openingBracket === '{' && closingBracket === '}')
  );
}

// Example usage:
const balancedExpression = '{[()]()}';
const unbalancedExpression = '{[(])}';

console.log(isBalanced(balancedExpression)); // true
console.log(isBalanced(unbalancedExpression)); // false
