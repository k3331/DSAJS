function throttle(func, delay = 1000) {
  let isThrottled = false;

  return (...args) => {
    if (!isThrottled) {
      // Execute the function immediately
      func.apply(this, args);
      isThrottled = true;

      // Reset the throttling flag after the specified delay
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}