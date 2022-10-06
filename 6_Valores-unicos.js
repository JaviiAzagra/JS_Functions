/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. 
Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

let words = [];

function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        if (!words.includes(array[i])) {
            words.push(array[i]);
        }
    } return words;
}

removeDuplicates(duplicates);

console.log(words);