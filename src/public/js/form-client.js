

const userCredentials = {
  email: "gbasulto2015@gmail.com",
  pass: "12345"
}

const d = document,
  $formLogin = d.querySelector(".login"),
  $user = d.querySelector(".email"),
  $pass = d.querySelector(".pass"),



  $formulario = d.getElementById("formulario"),
  $nombre = d.querySelector(".nombre input"),
  $apellidos = d.querySelector(".apellidos input"),
  $ci = d.querySelector(".ci input"),
  $inputsText = d.querySelectorAll("#formulario input[type ='text']"),
  $inputsNumbers = d.querySelectorAll("#formulario input[type ='number']"),
  $inputsUl = d.querySelectorAll('#formulario input[name="UL"]'),
  $inputsCargaF = d.querySelectorAll('#formulario input[name="cargaF"]'),
  $inputsEscolaridad = d.querySelectorAll(
    '#formulario input[name="escolaridad"]'
  ),
  $inputsGarantia = d.querySelectorAll('#formulario input[name="garantia"]'),
  $experiencia = d.querySelector("#experiencia"),
  $caPago = d.querySelector("#capacpag"),
  $otrosIng = d.querySelector("#otrosIng"),
  $b = -1.042,
  $c = 0.548,
  $e = -0.297,
  $g = -0.237,
  $i = 0.718,
  $k = -0.002,
  $m = 0.508,
  $o = -0.689,
  $q = 0.803,
  $tasa = d.querySelector("#tasa");

  const loginValidation = ()=>{
    if($user.value !== userCredentials.email && $user.value !== userCredentials.pass ){
         d.querySelector(".login > p").textContent = "* Usuario o Contraseña incorrectos";
         d.querySelector(".login > p").classList.add("input-error-activo");
        }else{
          d.querySelector(".login > p").classList.remove("input-error-activo")
        
     
    }
  }
  

  $formLogin.addEventListener("submit", (e)=>{
    e.preventDefault();
    loginValidation();
    $formLogin.reset();
   
  })




var initialCamposvalues = {
  nombre: false,
  apellidos: false,
  ci: false,
  ubicacion: false,
  experiencia: false,
  caPago: false,
  resFamiliar: false,
  otrosIngresos: false,
  escolaridad: false,
  tasa: false,
  garantia: false,
};

let campos = initialCamposvalues;
let dataToDb = {
nombre:"",
apellidos:"",
ci:"",
ul:"",
experiencia:"",
capago:"",
resfamiliar:"",
otrosIngresos:"",
escolaridad:"",
tasa:"",
garantia:"",
total:""};

let ubicacion, cargaF, escolaridad, garantia;

for (let i = 0; i < $inputsUl.length; i++) {
  $inputsUl[i].addEventListener("change", () => {
    d.querySelector(".ubicacion").classList.add("campo-correcto");
    d.querySelector(".ubicacion").classList.remove("campo-incorrecto");
    d.querySelector(".ubicacion .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
    ubicacion = $inputsUl[i].value;
    dataToDb.ul = $inputsUl[i].id   
    
 
  });
}
for (let i = 0; i < $inputsCargaF.length; i++) {
  $inputsCargaF[i].addEventListener("change", () => {
    d.querySelector(".resFamiliar").classList.add("campo-correcto");
    d.querySelector(".resFamiliar").classList.remove("campo-incorrecto");
    d.querySelector(".resFamiliar .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
    cargaF = $inputsCargaF[i].value;
   
    dataToDb.resfamiliar = $inputsCargaF[i].id   
    
   
  });
}
for (let i = 0; i < $inputsEscolaridad.length; i++) {
  $inputsEscolaridad[i].addEventListener("change", () => {
    d.querySelector(".escolaridad").classList.add("campo-correcto");
    d.querySelector(".escolaridad").classList.remove("campo-incorrecto");
    d.querySelector(".escolaridad .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
    escolaridad = $inputsEscolaridad[i].value
    dataToDb.escolaridad = $inputsEscolaridad[i].id   
    
    
  });
}
for (let i = 0; i < $inputsGarantia.length; i++) {
  $inputsGarantia[i].addEventListener("change", () => {
    d.querySelector(".garantia").classList.add("campo-correcto");
    d.querySelector(".garantia").classList.remove("campo-incorrecto");
    d.querySelector(".garantia .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
    garantia = $inputsGarantia[i].value;
    dataToDb.garantia = $inputsGarantia[i].id
    
  });
}

$inputsNumbers.forEach((input)=>{
input.addEventListener("keyup", ()=>{
  input.parentElement.nextElementSibling.classList.remove(
    "formulario__input-error-activo"
  );
})
})

$inputsText.forEach((input)=>{
  input.addEventListener("keyup", ()=>{
    input.parentElement.nextElementSibling.classList.remove(
      "formulario__input-error-activo"
    );
  })
  })



const validarCampoRadio = () => {
  if ($inputsUl[0].checked || $inputsUl[1].checked) {
    campos.ubicacion = true;
  } else {
    // d.querySelector(".ubicacion").classList.add("campo-incorrecto");
    d.querySelector(".ubicacion .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($inputsCargaF[0].checked || $inputsCargaF[1].checked) {
    campos.resFamiliar = true;
  } else {
    // d.querySelector(".resFamiliar").classList.add("campo-incorrecto");
    d.querySelector(".resFamiliar .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($inputsEscolaridad[0].checked || $inputsEscolaridad[1].checked) {
    campos.escolaridad = true;
  } else {
    // d.querySelector(".escolaridad").classList.add("campo-incorrecto");
    d.querySelector(".escolaridad .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($inputsGarantia[0].checked || $inputsGarantia[1].checked) {
    campos.garantia = true;
  } else {
    // d.querySelector(".garantia").classList.add("campo-incorrecto");
    d.querySelector(".garantia .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
};

const validarCampoNumbers = () => {
  if ($experiencia.value !== "" && $experiencia.value !== null) {
    campos.experiencia = true;
  } else {
    // d.querySelector(".experiencia").classList.add("campo-incorrecto");
    d.querySelector(".experiencia .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($caPago.value !== "" && $caPago.value !== null) {
    campos.caPago = true;
  } else {
    // d.querySelector(".capago").classList.add("campo-incorrecto");
    d.querySelector(".capago .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($otrosIng.value !== "" && $otrosIng.value !== null) {
    campos.otrosIngresos = true;
  } else {
    // d.querySelector(".otrosingresos").classList.add("campo-incorrecto");
    d.querySelector(".otrosingresos .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($tasa.value !== "" && $tasa.value !== null) {
    campos.tasa = true;
  } else {
    // d.querySelector(".tasa").classList.add("campo-incorrecto");
    d.querySelector(".tasa .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
};

const validarCampoText = ()=>{

  $inputsText.forEach((input)=>{
    if (input.value !== undefined && input.value !== "" && input.value !== null) {
         
         campos[input.name] = true;
      } else {
        d.querySelector(`.${input.name} .formulario__input-error`).classList.add(
          "formulario__input-error-activo"
        );
       }
  })
  
}



// $formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validarCampoRadio();
//   validarCampoNumbers();
//   validarCampoText();

//   if (
//     campos.nombre &&
//     campos.apellidos &&
//     campos.ci &&
//     campos.ubicacion &&
//     campos.resFamiliar &&
//     campos.escolaridad &&
//     campos.garantia &&
//     campos.experiencia &&
//     campos.caPago &&
//     campos.otrosIngresos &&
//     campos.tasa
//   ) {

//     let result =
//       $b +
//       $c * ubicacion -
//       $e * $experiencia.value -
//       $g * $caPago.value +
//       $i * cargaF -
//       $k * $otrosIng.value +
//       $m * escolaridad -
//       $o * $tasa.value +
//       $q * garantia;
//     let total = 1 / Math.pow(result, 10) + 1;

//     dataToDb.nombre = $nombre.value;
//     dataToDb.apellidos = $apellidos.value;
//     dataToDb.ci = $ci.value;
//     dataToDb.experiencia = $experiencia.value;
//     dataToDb.capago = $caPago.value;
//     dataToDb.otrosIngresos = $otrosIng.value;
//     dataToDb.tasa = $tasa.value;
//     dataToDb.total = total;
     
//     for(let key in dataToDb){
      
//      d.querySelector(`.resultado__${key}`).nextElementSibling.textContent = dataToDb[key];
//     }
    
//     console.log(dataToDb);

//     campos = initialCamposvalues;
//     d.querySelector(".probabilidad-impago > p").textContent = "";
//     $formulario.reset();
    
//   } else {
   
//     d.querySelector(".probabilidad-impago > p").textContent = "Sin resultados";
//     return false;
//   }
// });


// let option = {
//   nombre:"George",
// apellidos:"Basulto",
// ci:"81031224907",
// ul:"Ul-Contornos",
// experiencia:"5",
// capago:"5",
// resfamiliar:"0-2",
// otrosIngresos:"1500",
// escolaridad:"nivel-superior",
// tasa:"7",
// garantia:"garantia-reales",
// total:""
// }


