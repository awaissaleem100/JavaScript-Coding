/*
const h3=document.querySelector("h3");

const something= (element)=>{
        element.innerHTML="Welcome to JavaScript";
        return true;
}
something(h3);
var result=something(h3);
console.log(result);

const sum= (a,b) => a+b;


console.log(sum(44,56));

const car ={
    name : "Tesla",
    model : "2022",
    capacity : 4,
    price : 40000,
    status: "off",
    started : function (){
        this.status = "started";
        console.log(this);
        console.log("The car has started!");
        console.log(this.status);
    }
 
    */
   class  vehicle{
     power;
     numberofvehicles;
     constructor(power,numberofvehicles){
        this.power=power;
        this.numberofvehicles=numberofvehicles;
     }

     moving(){
        console.log("vehicle started movieng");
     }

   }

    class Car extends vehicle{
        name ;
        company ;
        price ;
        power;
        enginestatus ;
        constructor(name,company,price,power,enginestatus,numberofvehicles){
            super(power,numberofvehicles);
            console.log("Constructor is called");
            this.name=name;
            this.company=company;
            this.price=price;
            this.power=price;
            this.enginestatus=enginestatus;
        }
        start(){
            this.enginestatus="On";
            console.log(this.name+ "engine status is " + this.enginestatus);
        }
    }
    const myCar = new Car("Alto","Sl Alto",50000,"3000CC","ON",4);
    console.log(myCar);
    const myCar2=new Car("Mark X","Mark" ,60000,"40000CC","OFF",5);
    console.log(myCar2);