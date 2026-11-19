const { createElement } = require("react");

const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value.trim();

    if(text == "")
        return;

    const parent = document.createElement('div');

    parent.style.marginTop = '20px';
    const task = document.createElement('span');
    task.textContent = text;
    

    task.style.marginRight = "20px";

    const deletebutton = createElement('button');
    deletebutton.textContent = 'delete';
    deletebutton.style.width = '50px';

    const donebutton = createElement('button');
    donebutton.textContent = "Done";
    donebutton.style.marginRight = "20px";
    donebutton.style.width = '50px';

    parent.append(task,donebutton,deletebutton);
 
    allTask.append(parent);

    deletebutton.addEventListener('click',()=>{
        parent.remove();
    })

    donebutton.addEventListener('click',()=>{
        task.style.textDecoration = 'line-through';
        task.style.color = 'grey';

    })

    form.reset();
})