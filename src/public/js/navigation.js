const d = document,
     $btnMenu = d.querySelector(".header__menu-btn"),
     $nav = d.querySelector(".header__nav");

$btnMenu.addEventListener('click', ()=>{
     $nav.classList.toggle("toggle");
})