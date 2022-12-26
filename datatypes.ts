/* 
String
*/
let Fname: string;
Fname = "ashish";
console.log(Fname);

let Lname: string ;
Lname = 'Mangla'
console.log(Lname);

let LnameUpper = Lname.toUpperCase();
console.log(LnameUpper);


/*
Number
*/

let age: number;
age = 25;
age = 22.5;

let dob = "25";

let result = parseInt(dob);

/**
 Boolean
 */

 let isVald : boolean;
 isVald = false
 console.log(isVald);


 /*
 Array
 */
let empList : string[];

empList = ["ashish","mangla","ashi"];
console.log(empList);

let numList : Array<number>;
numList = [1,2,3,4,5]
console.log(numList);

let numResult  = numList.filter((num) => num > 2);
console.log(numResult);

let numFind =  numList.find((num) => num === 2);
console.log(numFind);

let empFind =  empList.find((emp) => emp === 'ashish');
console.log(empFind);

let sum = numList.reduce((acc,num) => acc+ num);
console.log(sum);

/*
ENUM
*/

const enum Color{
    Red,
    Green,
    Blue

}
let c:Color = Color.Blue;
let redColor:Color = Color.Red;

console.log(c);
console.log(redColor);

/*
Tupples
*/

let swapNumbs: [num1:number,num2:number];

function swapNumbers(num1:number,num2:number):[number,number]{
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    return [num1,num2]
}
swapNumbs = swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];




let department;
department = 10;
department = 'ashish';