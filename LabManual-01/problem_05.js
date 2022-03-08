
//function to find the leftmost vowel from string

function left_most_vowel(str){

    vowels=['a','e','i','o','u','A','E','I','O','U'];
    
    for(let alp=0;alp<str.length;alp++){
        
        for(let vol=0;vol<vowels.length;vol++)
        {

            if(str[alp]==vowels[vol]){
                console.log("The character is:"+str[alp]);
                return alp;
                break;

            }

        }
        
        
    }
    
}

console.log("and at position:"+left_most_vowel("Marwa"));

console.log("\n\n");

//function to reverse the given digit
function reverse_digit(){
    var num=23657;
    console.log("The given number is:"+num);
    let rev=0;
    let rem;
    while(num!=0) {
        rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10);
    }
    console.log("The reverse of number is:"+rev);

}

reverse_digit();


