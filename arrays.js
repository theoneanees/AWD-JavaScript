//Arrays in JavaScript
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.


let fruits1 = ['Orange', 'Apple', 'Pineapple'];
let mixed = ['str', 89, [3, 5]];
// console.log(fruits[0]); 

// console.log(fruits);
// console.log(mixed);
// console.log(typeof marks);
// console.log(Array.isArray(marks));


// fruits[1] = 'Blueberry';
// console.log(fruits);  

// let value = marks.indexOf(73);

// console.log(value);

let fruits = ['Apple', 'Banana', 'Mango', 'Pineapple', 'Blueberry'];

// push(item) - adds an item to the end of an array
fruits.push('Orange');
console.log(fruits); // Outputs: ['Apple', 'Banana', 'Mango', 'Pineapple', 'Blueberry', 'Orange']

// pop() - removes the last item of an array
fruits.pop();
console.log(fruits); // Outputs: ['Apple', 'Banana', 'Mango', 'Pineapple', 'Blueberry']

// shift() - removes the first item of an array
fruits.shift();
console.log(fruits); // Outputs: ['Banana', 'Mango', 'Pineapple', 'Blueberry']

// unshift(item) - adds an item to the beginning of an array
fruits.unshift('Apple');
console.log(fruits); // Outputs: ['Apple', 'Banana', 'Mango', 'Pineapple', 'Blueberry']

// indexOf(item) - finds the index of an item in the array
console.log(fruits.indexOf('Mango')); // Outputs: 2

// slice(start, end) - returns a new array that includes items from start up to but not including end
console.log(fruits.slice(1, 4)); // Outputs: ['Banana', 'Mango']

// splice(start, deleteCount, items) - changes the content of an array by removing or replacing existing elements and/or adding new elements in place
fruits.splice(2, 0, 'Orange');
console.log(fruits); // Outputs: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Blueberry']

// join(separator) - creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
console.log(fruits.join('  ')); // Outputs: 'Apple - Banana - Orange - Mango - Pineapple - Blueberry'

// concat(array) - returns a new array by combining two or more arrays
let moreFruits = ['Strawberry', 'Watermelon'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Outputs: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Blueberry', 'Strawberry', 'Watermelon']

// reverse() - reverses the order of the elements in an array
console.log(fruits.reverse()); // Outputs: ['Blueberry', 'Pineapple', 'Mango', 'Orange', 'Banana', 'Apple']

// sort() - sorts the elements of an array in place and returns the sorted array
console.log(fruits.sort()); // Outputs: ['Apple', 'Banana', 'Blueberry', 'Mango', 'Orange', 'Pineapple']

// every(function) - tests whether all elements in the array pass the test implemented by the provided function
let isEveryFruit = fruits.every(function(item) {
  return item.length > 5;
});
console.log(isEveryFruit); // Outputs: false

// some(function) - tests whether at least one element in the array passes the test implemented by the provided function
let isSomeFruit = fruits.some(function(item) {
  return item.length > 5;
});
console.log(isSomeFruit); 

// find(function) - returns the value of the first element in the array that satisfies the provided function
let foundFruit = fruits.find(function(item) {
  return item.length > 5;
});
console.log(foundFruit); 


// forEach(function) - executes a provided function once for each array element
fruits.forEach(function(item, index) {
  console.log(item, index);
});

// map(function) - creates a new array with the results of calling a provided function on every element in the array
let newFruits = fruits.map(function(item) {
  return item.toUpperCase();
});
console.log(newFruits); // Outputs: ['APPLE', 'BANANA', 'ORANGE', 'MANGO', 'PINEAPPLE', 'BLUEBERRY']

// filter(function) - creates a new array with all elements that pass the test implemented by the provided function
let filteredFruits = fruits.filter(function(item) {
  return item.startsWith('B');
});
console.log(filteredFruits); // Outputs: ['Banana', 'Blueberry']


//Home Task : Swap the first and last elements of the array

