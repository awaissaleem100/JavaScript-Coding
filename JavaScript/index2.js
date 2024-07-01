var arr=["Ali","Abdullah","Majid","khan","Awais"];
console.log(arr[2]);

var student = {
    first_name : "Awais",
    last_name : "Saleem",
    age : 35,
    fav_num : 18,
    greetings : function(){
           return "Welcome to Ghulam Ishaq Khan Institute";
    }
}
console.log(student.age);
 var num = 15;
function square (num3){
    var result = num3 * num3;
    return result;
} 
console.log(square(3));
console.log(student.greetings());
var loggedIn = false;
if(loggedIn===true){
    document.getElementById("h3").innerHTML = 'Welcome You are logged In';
}else{
    document.getElementById("h3").innerHTML = 'Try till you are logged In';
} 


if(student.age >= 18 && student.age<30){
    console.log("You can take admission in university");
}else if (student.age<18){
    console.log("You are too young");
}else if(student.age>30){
    console.log("What are you doing till now!");
}else{
    console.log("Don't know what to write about it");
}
// switch statement

function checkNumber(num){
    var result;
    num%2==0 ? result = "Even" : result = "Odd";
    return result;
}
console.log(checkNumber(8));

switch(student.fav_num){
    case 12 : 
    console.log("My favorite number is 12");
    break;
    case 14:
        console.log("My favorite number is 14");
        break;
    case 16:
    console.log("My favorite number is 16");
    break;
    case 18:
    console.log("My favorite number is 18");
    break;
    default:
    console.log("I don't have any favorite number");
    break;            
}