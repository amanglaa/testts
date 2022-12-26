/*
String
*/
let Fname;
Fname = "ashish";
console.log(Fname);
let Lname;
Lname = 'Mangla';
console.log(Lname);
let LnameUpper = Lname.toUpperCase();
console.log(LnameUpper);
/*
Number
*/
let age;
age = 25;
age = 22.5;
let dob = "25";
let result = parseInt(dob);
/**
 Boolean
 */
let isVald;
console.log(isVald);
/*
Array
*/
let empList;
empList = ["ashish", "mangla", "ashi"];
console.log(empList);
let numList;
numList = [1, 2, 3, 4, 5];
console.log(numList);
let numResult = numList.filter((num) => num > 2);
console.log(numResult);
let numFind = numList.find((num) => num === 2);
console.log(numFind);
let empFind = empList.find((emp) => emp === 'ashish');
console.log(empFind);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
