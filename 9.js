function binarySearch(arr,target){

  return Search(arr,target,0,arr.length)
}


function Search(arr,target,left,right){
  let middle = Math.floor((left+right)/2)
  if(left>=right){
    return -1
  }

  if(target === arr[middle]){
    return middle
  }
  if(target<arr[middle]){
   return Search(arr,target,left,middle-1)

  }
  if(target>arr[middle]){
   return Search(arr,target,middle+1,right)

  }
}
console.log(binarySearch([5,6,7,8,9],9))
