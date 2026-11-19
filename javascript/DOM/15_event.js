// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Struke is coming soon";
// }

// const ele = document.getElementById("first");
// ele.onclick = function handleClick(){
//     ele.textContent = "Strike is coming soon";
// }

// ele.onclick = function handleClick(){
//     ele.textContent = "I am the best";
// }

// Now we are not using onclick event because it overwrites the previous one (if we want to perform to events together)

// best way is to use eventListener

// const ele = document.getElementById("first");
// ele.addEventListener('click',()=>{
//     ele.textContent = "strike is coming soon";
// })

// ele.addEventListener('click',()=>{
//     ele.style.backgroundColor = "pink";
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
//     child1.style.backgroundColor = "pink";
// })

// if we have to add event to every div container so we use its parent 

// const parent = document.getElementById("parent");

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//     child.textContent = "I am clicked";
//     child.style.backgroundColor = "pink";
// }
//     )   // e.target.textContent = "I am Clicked"
// }

// Bubbling

// const grandparent = document.getElementById("grandparent");

// grandparent.addEventListener('click',(e)=>{
//     console.log(e);
//     e.stopPropagation();
//     console.log("grandparent is clicked");
// },true)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//     console.log("parent is clicked");
// },true)

// const child = document.getElementById("children");
// child.addEventListener('click',()=>{
//     console.log("child is clicked");
// },true)    

// capture phase (true or false value) , target phase , bubble phase 

// to remove any event use function like 

function handler(e){
    e.target.textContent = "I am clicked";
    parent.removeEventListener('click',handler);
}

parent.addEventListener('click',handler)



