//Ejercicio 1// 


/*
let edad = prompt("Ingrese su edad: ");

if (edad < 18) {
  alert("Eres menor de edad.");
} else {
  alert("Eres mayor de edad."); */


//Ejercicio 2// 


/*
let nota1 = prompt("Ingresa la primera calificación: ");
let nota2 = prompt("Ingresa la segunda calificación: ");
let nota3 = prompt("Ingresa la tercera calificación: ");

if (nota1 < 1 || nota1 > 10) {

  alert("La primera nota es inválida.");
} else if (nota2 < 1 || nota2 > 10) {

  alert("La segunda nota es inválida.");
} else if (nota3 < 1 || nota3 > 10) {

  alert("La tercera nota es inválida.");
} else {

  let promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio > 6) {

    alert("Aprobado con un promedio de " + promedio + ".");
  } else {

    alert("Reprobado con un promedio de " + promedio + ".");
  }
} */


//Ejercicio 3//


/*
let a = prompt("Ingresa el primer número: ");
let b = prompt("Ingresa el segundo número: ");

a = parseInt(a);
b = parseInt(b);

if (a > b) {

  alert("a es mayor que b.");
} else if (a < b) {

  alert("a es menor que b.");
} else {

  alert("a es igual que b.");
} */


//Ejercicio 4//


/*
let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(prompt("Ingresa un número: "));
}

numeros.sort((a, b) => a - b);

for (let numero of numeros) {
  alert(numero);
}
*/


//Ejercicio 5//


/* let peso = prompt("Ingresa tu peso: ");


peso = parseInt(peso);

if (peso <= 40) {

  alert("Persona baja de peso.");
} else if (peso >= 41 && peso <= 70) {

  alert("Persona con peso promedio.");
} else {
  alert("Persona con sobrepeso.");
}
*/


//Ejercicio 6//


/*
let dia = prompt("Ingresa un número entre 1 y 7: ");

dia = parseInt(dia);

if (dia < 1 || dia > 7) {
 
  alert("Escribiste un número fuera del rango. Escribe un número entre 1 y 7.");
} else {

  switch (dia) {
    case 1:
      alert("Día 1: lunes");
      break;
    case 2:
      alert("Día 2: martes");
      break;
    case 3:
      alert("Día 3: miércoles");
      break;
    case 4:
      alert("Día 4: jueves");
      break;
    case 5:
      alert("Día 5: viernes");
      break;
    case 6:
      alert("Día 6: sábado");
      break;
    case 7:
      alert("Día 7: domingo");
      break;
  }
} */


//Ejercicio 7//


/* 
let compra = prompt("Ingresa el valor de tu compra: ");

compra = parseInt(compra);

if (compra >= 1000) {

  descuento = 0.2 * compra;
} else {

  descuento = 0.05 * compra;
}

total = compra - descuento;

alert("El total a pagar es de " + total + " pesos.");
*/


//Ejercicio 8//


/*
let horasTrabajadas = prompt("Ingresa las horas trabajadas: ");

horasTrabajadas = parseInt(horasTrabajadas);

if (horasTrabajadas <= 40) {

  salario = horasTrabajadas * 16000;
} else {

  salario = 40 * 16000 + (horasTrabajadas - 40) * 20000;
}

alert("El salario semanal es de " + salario + " pesos.");
*/


//Ejercicio 9//


/* 
let name1 = prompt("Ingresa el nombre de la primera persona: ");
let edad1 = prompt("Ingresa la edad de la primera persona: ");
let name2 = prompt("Ingresa el nombre de la segunda persona: ");
let edad2 = prompt("Ingresa la edad de la segunda persona: ");

edad1 = parseInt(edad1);
edad2 = parseInt(edad2);

if (edad1 > edad2) {

  alert("La persona con más edad es " + name1 + " con " + edad1 + " años.");
} else {

  alert("La persona con más edad es " + name2 + " con " + edad2 + " años.");
}
*/


//Ejercicio 10//


/*
let precio = prompt("Ingresa el precio de la camisa: ");
let cantidad = prompt("Ingresa la cantidad de camisas compradas: ");

precio = parseInt(precio);

totalSinDescuento = cantidad * precio;

if (cantidad >= 3) {

  descuento = 0.2 * totalSinDescuento;
} else {

  descuento = 0.1 * totalSinDescuento;
}

total = totalSinDescuento - descuento;

alert("El total a pagar es de " + total + " pesos.");
*/


//Ejercicio 11//


/*
let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

num1 = parseInt(num1);
num2 = parseInt(num2);

if (num1 == num2) {

  alert("Los números son iguales y su producto es " + num1 * num2);
} else if (num1 > num2) {

    alert("El primer número es mayor y su diferencia es " + num1 - num2);
} else {

    alert("El segundo número es mayor y su suma es " + num1 + num2);
} */


//Ejercicio 12//


/*
let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");
let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicación, división): ");

numero1 = parseInt(num1);
numero2 = parseInt(num2);

switch (operacion) {
  case "suma":

  result = numero1 + numero2;
    break;
  case "resta":

    result = numero1 - numero2;
    break;
} */