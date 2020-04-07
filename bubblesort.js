const swap = (numOne, numTwo) => {
  if (numOne < numTwo)  return [numOne, numTwo]
  else return [numTwo, numOne]
}
//[2, 3]
// const bubbleSort = (arr) => {
  //   let sortedArr = [];
  //   if (arr.length === 1) return sortedArr;
  //   return swap(arr[0], arr[1])
  // }
  //[2, 3, 1]
  const bubbleSort = arr => {
  let sortedArr = [];
  for (let i=0; i<arr.length; i++) {
    sortedArr.push(... swap(arr[i], arr[i+1]))
    console.log(sortedArr)
  }
  return sortedArr
}
