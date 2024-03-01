if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.filter called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this);
    const length = array.length >>> 0;
    const result = [];

    for (let i = 0; i < length; i++) {
      if (i in array) {
        const element = array[i];

        if (callback.call(element)) {
          result.push(element);
        }
      }
    }

    return result;
  };
}


const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
