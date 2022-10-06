/* Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let longest = "";

function findLongestWord(param) {
  for ( let i = 0; i < param.length; i++) {
    if (longest.length < param[i].length){
        longest = param[i];
    }
  }
  return longest;
}

console.log(findLongestWord(avengers)); 
