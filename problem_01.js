//Write program to print the kth digit from last

var input=23415;
let k=4;

// toString() function to covert number into string
// split() to split the string into array
// map to covert elements(strings) of array into numbers
arr = input.toString().split('').map(Number);

console.log(arr);

// reverse the array to find element from last 
rev_arr=arr.reverse();

console.log("The vale at kth position: "+k+" is: "+rev_arr[k-1]);