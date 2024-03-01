function isPrime(n){
  if(n<2){
    return false
  }

  for(i=2;i<Math.sqrt(n);i++){
    if(n%i===0){
      return true
    }
  }

  return false
}

console.log(isPrime(5))

console.log(isPrime(10))

console.log(isPrime(3))