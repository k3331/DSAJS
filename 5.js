function recurrsiveFib(n){
  if(n<2){
    return n
  }
  return recurrsiveFib(n-1) + recurrsiveFib(n-2)
}

console.log(recurrsiveFib(6))