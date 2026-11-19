console.log("Hello Worls Start");

// code

// const p1 = fetch(("https://api.github.com/users"))
// console.log(p1) // we should not read the data in its pending state 
// p1 is pending state means it is requesting data to the github api and waiting for the response. 
// github can "fullfill" the request or "reject" the request.

// read the data when the promise is fulfilled or rejected
// p1.then((response)=>{
//     console.log(response)
// })

//  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true, reader: [ReadableStreamDefaultReader] }
// actual data is in the body of the response object and data is in the byte format .So, we have to convert it in JS object

// const p2 =p1.then((response)=>{
//     return response.json() // Promise {<pending>} , Since conversion takes time and it is also an asynchronous operation so it returns a promise object in pending state.
// })

// p2.then((response)=>{
//     console.log(response) // actual data in JS object format
// })

// It's a common practice to chain the promises to avoid creating multiple promise objects and to make the code more readable.
// Promise chaining is a technique that allows you to chain multiple asynchronous operations together, where each operation depends on the result of the previous one. This is done by returning a new promise from the callback function of the previous promise, which allows you to chain multiple promises together in a single line of code.
fetch("https://api.github.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
console.log("Hello World End");



// Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.