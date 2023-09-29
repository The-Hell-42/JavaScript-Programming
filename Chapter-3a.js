// Chapter-3
// Uses of Function 

// Quick Problem 
// Program to find One Plus Average of two number

function onePlusAve(x, y){
    console.log("Done");
    return 1 + ((x + y)/2);
}

// Its an arrow Function 
// We will be learning about this in future lesson
const sum = (p, q) =>{
    return p + q;
}
let a = 2;
let b = 4;
let c = 6;

console.log("One Plus Average of a and b is :", onePlusAve(a, b));
console.log("One Plus Average of b and c is :", onePlusAve(b, c));
console.log("One Plus Average of a and c is :", onePlusAve(a, c));
console.log("The sum of Two Number is : " + sum(24, 26));