const menu = document.querySelector('.menu');
const navList = document.querySelector('nav ul');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    navList.classList.toggle('active');
})
