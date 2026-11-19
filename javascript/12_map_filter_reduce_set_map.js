// foreach loop , filter , reducer, map, set


// const arr = [10,20,30,"Rohit",60];

// const arr = [10,20,30,50,80,60];

// // arr.forEach((number,index,arr)=>{
// //     console.log(number,index,arr)
// // })
// let sum = 0;
// arr.forEach((number)=>{
//     sum += number
// })
 
// console.log(sum)

//filter 

// const arr = [10,20,30,50,80,60];

// const newArr = arr.filter((number)=> number>25);  // return the new array 

// console.log(newArr)


// arr.filtering = function(compare){   // this filtering method only works for this array not for all but in case 
//     const ans = [];                  // if we want to make it universal for all so we can use Array.prototype.filtering 
//     for(let num of this){            // By doing this we this method becomes universal and can be used with any array
//         if(compare(num)){            // but it is not recommended because may be it clash or create bugs in the code 
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newarr = arr.filtering((num) => num>20);
// console.log(newarr);


// const arr = [10,20,30,50,80,60];

// const newArr = arr.map((num) => num*2);
// console.log(newArr);

// let arr = [10,20,30,10,40,30];
// const s1 = new Set(arr);
// s1.add(11);
// // console.log(s1);
// console.log(s1.has(20));
// s1.delete(10);
// console.log(s1.size);

// s1.clear();


// const email = ['ro@gm','ra@gm','mo@gm','ro@gm'];

// const Unique = [...new Set(email)];
// console.log(Unique);

// const s = new Set(email);
 
// for(let email of s ){
//     console.log(email);
// }

const n1 = new Map([
    ["Rohit",40],
    [2,"Rohit"],
    [true,11],
    [[10,20,30],'Mohit']
]);
// console.log(n1);

n1.set({name:"prem",age: 20},false);
console.log(n1.has('Rohit'));

for(let [keys,values] of n1){
    console.log(keys,values);
}