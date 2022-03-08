//Write program to find sum of all digits

var input = 23617;

// toString() function to covert number into string
// split() to split the string into array
// map to covert elements(strings) of array into numbers
arr = input.toString().split('').map(Number);

console.log("\nThe array after coverting a number to string and splitting it to array is: "+arr);
console.log("\n");

// reduce function to add
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);


console.log("Sum of all the elements of array is: "+sumWithInitial);