// Chapter-4
// Quick Problem-1

// Template Literals
let boy1 = "Anurag"
let boy2 = "Manish"
// Anurag is friend of Manish
let sentence = `${boy1} is friend of ${boy2}`
console.log(sentence) 


// Escape Squence Character
// let name1 = 'App\"le';
// console.log(name1);
// let name2 = 'App\'le';
// console.log(name2);

// // Quick Problem-2
let name3 = "Anurag";
// console.log("My Name is " + name3);
// console.log("My UpperClass Name is " + name3.toUpperCase());
// console.log("My LowerClass Name is " + name3.toLowerCase());
// console.log("Slice of My Name is " + name3.slice(2));
// console.log("Slice of My Name is " + name3.slice(2,5));

// let name4 = "Nnurag Shah";
// console.log("My Name is " + name4.replace("Shah","Sah"));
// let name_4 = name4;
// console.log("My Name is " + name_4.replace("Nnu", "Anu"));

let friend = "Bipin";
console.log(name3.concat(" is a friend of ", friend));

let friend2 = "   Manish Lal   ";
console.log(friend2.trim());
console.log(friend2);

// Problem-No-1

console.log("Harry\"".length);


// Problem-No-2

let str1 = "The quick brown fox jumps over the lazy dog";
let str2 ="fox";
console.log(str1.includes(str2));
console.log(`The word "${str2}" ${str1.includes(str2) ? "is" : "is not"} in the sentence`);

// Problem-No-3
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());


// Problem-No-4

let str3 = "Please give Rs 1000 ";
let amount = Number.parseInt(str3.slice(15));
console.log(amount);
console.log(typeof amount);

// Problem-No-5

let str4 = "Deepika";
str4[3] = "R";
console.log(str4);  // str4 will not change, because string are immutable
