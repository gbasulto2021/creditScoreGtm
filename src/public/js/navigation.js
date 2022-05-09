
     const $btnMenu = document.querySelector(".header__menu-btn"),
           $nav = document.querySelector(".header__nav");

$btnMenu.addEventListener('click', ()=>{
     $nav.classList.toggle("toggle");
})