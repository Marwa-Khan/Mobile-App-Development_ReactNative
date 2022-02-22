
//generating random integer between 1 to 10
let random_num = Math.floor(Math.random() * 10);

let guess_num=5;
if(guess_num==random_num){
    console.log("You WON, you have guessed the number correctly");
    console.log("The random number was "+random_num+" and guess number is also:"+guess_num);
}
else {
    console.log("Oops, Not matched");
    console.log("The random number was "+random_num+" and guess number is: "+guess_num);
}