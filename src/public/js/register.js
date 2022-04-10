const $name = document.getElementById("name");
const $pass = document.getElementById("pass");
const $email = document.getElementById("email");


async function addUser () {
    try {
        let options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
              name: $name.value,
              email: $email.value,
              pass: $pass.value
            })
          }
        let response = await  fetch("http://localhost:5500/register", options)
        let data = await JSON.parse(response)
        console.log(data); 
    } catch (error) {
        console.log(error);
    }
   
   
}

document.querySelector(".form-register").addEventListener('submit', (e)=>{
    e.preventDefault();
    addUser();
    
})