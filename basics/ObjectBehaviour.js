//Adding properties to function
function Transport(mode, wheel,cost)
{
    this.mode = "mode";
    this.wheel =wheel;
    this.cost = cost;
    //I am adding a property to get price of transport  
    this.pricee = function()
    {
        return this.cost;
    }
};

var t1 = new Transport("car", 4, 1000);
var t2 = new Transport("bus", 6, 10000);
console.log(t1);
//op Transport { mode: 'mode', wheel: 4, cost: 1000, pricee: [Function] }

//here unline java and c++ in JS it will create multiple copy of pricee function in any transport(object) we create which is filling our memory so to 
// avooid this we use prototype
//
console.log(t1.pricee());


//ProtoType
//objects which r created via constructor function multiple copies of functions(if added) by user so it is not a good practice to use that so we use prototype to save 
//us from memory wastage


Transportp.prototype.pricee = function()
{
    return this.cost;
}


var t1 = new Transportp("car", 4, 1000);
var t2 = new Transportp("bus", 6, 10000);
console.log(t1);
//Transportp { mode: 'mode', typre: 4, cost: 1000 }
// no multiple function pricee will be created 
// so we are savin memory
// there is only one copy of pricee and all the objects are utilising that i.e they are inheriting these prototype properties

console.log(t1.pricee())

console.log(Transportp.prototype);
//Transportp { pricee: [Function] }
// it contains prototype but 
console.log(t1.prototype);
// undefined bcs t1 and t2 are

/*
Transportp { mode: 'mode', typre: 4, cost: 1000 }
1000
Transportp { pricee: [Function] }
undefined
