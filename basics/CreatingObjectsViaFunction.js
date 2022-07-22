
//In JS creating objects is different as compare to java bcs in java first we create class and than we create objects
//but in js objects are created from function 

var Emp = {
    name :"vicky" ,
    empId: 1983168,
    org : "Tcs",
};

console.log(Emp.name);

// but we have lakhs of emp we cant hardode each name 

// so we are creating an object of class emp and will fill it when needed

function CreateEmp (name, id,org)
{
    // creating object
    var employee = {};  // new object(); this way also obj will be created
    CreateEmp.name = name;
    CreateEmp.id = id;
    CreateEmp.org = org;
    
    return CreateEmp;


};
// whenever we have to create a new emp we can simply fill this and populate
var Emp1 = CreateEmp ("vicky",1983168,"TCS");
var Emp2 = CreateEmp ("Sam",183168,"TataCS");

console.log(Emp1);
console.log(Emp1.id);

console.log(Emp2.org);

/*op
node /tmp/wVqVZUIT9e.js
vicky
{ [Function: CreateEmp] id: 183168, org: 'TataCS' }
183168
TataCS

/*


