function binarySearch(arr,target){
  let left =0
  let right =arr.length-1

  while(left <=right){
    let middle = Math.floor((left+right)/2)

    if(target === arr[middle]){
      return middle
    }

    if(target<arr[middle]){
      right =middle-1
    }

    else{
      left =middle+1
    }
  }

  return -1

}

console.log(binarySearch([5,6,7,8,9],9))