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
// console.log("The value, index, array of 9th index in an array is ", mark_ofclass_12[9]); //it will be undefined because index 9 is not present
// mark_ofclass_12[0] = 24;  //changing the value, index, array of an array
// mark_ofclass_12[9] = 99; //Adding a new value, index, array to an array
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

// let num2 = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < num2.length; i++) {
//     console.log(num2[i]);
// }
// // Shortcut of for loop in array
// // for ... in loop
// for (let i in num2) {
//     console.log(i);
// }
// // for ..of loop
// for (let item of num2) {
//     console.log(item);
// }


// // For each loop

// num2.forEach((element) => {
//     console.log(element * element);
// })

// Array.from loop

// let naam = "Anurag";
// let arr = Array.from(naam);
// console.log(arr);

// Array Map Method in java script

// let arr = [12, 13, 14, 15, 16];
// let a = arr.map((value, index, array) => {
//     console.log(value, index, array);
//     return value + index ;
// });

// console.log(a);

// Array filter Method in java script

// let arr2 = [1,2,3,4,5,12,13,14,15,21,22,23,24,25];
// let a2 = arr2.filter((a)=>{
//     return a < 10;
// })
// console.log(a2);

// let arr2 = [1, 2, 3, 4, 5, 12, 13, 14, 15, 21, 22, 23, 24, 25];
// let a = arr2.reduce((h1, h2) => {
//     console.log(h1 - h2)
//     return h1 - h2;
// })
// console.log(a)


// Chapter-5 practise question
// Problem-No-1

// let arr = [1,2,3,4,5,6];
//  let a = prompt("Enter a number "); //Here the prompt will not work and it only works in browser 
// a = Number.parseInt(a);
// arr.push(a);
// console.log(a); 

// Problem-No-2

// let arr = [1, 2, 3, 4, 5, 6];
// let a;
// do {
//     a = prompt("Enter a number "); //Here the prompt will not work and it only works in browser 
//     a = Number.parseInt(a);
//     arr.push(a);
// }while(a!=0)
// console.log(a); 

// Problem-No-3

// let arr = [10, 20, 30, 4, 50, 60, 70]
// let a = arr.filter((x)=>{
//     return x%10 == 0;
// })
// console.log(a)


// Problem-No-4

// let arr = [10, 20, 30, 4, 50, 60, 70]
// let a = arr.map((x)=>{
//     return x*x;
// })
// console.log(a)


// Problem-No-5
let arr = [1,2,3,4,5]
let a = arr.reduce((x1, x2,x3)=>{
    console.log(x1*x2+x3)
    return x1*x2+x3;
})
console.log(a)