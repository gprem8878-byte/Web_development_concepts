// NUmber 

// let a = 10;
// let b = 234.6821;
// b.toFixed(1);
// console.log(b);
// console.log(typeof b.toFixed(1));
// let c = b.toFixed(2);
// console.log(typeof c);

// console.log(b.toPrecision(5));
// console.log(b.toString());

// let a = new Number(20);  // creating a number with object type --> faltu method 
// console.log(a);
// console.log(typeof a);

// let b= 20;
// console.log(typeof b);

// let a = new Number(20); 
// let b = new Number(20); 

// console.log(a == b);

// let obj1 = {
//     name : "Sumit"
// }

// let obj2 = {
//     name : "Sumit"
// }

// console.log(obj1 == obj2);

//Non-primitive : Reference bases pe compare 
// Primitive : Copy by value  

// let a = 10;
// let b = 10;

// console.log(a == b);

// To find the absolute value of any number we use --> Math.abs()
// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.LN2);
// console.log(Math.SQRT1_2);
// console.log(Math.max(10,524,369,456,102));
// console.log(Math.random()); // this method generates the random values from 0 to 1 and here (0 is included and 1 is not )

// saate baaji game :(0-9)
// console.log(Math.floor(Math.random()*10)+1);

// console.log(Math.floor(Math.random()*6)+1);

//15-25
// console.log(Math.floor(Math.random()*11)+15);


// OTP generation : 1000-9999
// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);


let a = 0.1 
let b = 0.2
let c = a+b

console.log(c.toFixed(2) == ( (Number(a.toFixed(2)) + Number(b.toFixed(2))).toFixed(2) ))
