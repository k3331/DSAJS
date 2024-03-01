
Array.prototype.Map = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.map called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = this;

  console.log('line 13')
  const length = array.length >>> 0;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in array) {
      result[i] = callback.call(array[i]);
    }
  }

  return result;
};



const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
