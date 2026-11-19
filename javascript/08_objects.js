// object
// key value pair 
// const user = {
//     name : 'Rohit',
//     age : 20,
//     email : 'negi@gmail.com',
//     amount : 34000,
//     "home address" : dwarka

// }

// console.log(user)

// console.log(user.age)
//inserting new value in a object 

// user.adhar = 123456
// //update
// user.amount = 5000;
// console.log(user)

// console.log(user['name'])
// console.log(use['home address'])

// const user = {
//     name : 'Rohit',
//     age : 20,
//     email : 'negi@gmail.com',
//     amount : 34000,
//     "home address" : 'dwarka'

// }
// const user1 = user 
// user.age = 20

// console.log(user)

//Important 
// console.log(Object.keys(user));
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let keys in user){
//     console.log(keys, user[keys])
// }

// const name = user.name;
// const age = user.age;
// console.log(name,age)

// const {name,age} = user;   // destructreing of object

// console.log(name,age)

// const{name:username,age:userage} = user

// console.log(username,userage)

// const temparr = Object.keys(user)
// console.log(temparr)
// for(let keys of temparr){
//     console.log(keys)
// }

// for(let keys of Object.entries(user)){
//     console.log(keys)
// }


// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }


// const user = {
//     name : 'Rohit',
//     age : 20,
//     email : 'negi@gmail.com',
//     amount : 34000,
//     "home address" : 'dwarka',
//     greetings :function(){   // this keyword also points points the same object 
//         console.log(`strike is coming soon ${this.name}`)
//         return 20 
//      }
// }

// const a = user.greetings()
// console.log(a)

// const user2 ={
//     name : "Mohit",
//     age : 20
// }

// user2.greetings = user.greetings
// user2.greetings()
// console.log(user2)


//wecan create object inside object 


// const user = {
//     name : 'Rohit',
//     age : 20,
//     email : 'negi@gmail.com',
//     amount : 34000,
//     "home address" : 'dwarka',
//     address:{
//         city : 'kotdwar',
//         state:'Dehradun'
//     } 
// }
// console.log(user.address.city)

// if we want to create two objects with same attributes and they both can refer two different locations so we can here spread operator 
// const user3 = {...user}
// user3.greetings()
// // shallow copy 
// user3.name = 'Prem'
// console.log(user3)
// console.log(user)

// here by using the spread operator two copies of same object are generated we can mainpulate both the objects separately 
// changes in one object will not shown in onther object

//for example we want to change the address part of user3 
// user3.address.city = 'Dwarka'
// console.log(user3)
// console.log(user)  // here the city of user also changes ---> shallow copy 

// now to tacke this problem we need to create the deep copy 
// const user3 = structuredClone(user)
// user3.address.city = 'Dwarka'
// console.log(user)


// insetad of using key only we can also number to refer values
// keys can also refer as symbols
// const sym = Symbol('id')
// const user = {
//     0 : 'anuj',
//     age : 20,
//     1 : 100,
//     [sym] : 400
// }

// console.log(user[1])
// console.log(user[sym])


let user = {
  name: "Rishabh",
  age: 20
};

let newUser = {
  ...user,
  age: 25
};

console.log(newUser);
console.log(user)


