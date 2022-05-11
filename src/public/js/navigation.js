
     const $btnMenu = document.querySelector(".header__menu-btn"),
           $nav = document.querySelector(".header__nav"),
           $a=document.querySelectorAll(".header__nav a");
         ;

$btnMenu.addEventListener('click', ()=>{
     $nav.classList.toggle("toggle");
})

