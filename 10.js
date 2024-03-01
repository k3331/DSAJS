function bubbleSort(arr){
  let Swapped
  do{
    Swapped = false
    for(i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
         Swapped = true
      }

    }
  }while(Swapped)

  return arr
}

console.log(bubbleSort([9,3,8,55,73]))