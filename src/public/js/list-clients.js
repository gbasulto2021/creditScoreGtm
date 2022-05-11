const $inputSearch = document.getElementById("search"),
      $btnSearch = document.querySelector(".btn-search");

const exp = /^\d{11}$/;


const validateInput = (exp,inputValue)=>{
    let regex = new RegExp(exp);
    if(!regex.exec(inputValue) || inputValue == ""){
     document.querySelector(".search__input-error").classList.add("activo")
    }else{
     document.querySelector(".search__input-error").classList.remove("activo") 
    }
   }
   
  document.addEventListener("keyup", (e)=>{
    if(e.target.matches("input[type='search']")){

      validateInput(exp,e.target.value)
    }
  });

