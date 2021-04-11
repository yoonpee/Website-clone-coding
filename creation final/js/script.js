const btn = document.querySelector('.toggle');
const menu = document.querySelector('.nav');


btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
})