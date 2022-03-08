
// arrow function using Rest operator
let avg=(...theArgs)=>{
    // var sum=0;
    var my_arr=[];

    // for (let i=0;i<theArgs.length;i++){
    //     add=sum+theArgs[i];
        
    // }
    // reduce function to add all parameters
    var add=theArgs.reduce((previous, current) => {
        return previous + current;
      });
    
    let average=add/theArgs.length;
    console.log("\nThe average of all parameters is:"+average);
    
    //   to find max number
    let max_num=(Math.max(...theArgs));
    console.log("The highest number among all parameters is:"+max_num);
    my_arr.push(average,max_num);
    
    console.log("\nThe array is:");
    // return theArgs
    return my_arr;


}



console.log(avg(10,20,30,40,50,45));


