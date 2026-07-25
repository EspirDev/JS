const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function deleteEven(num) {
  return num % 2 === 0;
}

function filterArray(arr, shouldDelete) {

  const result = [];
  

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if (shouldDelete(item) === false) {
      result.push(item);
    }
  }
  
  return result;
}




const filteredResult = filterArray(numbers, deleteEven);

console.log(filteredResult);