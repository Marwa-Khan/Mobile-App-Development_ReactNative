// function o find the position of element=10 in given array
function num_first_last(numloc){

    var first_pos=0;
    var end_pos=numloc.length-1;
    
        if (numloc[0] == 10 ){
            console.log("The element found at "+first_pos+"th position of array");
        }
        else if(numloc[end_pos] == 10){
            console.log("The element found at "+end_pos+"th position of array");
        }
        else{
            console.log("The element is not at zeroth position nor at last position");
        }

    
    
}

my_arr=[20,8,1,56,88,10]; 
// calling function
num_first_last(my_arr);