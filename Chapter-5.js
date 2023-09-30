// Chapter-5
// Quick Problem

// let mark_ofclass_12 = [12, 23, 34, 45, 56, 67, 78, null, "Not Present"];
// console.log(mark_ofclass_12);
// console.log(mark_ofclass_12[0]);
// console.log(mark_ofclass_12[1]);
// console.log(mark_ofclass_12[2]);
// console.log(mark_ofclass_12[3]);
// console.log(mark_ofclass_12[4]);
// console.log(mark_ofclass_12[5]);
// console.log(mark_ofclass_12[6]);
// console.log(mark_ofclass_12[7]);
// console.log(mark_ofclass_12[8]);
// console.log("The value of 9th index in an array is ", mark_ofclass_12[9]); //it will be undefined because index 9 is not present
// mark_ofclass_12[0] = 24;  //changing the value of an array
// mark_ofclass_12[9] = 99; //Adding a new value to an array
// console.log(mark_ofclass_12);
// console.log(typeof mark_ofclass_12);


// // Quick Question solving using for loop
// for (let i = 0; i < mark_ofclass_12.length; i++) {
//     console.log(mark_ofclass_12[i]);
// }

// // Array Mathods

// let num = [1, 2, 3, 4, 5, 6, end=""];
// let a = num.toString();
// console.log(num, a, typeof a);
// let b = num.join(" and ");
// console.log(num, b, typeof b);
// let d = num.pop();
// console.log(num, d);
// let e = num.shift();
// console.log(num, e);
// let f = num.push(21);
// console.log(num, f);
// let g = num.unshift(34);
// console.log(num, g);


// let f1 = [11, 12, 13, 14, 15,end=""];
// let g1 = [21, 22, 23, 24, 25];
// let newArr = a.concat(f1, g1);
// console.log(newArr);

// Sort Medthod

// let compare = (a, b)=> {
//     return a - b
// }

// let num1 = [12,23,34,45,56,223,334,44,556,2000];
// num1.sort(compare);
// console.log(num1);
// num1.reverse();
// console.log(num1);


// // Splicee and slice
// num1.splice(2,3,1023,1024,1025);
// console.log(num1);

// let newNum1 = num1.slice(3, 6);
// console.log(newNum1);


// For  loop in arrays

let num2 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < num2.length; i++) {
    console.log(num2[i]);
}
// Shortcut of for loop in array
// for ... in loop
for(let i in num2){
    console.log(i);
}
// for ..of loop
for(let item of num2){
    console.log(item);
}


// For each loop

num2.forEach((element)=>{
    console.log(element*element);
})

// Array.from loop

let naam = "Anurag";
let arr = Array.from(naam);
console.log(arr);