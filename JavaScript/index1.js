var firstname="Awais";
var lastname="Saleem";
var fullname=firstname+" "+ lastname;
var age = 40;
var weight = 40.9;
var permission=true;
var salary;
salary=3000;
document.getElementById("h1").innerHTML=firstname + age;
console.log(salary);
console.log(fullname);
var num1=40;
var num2=30;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1%num2);
num1-=20;
console.log(num1);
//Array in JavaScript
//Array is collection of ordered data
//Array is collection of memory locations
var myArray=["Awais","Saleem","Khan","lala","Baba"];
console.log(myArray[2]);
var yourArray=[45,37,68,90,"Awais"];
console.log(yourArray[0]+yourArray[4]);
//Objects in JavaScript
//Objedt in javascript is a key value pair
var person={
    firstName: "Awais",
    lastname : "Saleem",
    Age : 24,
    height : 6.2,
}
console.log(person.firstName,person.Age,person.height);
window.alert("You are no longer able to use this app");
window.confirm("What is you answer");
 var name=window.prompt("What is your name?");
 console.log(name);

 //function is a group of statement used for a specific task
 function generatefullName(first_name,last_name){
    console.log("First line of function");
    console.log(first_name+ " " + last_name);
    console.log("Third line of function");
    return first_name + " " + last_name;
 }
 var khan=generatefullName("Abdul", "Majid");
 console.log(khan);
 generatefullName("Awais","khan");
 generatefullName("Saleem","khan");
 generatefullName("Nidal","khan");
 document.getElementById("h1").innerHTML=khan;
 function sum(num1,num2){
    return num1+num2;
 }
 var sumoutput=sum(1500,3000);
 console.log(sumoutput);
 // Bye Bye lecuture 2