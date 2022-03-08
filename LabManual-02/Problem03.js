// Array of Objects

var library=[
    {
        author:"Bill Gates",
        title:"The Road Ahead",
        reading_Status:true
    },

    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        reading_Status: true
    },

    {
        author: "Suzanne Collins",
        title:  "Mockingjay: The Final Book of The Hunger Games", 
        reading_Status: false
    }
];


//console.log(library[0]);


function display() {
    // Iterate loop on array of objects to get the properties of objects
    for(let i=0;i<library.length;i++){


        console.log("The name of "+i+" Object has Author "+library[i].author+"\nThe name of "+i+" Object has title "+library[i].title+"\nThe name of "+i+" Object has reading status "+library[i].readingStatus);

        console.log("---------------------");
        
    
    }
    
}

display();

 
 

