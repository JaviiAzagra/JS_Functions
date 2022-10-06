/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
/* console.log(numbers.length); */

let promedio = 0;

function average(array) {
  for ( let i = 0; i < array.length; i++) {
    promedio += array[i]
  } return promedio / array.length;
}

console.log(average(numbers));


