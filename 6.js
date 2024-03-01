function reccursiveFact(n){
  if(n==0){
    return 1
  }
  return n*reccursiveFact(n-1)
}


console.log(reccursiveFact(5))