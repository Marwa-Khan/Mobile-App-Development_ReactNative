//Write program to find sum of even digits. 

var input =23617 ;

// toString() function to covert number into string
// split() to split the string into array
// map to covert elements(strings) of array into numbers

arr = input.toString().split('').map(Number);
console.log("Converting given number to array= "+arr);
let sum=0;
for (let i=0;i<arr.length;i++){
    
    if(arr[i]%2==0){
        sum=sum+arr[i];
    }
    
}
console.log("The sum of even numbers is: "+sum);