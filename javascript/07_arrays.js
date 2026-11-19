// Arrays 

// let marks = [10,20,30,40,50]
// console.log(marks)
// console.log(marks.length)

let mark = [10,20,"rohit",true]
// console.log(mark)
// console.log(mark[1])

// console.log(typeof mark)

// mark[2] = 'Prem'
// console.log(mark)

// Push: Insert element at end 
// mark.push('Hello')
// mark.push(20)
// console.log(mark)

// POP : delete element from end

// mark.pop()
// console.log(mark)

// starting pe add and delete perform krna 

// mark.unshift(40)
// console.log(mark)

// delete at start
// mark.shift()
// console.log(mark)

// console.log(mark)

// ietration on array

// let arr =[10,20,30,40,40]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for( let num of arr){
//     console.log(num)
// }

// let arr = [10,20,30,40,50]
// arr =[20,40,60]   // This is acceptable

// console.log(arr)

// const arr1 =[ 2050,60,80]
// arr1 =[30,5,6,8,]   // this is not allowed 

// console.log(arr1)

// const at = [2,50,60,80,25]

// console.log(at.slice(2,4))   // 4 is not included 

// const arr = at.slice(1,4)    // new array is crated from previous array 
// console.log(arr)    // this method doesnt affect the orginal array 
// console.log(at)

// // if you want change the original array : like cutting the some values so we use :
// console.log(at.splice(1,3))
// console.log(at)     // this method make changes in original array

// now for example i want to perform splicing but along with splicing i want to add some data also on the same position of the array
// basically replacing the data
 
// const arr3 = at.splice(1,2,"Rohit",19)
// console.log(arr3)

// Now if we want to merge two arrays what we should do ?

// const arr = [3,56,"Rohit",324]
// const arr1 =[4,5,6,"apple",true]

// const at = [2,50,60,80,25]
// console.log(arr1)

// // one way to push one array into another array 
// // arr1.push(arr)
// //  console.log(arr1)
// // second way to concatenate the two arrays 
// const arr3 = arr.concat(arr1,at)
// console.log(arr3)

// const arr2 =[arr,arr1,at]
// console.log(arr2)


// const arr3 = [...arr,...arr1,...at]
// console.log(arr3)

// converting array to a string 

const names = ["Sumit","Anuj","Prem","Princi","saniya","Raj"]
// console.log(names.toString())

// Join operation
// console.log(names.join(" "))
// console.log(names.indexOf("Anuj"))
// console.log(names.includes("Prem"))
// names.sort()  // sorting done by using the ascii values of characters

// names.reverse()  // reversing of given array
// console.log(names)


// const a = ["90","80","101","85","89"]
// a.sort()   // this will treat the number as string and sort them character by character
// console.log(a)

// const arr1 =[4,5,6,"apple",true]
// arr1.sort()
// console.log(arr1)

// so to sort the number we use a specfic function
// const a1 = [90,80,101,85,89]
// a1.sort((a,b)=> a-b)  // ascending order 
// console.log(a1)
// a1.sort((a,b)=> b-a)  // descending order
// console.log(a1)
// const arr = [10,20,30,50,[40,90,[89,45,23],11],80]

// console.log(arr[4][0])
// console.log(arr[4][2][1])

// const a = arr.flat(Infinity)
// console.log(a)

console.log(Math.round(4.6))
