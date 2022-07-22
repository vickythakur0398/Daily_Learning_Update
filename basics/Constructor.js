//Constructor in JS
// Constructor is udually written in Caps not in CamelCase

function Createemp (name, id, org)
{
    // var Employee = new object();
    //so here I have created a object so that i can set values
    //like Employee.name = name;
    //But here constuctor is used so no need to use object and return
    this.name = name;
    this.id = id;
    this.org = org;
    
    //return Employee 
    //no need to this as we are using constructors
}

// to initialise constructor simply use new keyword

var Emp1 = new Createemp("vicky",1983168,"Tcs")
var Emp1 = new Createemp("sam", 186832, "tata")

console.log(Emp1);


