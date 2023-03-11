//EXERCISE 1

// let edad = prompt("Ingresar edad"); 

// if (edad >= 18) {
//     document.write ("Felicidades ustes es un niño grande, ya puede conducir, saludos.")
// } else {
//     alert ("pendejo, tomate el palo de acá, menorsito, te descubri.")
// };

//EXERCISE 2

// do {
// 	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
// 	var nota = prompt("Introduce tu nota");
// 	//SI SE INTRODUJO UN NÚMERO
// 	if (Number(nota) == nota) {
// 		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
// 		if (nota > 0 && nota <= 10) {
// 			if (nota < 3) {
// 				alert("Muy deficiente");
// 			}
// 			else if (nota < 5) {
// 				alert("Insuficiete");
// 			}
// 			else if (nota < 6) {
// 				alert("Suficiente");
// 			}
// 			else if (nota < 7) {
// 				alert("Bien");
// 			}
// 			else if (nota < 9) {
// 				alert("Notable"); 
// 			}
// 			else if (nota >= 9) {
// 				alert("Sobresaliente");
// 			}
// 		}
// 		//SI LA NOTA NO ES ENTRE 0 Y 10
// 		else {
// 			alert("Nota erronea");
// 		}
// 	}
// 	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
// 	else {
// 		if (nota != undefined) {	
// 			alert("Introduce un numero valido");
// 		}
// 	}
// } while (nota != undefined);

//EXERCISE 3
// let resultado = ""

// do {
// let cadenas = prompt("ingrese texto")

// if (resultado == "") {
//  resultado = resultado + cadenas;
// } 
// else {
//     resultado = resultado +"-"+ cadenas;
// } 

// } while (confirm("queres seguir tonteando?"));

// document.write (resultado);

//EXERCISE 4
// SE DECLARA ESTA VARIABLE IGUAL A 0 YA QUE HAY QUE DARLE UN INICIO EN ALGUN NUMERO 
// let resultado = 0

// do {
// let numero = prompt("ingrese numeros")

// if (Number(numero) == numero) {
//     numero = Number(numero);
//     resultado = resultado + numero;
// } 
// else {
//     if (numero != undefined)
//     alert ("no flaco eso no es un numero")
// } 

// } while (confirm("queres seguir tonteando?"));

// document.write (resultado);

// EXERCISE 5

// let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// let numero = prompt("Introduce tu número de DNI (sin la letra)");
// let letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
// letra = letra.toUpperCase();

// if(numero < 0 || numero > 99999999) {
//   alert("El número proporcionado no es válido");
// }
// else {
//   let letraCalculada = letras[numero % 23];
//   if(letraCalculada != letra) {
//     alert("La letra o el número proporcionados no son correctos");
//   }
//   else {
//     alert("El número de DNI y su letra son correctos");
//   }
// }
    