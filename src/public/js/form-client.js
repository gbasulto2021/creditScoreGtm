  const $form = document.getElementById("form"),
        $nombre = document.getElementById("nombre"),
        $apellidos = document.getElementById("apellidos"),
        $ci = document.getElementById("ci"),
        $ul = document.querySelectorAll('#form input[name="ul"]'),
        $experiencia = document.getElementById("experiencia"),
        $caPago = document.getElementById("capago"),
        $resFamiliar = document.getElementById("resFamiliar"),
        $otrosIng = document.getElementById("otrosIngresos"),
        $escolaridad = document.querySelectorAll('#form input[name="escolaridad"]'),
        $tasa = document.getElementById("tasa"),
        $garantia = document.querySelectorAll('#form input[name="garantia"]'),
        $isValid = document.getElementById("isValid");


  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    ci: /^\d{11}$/, // 11 numeros exactos.
    experiencia: /^\d{0,70}$/, // numero del 0 a 70
    capago: /^\d{0,100}$/, // 0 a 100 numeros.
    resFamiliar: /^\d{0,20}$/, // 0 a 20 numeros.
    otrosIngresos: /^\d{0,1000000}$/, // 0 a 1m numeros.
    tasa: /^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/ // decimales
    
  };

  const textErrors = {
    nombre: "Solo se permite letras y espacios en blanco",
    apellidos: "Solo se permite letras y espacios en blancooooooo",
    ci: "CI debe ser solo numeros y de 11 digitos",
    experiencia: "Solo numeros del 0 al 70",
    capago: "Solo numeros del 1 al 100",
    resFamiliar: "Solo numeros del 1 al 20",
    otrosIngresos: "Solo numeros",
    tasa: "Solo numeros",
    ul: "Debe seleccionar una ubicacion laboral",
    escolaridad: "Debe seleccionar nivel de escolaridad",
    garantia: "Debe seleccionar una garantia"
  }
  let fields = {
    nombre: false,
    apellidos: false,
    ci: false,
    ul: false,
    experiencia: false,
    capago: false,
    resFamiliar: false,
    otrosIngresos: false,
    escolaridad: false,
    tasa: false,
    garantia: false,
    
  };

  const validateFormAdd = (e)=>{

    switch (e.target.name) {
      case "nombre":
         validateInput(expresiones.nombre, e.target.value, "nombre")
      break;
      case "apellidos":
         validateInput(expresiones.apellidos, e.target.value, "apellidos")
      break;
      case "ci":
         validateInput(expresiones.ci, e.target.value, "ci")
      break;
      case "experiencia":
         validateInput(expresiones.experiencia, e.target.value, "experiencia")
      break;
      case "capago":
         validateInput(expresiones.capago, e.target.value, "capago")
      break;
      case "resfamiliar":
         validateInput(expresiones.resFamiliar, e.target.value, "resFamiliar")
      break;
      case "otrosIngresos":
         validateInput(expresiones.otrosIngresos, e.target.value, "otrosIngresos")
      break;
      case "tasa":
         validateInput(expresiones.tasa, e.target.value, "tasa")
      break;
 
      
    }
  }

  const validateInput = (exp,inputValue,fieldName)=>{
   let regex = new RegExp(exp);
   if(!regex.exec(inputValue) || inputValue == ""){
     fields[fieldName] =false;
     document.querySelector(`.${fieldName} .form__input-error`).textContent=textErrors[fieldName]
     document.querySelector(`.${fieldName} .form__input-error`).classList.add("activo")
   }else{
    fields[fieldName] =true;
     document.querySelector(`.${fieldName} .form__input-error`).textContent=""
     document.querySelector(`.${fieldName} .form__input-error`).classList.remove("activo") 
   }
  }



  const validateInputRadio = ()=>{

    if ($ul[0].checked || $ul[1].checked) {
      fields.ul= true;
      document.querySelector(`.ul .form__input-error`).textContent=""
      document.querySelector(`.ul .form__input-error`).classList.remove("activo") 
        } else {
          fields.ul= false;
          document.querySelector(`.ul .form__input-error`).textContent=textErrors.ul
          document.querySelector(`.ul .form__input-error`).classList.add("activo")
        
        }
    if ($escolaridad[0].checked || $escolaridad[1].checked) {
      fields.escolaridad= true;
      document.querySelector(`.escolaridad .form__input-error`).textContent=""
      document.querySelector(`.escolaridad .form__input-error`).classList.remove("activo") 
        } else {
          fields.escolaridad= false;
          document.querySelector(`.escolaridad .form__input-error`).textContent=textErrors.escolaridad
          document.querySelector(`.escolaridad .form__input-error`).classList.add("activo")
        
        }
    if ($garantia[0].checked || $garantia[1].checked) {
      fields.garantia= true;
      document.querySelector(`.garantia .form__input-error`).textContent=""
      document.querySelector(`.garantia .form__input-error`).classList.remove("activo") 
        } else {
          fields.garantia= false;
          document.querySelector(`.garantia .form__input-error`).textContent=textErrors.garantia
          document.querySelector(`.garantia .form__input-error`).classList.add("activo")
        
        }

  }

  document.addEventListener("keyup", (e)=>{
    if(e.target.matches('input[type="text"]') || e.target.matches('input[type="number"]')){
       validateFormAdd(e)
    } 

  });

  document.addEventListener("click", (e)=>{
    if (e.target.matches("input[type='radio']")) {
      validateInputRadio()
    }
  })

  $form.addEventListener("submit", (e)=>{
    //  e.preventDefault();
     validateInputRadio()
    if (fields.nombre &&  fields.apellidos && fields.ci && fields.ul && fields.experiencia && fields.capago && fields.resFamiliar && fields.otrosIngresos && fields.escolaridad && fields.tasa && fields.garantia) {
      $isValid.value = "Valid"
    }else{
      $isValid.value = ""
    }
       
  })



