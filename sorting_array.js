//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
//make a function that organizes these into individual array that is ordered
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2]
//should return [[1,2], ["2", "3"]]

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let array2 = [1, "2", "3", 5, 3, 6, "7", "4", "6", 4];

const sortNumberArray = (arr) => {
  let newArray = arr.sort((a, b) => a - b);
    
  for (let i = 0; i < newArray.length; i++) {
    //console.log(i, 'newArray', newArray);
    
    let value = newArray[i];
    //console.log(i, 'value', value);
    
    let index = newArray.lastIndexOf(value);
    //console.log(i, 'index', index);
    
    let count = (index + 1) - i;
    //console.log(i, 'count', count);
    
    count > 1 ? newArray.splice(i, count, Array(count).fill(value)) : 0;
  }

  return newArray;
}

console.log('sortedArray', sortNumberArray(array))

const sortStringArray = (arr) => {
  let newArray = [];
  
  const sortedArray = arr.sort((a, b) => a - b);
  
  const numbers = sortedArray.filter(item => typeof(item) === 'number');
  const strings = sortedArray.filter(item => typeof(item) === 'string');
  
  newArray.splice(0, 0, numbers, strings);
  
  return newArray;
}

console.log('sortedArray', sortStringArray(array2))

