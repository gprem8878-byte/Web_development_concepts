const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    const circleName = document.createElement('div');
    circleName.classList.add('circle');
    circleName.textContent = 'Hi';
    const color = ['red','yellow','blue','green','orange'];
    circleName.style.backgroundColor = color[Math.floor(Math.random()*6)];

    circleName.style.top = `${e.clientY-25}px`;
    circleName.style.left = `${e.clientX-25}px`;

    body.append(circleName);
    setTimeout(()=>{
        circleName.remove();
    },5000);
})