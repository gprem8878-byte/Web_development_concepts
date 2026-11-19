const quotes = ['Dracarys' , 'Rhoynar','firstmen ','Winter is here ','Dead are coming','A lion doesnt concern himself with opinion of sheep'];


const button = document.querySelector('button');
const tag = document.querySelector('h1');

button.addEventListener('click',()=>{
     const index = Math.floor(Math.random()*20);
    tag.textContent = quotes[index];
})