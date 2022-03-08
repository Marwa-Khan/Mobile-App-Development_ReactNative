function sandwich_calculator(bread,cheese) {
    if(bread<2){
        return("Breads are less then 2 so we cannot make the sandwich of it");
    }
    else{
        var sand_possible=Math.floor(bread/2);
        console.log("Possible sandwiches from breads="+bread+" are "+sand_possible);

    }

    if(cheese<sand_possible){
        return("According to available cheese="+cheese+" so can make "+cheese+" sandwiches");
    }
    else{
        return("According to available bread="+bread+" and cheese="+cheese+" we can make "+sand_possible+" sandwiches")
    }

    
    
}


console.log(sandwich_calculator(12,4));