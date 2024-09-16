const btn = document.querySelector('.menu_bth');
const nav = document.querySelector('.nav')
btn.addEventListener("click", ()=>{
    nav.classList.toggle("menu-open");
});