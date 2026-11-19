// Function

// function greeting(){
//     console.log("Hello Coder army")
// }

// function sum(num1,num2,num3 =0,num4 =0){
//     const sum = num1+num2
//     console.log(sum)
// }
// greeting()
// sum(4,9)
// sum(3,6,7)
// sum(4,6,8,10)
// console.log(greeting)


// rest operator 
// function sum(...num){
//     let sum =0;
//     for(let n of num){
//         sum =+n;
//     }
//     console.log(sum)
// }

// const arr = [10,20,30,40,50]

// // rest operator --> catching the multiple values by forming an array
// const [first,second,...num] = arr;
// console.log(first,second,num)

// // spread operator --> adding two arrays by merging them
// const arr1 = [20,50,60,10]
// const ans = [...arr,...arr1]
// console.log(ans)

// second way of creating function
// This function can not be called before its initialization 

// const addNumber = function(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,8))

// greeting()  // this can be called before its initialization 
// function greeting(){
//     console.log("Hello Coder army")
// }

// Arrow function 
// const addNum = (num1,num2)=>{
//     console.log("hello Rohit Negi")
//     return num1+num2;
// }
// console.log(addNum(52,36))

// second way to create an arrow function 
// const addNum = (num1,num2)=> num1+num2
//  console.log(addNum(52,36))

// if we have only one parameter in my function we can also skip the parenthesis in arrow function
// const square = num => num*num;

// console.log(square(8))

// const greeting = ()=>{
//     return{
//         name: 'Rishabh',
//         age : 20
//     }
// }

// second way to create object in arrow function
// const greeting = () => ({name : 'Prem' , age : 20})

// console.log(greeting())

// IIFE
// (function greeting (){
//     console.log("hello Ji")
// })();

// (()=>{
//     console.log("Hii")
// })();

// call back function  --> passing one function as parameter in another function as seen in line 98
// function greet(){
//     console.log("Hello , How are you")
// }
// function dance(){
//     console.log("I am dancing")
// }
// function meet(callback){
//     console.log("I am going to meet someone")
//     callback()
//     console.log("Hello i have finished my work ")
//     // line of codes 
// }
// meet(greet)
// meet(dance)
// meet()
// greet()

// meet(greet())



// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         return count;  // in this scenario, after execution of createCounter() system saw that the count g=function is still in used by another function 
//     }                  // it allocates the memory to the count variable in the heap and then pop from the stack
//     return increment  // and this is the concept of closure 
// }

// // console.log(count)
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// here what happens --> we have the reference of increment() stored in counter variable and when 
//we call counter () it access the count from createCounter() and modifies its values 
// and this happens because of {closure} --> is not a bug it's a property 

// Closure => a function that remembers variable from its outer scope after the outer function has finished executing 



// Use case of closure function
// let balance = 500;

// let user ={
//     balance : 500,
//     deposit : function(amount){
//         console.log(this.balance)
//         this.balance += amount;
        
//     }
// }
// user.deposit(200)
// console.log(user.deposit(200))

//HIGHER ORDER FUNCTION

function double(value){
    return function execute(num){
        return num* value;
    }
}

// const n = double(20)
// console.log(n(5))

const n = double(20)(5);
console.log(n)

