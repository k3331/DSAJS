

const memoize = (func) => {
  let chache = {}
  return (...args) => {
    let n = args[0]
    if (n in chache) {
      return chache[n]
    } else {
      let result = func(n)
      chache[n] = result
      return result
    }
  }
}

const calc = (n) => {

  let p = 1

  for (let i = 0; i < n; i++) {
    p += i

  }

  return p

}

let alpha = memoize(calc)

let result = alpha(5)

console.log(result)