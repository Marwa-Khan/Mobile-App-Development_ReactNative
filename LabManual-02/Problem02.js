let student={
    name:"Ali",
    sem:"6th",
    reg_no:"077"
};

// function to display properties
function display() {
    console.log("-----Student Object Properties-----");
    console.log("Name is: "+student.name+
    "\nSemester is: "+student.sem+
    "\nReg_no is: "+student.reg_no);

    
}

display();

// delete the property of object
delete student.reg_no;

console.log("-----After deleting the reg_no property------");
display();