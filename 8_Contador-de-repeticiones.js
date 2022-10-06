/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

let nombre = []

function repeatCounter(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] in nombre) {
            nombre[array[i]]++;
        } else {
            nombre[array[i]] = 1;
        }
    } return nombre;
}

repeatCounter(counterWords)

console.log(nombre);

