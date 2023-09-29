//  Chapter-3
// Quick Problem-1
// Program to find the sum of n natural number
// For loop, for in loop , for of loop , while loop, do while loop

// Using For Loop

let sum = 0;
// let n = prompt("Enter the value of n"); THIS HELP TO ASK USER TO ENTER THE NUMBER (n);
// n = Number.parseInt(n);
let n = 2
for (let i = 0; i < n ; i++){
    sum += (i + 1);
    console.log((i + 1),"+");
}
console.log("Sum of first " + n + " Natural number is : " + sum);
console.log("Done");



// Program to find the mark of listed student
// Using For In loop

let Student = {
    harry: 23,
    ram: 34,
    site: 45,
    hari: 56,
}
for(let a in Student){
    console.log("Marks of " + a + " is " + Student[a]);
}
console.log("Done");


// Uses of For Of Loop

for(let b of "Anurag"){
    console.log(b);
}
console.log("Done");





// While Loop

// Quick Problem

let p = 10;
let i = 1;
while(i<p){
    console.log(i);
    i++;
}
console.log("Done");

// Do While Loop

let l = 11;
let m = 10;
do{
    console.log(l);
    l++
}while(l<m);

/*
Do while loop is such while loop that execute atleast once it run
*/