console.log("Now I am studying loops in JavaScript");
var count=0;
while(count<=10){
    console.log(count);
    console.log("Run me again again until I fail");
    count+=1;
}
// for loops in javascript
 
for(var count=0;count<=10;count+=2){
    console.log(count);
    console.log("I am inside for loop");
}

var cars=["Mark X", "Honda civic","Tesla","Mercedez Benz","Lexus","Mehran"];
 for(index=0;index<cars.length;index++){
    console.log(index);
    console.log(cars[index]);
 }
// for of loop

for ( var  car of cars){
    console.log(car);
}
// Elements in JavaScript

var students = {
    first_name : "Awais",
    last_name : "Saleem",
}
// Events in JavaScript

var khan={
    first_name: "Awais",
    last_name : "Saleem",
}
function print(fullname){
    console.log(`Welcome to JavaScript,${fullname}`)
}
print(khan.first_name + " " + khan.last_name);
console.log(print);

// call back function
function welcome(generatefullName){
    console.log(`Welcome to JavaScript,${generatefullName()}`)
}
welcome(function(){
    return  khan.first_name + " " + khan.last_name;
})
var button= document.getElementById('btn');
var h1=document.getElementById('h1');


function toggleh1(){
    visibility=h1.style.visibility;
    if(visibility==="hidden"){
        h1.style.visibility = "";
    }else{
        h1.style.visibility = "hidden";
    }
}
 button.addEventListener("click" , function(){
    visibility=h1.style.visibility;
    if(visibility==="hidden"){
        h1.style.visibility = "";
    }else{
        h1.style.visibility = "hidden";
    }
}) 

button.addEventListener("click",toggleh1);
button.removeEventListener("click",toggleh1);
 
button.addEventListener("mouseenter",function(){
    console.log("The mouse enter into red zone of button");
})