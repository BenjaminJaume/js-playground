function displayArray(array, id) {
  console.log("Array #" + id);
  for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/* --------------------------------------------------
   - Create and display the array
   --------------------------------------------------*/

// Creat the array
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// Display the new array
displayArray(array, 1);

/* --------------------------------------------------
   - Remove the first element of the array
   --------------------------------------------------*/

// Fonction that removes the first element
array.shift();

// Display the new array
displayArray(array, 2);

/* --------------------------------------------------
- Sort the array in order
--------------------------------------------------*/

// Function that sorting the array
array.sort();

// Display the new array
displayArray(array, 3);

/* --------------------------------------------------
- Inserting a new element at the end of the array
--------------------------------------------------*/

// Function that push an element into the array
array.push("Kiwi");

// Display the new array
displayArray(array, 4);

/* --------------------------------------------------
- Remove "Apples" from the array
--------------------------------------------------*/

// First: identify the index where "Apples" is
function checkIndex(fruit) {
  return fruit === "Apples";
}
var index = array.findIndex(checkIndex);

// Then, remove 1 element from the array, where the word "Apple"
// Aka Which is the word by itself
array.splice(index, 1);

// Display the new array
displayArray(array, 5);

/* --------------------------------------------------
- Sort the array in reverse order
--------------------------------------------------*/

// Function that reverse the array
array.reverse();

// Display the new array
displayArray(array, 6);

// NEW Array
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);
