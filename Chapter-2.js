// Chapter-2
// Problem-No-1

/*
let a = prompt("What is your age :");
if(a < 10 && a > 20){
    console.log("The age lies between 10 and 20.")
}
else{
    console.log("The age doesnt lies between 10 and 20.")
}
*/ 

/*
Here the "Prompt" will not work because it is not define in node.js
It can only be access in runtime browser' console.
*/

// Problem-No-2

/*
let b = prompt("What is your age dude :")
switch (b){ 
    case '12':     
        console.log("Your age is 12");    
        break; 
    case '13':
        console.log("Your age is 13");
        break;
    case '14':
        console.log("Your age is 14");
        break;
    case '15':
        console.log("Your age is 15");
        break;
    default:
        console.log("Your age is not valid")
}
*/

/*
Here the "Prompt" will not work because it is not define in node.js
It can only be access in runtime browser' console.
*/

// Problem-No-3

/*
let num = prompt("Enter a number :");
num = Number.parseInt(num);
if(num%2 == 0  &&  num%3 == 0){
    console.log("Your number is divisible by either 2 or 3.");
}
else{
    console.log("Your number is not divisible by 2 or 3 .");
}
*/

/*
Here the "Prompt" will not work because it is not define in node.js
It can only be access in runtime browser' console.
*/
        
// Problem-No-4
/*
let num = prompt("Enter a number :");
num = Number.parseInt(num);
if(num%2 == 0  ||  num%3 == 0){
    console.log("Your number is divisible by either 2 or 3.");
}
else{
    console.log("Your number is not divisible by 2 or 3 .");
}
*/

/*
Here the "Prompt" will not work because it is not define in node.js
It can only be access in runtime browser' console.
*/

// Problem-No-5

let age = 19;
let a = age > 18? "You can Drive" : "You cannot Drive";
console.log(a);