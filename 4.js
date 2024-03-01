function isPowerOfTwo(n){
  if(n<2){
    return false
  }


  // while(n>2){

  //   console.log('1',n)

  //   if(n%2 !==0){
  //     console.log('4',n)
  //     return false
  //   }
  //   n = n/2
  //   console.log('3',n)

  // }
  return (n&(n-1)===0)
}

console.log(isPowerOfTwo(8))