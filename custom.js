let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let nombre =document.getElementById('nombre');
let mensaje= document.getElementById('mensaje');
let calcula = document.getElementById('calcula');

calcula.addEventListener('click',imc);

function imc(){
   let peso1= parseFloat(peso.value);
   let altura1= parseFloat(altura.value);
    let resultado ='';
    resultado =(peso1 / altura1*altura1);
    mensaje.innerHTML= resultado;
    console.log(resultado)
}
    