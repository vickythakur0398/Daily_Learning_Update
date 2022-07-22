// class -everything is same as prototype it just makes it easier to write

class Transport{
    constructor(tyre,cost)
    {
        this.tyre = tyre;
        this.cost = cost;
    }

// now to set prototype simply write
price(){
    return this.cost;
}
}
var t1 = new Transport(4, 10000);
var t2 = new Transport(8, 10);

console.log(Transport.prototype)
console.log(t1.price());

//similar to prototype only syntax is different


//class and inheritence

class Transport{
    
    constructor(price, tyre){
        this.price = price;
        this.tyre = tyre;
    }
    
    price()
    {
        return this.price;        
    }
    
    description()
    {
        console.log("I am at parent classs")
    }
    
}

class cars extends Transport{
    
    constructor(tyre, price,numdoors){
        // as parent also hv two prop so to access those we r usin super
// super is use to call parent class constructor 
  //          super(4, 10000);//here we hc hardcoded it 
  super(tyre, price, numdoors); //here we hv not hardcoded it

        this.numdoors = numdoors;
    }
     description()
    {
        super.description();
        console.log("I am at child classs");
    }
    
    
}

var c = new cars(4,100000,32);
console.log(c.description());
// var a = super.description()
console.log(cars.description);








