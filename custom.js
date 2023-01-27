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
    if (imc < 16) {
		grado = "Delgadez severa.";
	} else if (imc >= 16 && imc <= 16.99) {
		grado = "Delgadez moderada.";
	} else if (imc >= 17 && imc <= 18.49) {
		grado = "Delgadez aceptable.";
	} else if (imc >= 18.5 && imc <= 24.99) {
		grado = "Normal.";
	} else if (imc >= 25 && imc <= 29.99) {
		grado = "Preobeso.";
	} else if (imc >= 30 && imc <= 34.99) {
		grado = "Obeso tipo I.";
	} else if (imc >= 35 && imc <= 39.99) {
		grado = "Obeso tipo II.";
	} else if (imc > 40 ) {
		grado = "Obeso tipo III.";
	} 
    mensaje.innerHTML= resultado;
    console.log(resultado)
}
    