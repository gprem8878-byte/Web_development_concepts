// string 
// const str1 = "Rohit";
// const str2 = 'Rohit Negi';
// const str3 = `Strike is 
// coming soon`
// ; // Modern way to create a string we can write our string in multiple lines with line breaking  
// console.log(str3);
// console.log(str1,str2,str3);
// const day = 18;
// const str3 = `Strike is coming on ${day}`;
// console.log(str3);

// const str = `Hello coder army coder`

// console.log(str.length)
// console.log(str[1]);
// console.log(str.toUpperCase())
// const a = str.toLowerCase();
// console.log(a)

// console.log(str.indexOf('cod'))
// console.log(str.indexOf('amy'))
// console.log(str.lastIndexOf('code'));
// console.log(str.includes('llo'));

//slice
// console.log(str.slice(2,7))
// console.log(str.slice(3))
// console.log(str.slice(-7))
// console.log(str.slice(-7,-2))

// we can not mark down the negative index in the sub string format
// console.log(str.substring(2,7))

// const a = `Rohit`
// const b = `Negi`
// const c = a+' '+b
// console.log(c)
// console.log(24+"Rohit")
// console.log(24+"Rohit"+10)
// console.log(20+20+"Rohit")

// console.log(str.replace('ode','iam'))
// console.log(str.replaceAll('ode','cer'))

// const a = " Rohit Negi ";
// console.log(a.trim());

// const  b = `Rishabh,Suraj,Anuj,Sumit,Swati`
// console.log(b.split(','))



// Date 

// const now = new Date();

// console.log(now);

// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

//Local Hour

// console.log(now.getDay());   // day started with 1 
// console.log(now.getDate());
// console.log(now.getFullYear())
// console.log(now.getMonth());   // month started with zero 

// const now = new Date(2026,3,20,2,9,45);
// console.log(now);
// console.log(now.toString());

// const now = Date.now();
// console.log(now)
// const dates = new Date(1776674756481)    // Timestamp
// console.log(dates.toString())

// const now = Date.now()
// const dates = new Date(0)
// console.log(dates.toString())

// const now = Date.now();
// const sates = new Date(now);

// console.log(sates);


// let str = "hello";
// str[0] = 'J';
// console.log(str)
// str = "Jello"

// console.log(str)


let d = new Date();

d.setDate(32);
console.log(d);