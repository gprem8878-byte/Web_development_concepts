// const newele = document.createElement("h2");
// newele.textContent = "strike is coming soon";
// newele.id = "second";

// console.log(newele);
// const element = document.getElementById("first");
// element.after(newele);

// const newElement = document.createElement("h3");
// newElement.textContent = "Diwali is coming soon";
// newElement.id = "third";
// newele.after(newElement);

// if we want to create two names of classes for same element we use this method 
// newElement.className = "diwali";
// newElement.className += " Holi";
// including space is important because it makes the classes and .diwali .Holi 
// but when space is not included the class name become the combination of string diwaliHoli
// since , this method can create the error and confusion so we dont use this method
// to tackle this problem we use classList.add();

// newElement.classList.add("diwali");
// newElement.classList.add("Holi");
// newElement.classList.remove("diwali");
// // console.log(newElement);

// newElement.style.backgroundColor = "pink";
// newElement.style.color = "blue";
// newElement.style.fontSize = "20px";

// console.log(newElement.getAttribute("id"));

// newElement.setAttribute("hello","Ji");

// till now the concept of attachiing the element before and after is clear 

// const list = document.createElement("li");
// list.textContent = "Milk";
// const list1 = document.createElement("li");
// list1.textContent = "Cake";
// const list3 = document.createElement("li");
// list3.textContent = "Momo";
// const list4 = document.createElement("li");
// list4.textContent = "Paneer";
// const ul = document.getElementById("listing");
// ul.append(list);// pushing element in list
// ul.append(list1);
// ul.prepend(list3);
// // list.after(list4);
// ul.children[1].after(list4);

// for example i am having the data in array and now i ahve to show that data in the form of unordered list in the UI

// const arr = ["Milk","Paneer","Tofu","Coffee","cake"];

// const ul = document.getElementById("listing");

// for(let food of arr){
//     const ele = document.createElement("li");
//     ele.textContent = food;
//     ul.append(ele);
// }

// Above process that we have , It is cubersome process since first it is creating an element and then append it in webpage 
// but this take too much and make webpage slower 
  

// so we can follow this step that first create all elements and append it 

// const arr = ["Milk","Paneer","Tofu","Coffee","cake"];
// const ul = document.getElementById("listing");
// const fragment = document.createDocumentFragment();


// for(let food of arr){
//     const ele = document.createElement("li");
//     ele.textContent = food;
//     fragment.append(ele);
// }
// ul.append(fragment);

const s1 = document.getElementById("first");
s1.remove();







