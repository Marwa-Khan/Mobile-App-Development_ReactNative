//Write a JavaScript function that returns a passed string with letters in alphabetical order.


function sortString(str){
    // converting string to array of characters
    var arr = str.split('');
    // console.log(arr);
    var temp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        /* if ASCII code greater then swap the elements position*/
        if(arr[i] > arr[j]){
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr.join('');
  }

var str="comsats"
console.log("The input string is: "+str);

sort_str=sortString(str);
console.log("The string after sorted is: "+sort_str);


//using built in functions

//   function sortString(str)
//   {
//     var arr = str.split('');
//     var sorted = arr.sort();
//     return sorted.join('');
//   }

// var str="comsats"
// console.log("The input string is: "+str);

// sort_str=sortString(str);
// console.log("The string after sorted is: "+sort_str);