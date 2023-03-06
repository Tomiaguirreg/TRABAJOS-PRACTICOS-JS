
// let es mayormente utilizado cuando se requiere cambiar el valor de su variable.
// const para lo que se me cante. 


// EXERCISE 1

// alert ("un mensaje");

//EXERCISE 2

// document.write ("hello world"); 

//EXERCISE 3

// document.write ("<br>",3+5);

//EXERCISE 4

// let userName = prompt("Escribe tu nombre");
// document.write("Hola "+userName);

// EXERCISE 5 

// let unNumero = prompt("Escribe un numero");
// let otroNumero = prompt ("Escribe otro numero");

// document.write (parseInt(unNumero) + parseInt(otroNumero));

//EXERCISE 6 

// let unNumero = prompt("Escribe un numero");
// let otroNumero = prompt ("Escribe otro numero");

// if (unNumero > otroNumero) {
//     document.write (unNumero)
// } else {
//     document.write (otroNumero)
// };

//EXERCISE 7

// let n1 = prompt ("Escribe un numero");
// let n2 = prompt ("Escribe un numero");
// let n3 = prompt ("Escribe un numero");


//  if (n1> n2 && n1 > n3) {

//     document.write (n1);

//  } else if (n2 > n3) {
    
//     document.write (n2);
    
//  } else {
//     document.write (n3);
//  };


//EXERCISE 8

// let numero = prompt ("Escriba un numero");

// if (numero % 2 === 0) {
//    document.write ("es divisible en 2");
// } else {
//     document.write ("no es divisible en 2");
// };


//EXERCISE 9 

// let frase = prompt("escribe una frase");

// for (let index = 0; index < frase.length; index++) {
//     const letra = frase.charAt(index)

//     if (
//         letra === "a" ||
//         letra === "e" ||
//         letra === "i" ||
//         letra === "o" ||
//         letra === "u"
//     ) {
//         document.write(letra);     
//     }
// }; 

// EXERCISE 10 & 11

// let numero = prompt("escribe un numerito");

// if (
//     numero % 2 === 0 ||
//     numero % 3 === 0 || 
//     numero % 5 === 0 ||
//     numero % 7 === 0 
// ) {
//   if (numero % 2 === 0){
//     document.write("ES DIVISIBLE POR 2, YOU ARE A GENIUS")
//   };
//   if (numero % 3 === 0){
//     document.write("ES DIVISIBLE POR 3, YOU ARE A GENIUS")
//   };
//   if (numero % 5 === 0){
//     document.write("ES DIVISIBLE POR 5, YOU ARE A GENIUS")
//   };
//   if (numero % 7 === 0){
//     document.write("ES DIVISIBLE POR 7, YOU ARE A GENIUS")
//   };
  
// } else document.write ("NO PAPI, NO ES DIVISIBLE");

// OTRA FORMA
// const numero = parseInt(prompt('ingrese un numero'));

// for (let i = 1; i <= 7; i++) {
//   if (i !== 1 && i !== 4 && i !== 6) {
//     if (numero % i === 0) {
//       document.write('el numero ' + numero + ' es divisible por ' + i);
//     }
//   } 
// };