let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let nombre =document.getElementById('name');
let mensaje= document.getElementById('mensaje');
let calcula = document.getElementById('calcula');

calcula.addEventListener('click',imc);

function imc(){
	let identidad = nombre.value;
   let peso1= parseFloat(peso.value);
   let altura1= parseFloat(altura.value);
	let imc = peso1 /Math.pow(altura1,2);
	let grado = Math.round(imc * 100) / 100;
    let resultado ="";
	 //grado =(peso1 / altura1*altura1);
     if (grado < 16) {
		resultado =  " tu imc es de " + grado + " indica Delgadez severa.";
	 } else if (imc >= 16 && imc <= 16.99) {
		resultado = " tu imc es de " + grado +  " Delgadez moderada.";
	 } else if (imc >= 17 && imc <= 18.49) {
	 	resultado =  " tu imc es de " + grado + " Delgadez aceptable.";
	} else if (imc >= 18.5 && imc <= 24.99) {
	 	resultado =" tu imc es de " + grado +  " Normal.";
	 } else if (imc >= 25 && imc <= 29.99) {
		resultado = " tu imc es de " + grado + " Preobeso.";
	 } else if (imc >= 30 && imc <= 34.99) {
		resultado = " tu imc es de " + grado + " Obeso tipo I.";
	 } else if (imc >= 35 && imc <= 39.99) {
		resultado = " tu imc es de " + grado + " Obeso tipo II.";
	 } else if (imc > 40 ) {
		resultado = " tu imc es de " + grado + " Obeso tipo III.";
	 } 
	
    mensaje.innerHTML= identidad + resultado;
    console.log(grado);
}
    