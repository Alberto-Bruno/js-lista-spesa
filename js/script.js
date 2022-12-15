console.log('JS OK');

/*
- Lista della spesa, 
stampare in pagina gli elementi della lista individualmente 
con un ciclo while.
*/

// Prendo Elementi
const resultElement = document.getElementById('result');

const shoppingList = [
   'farina',
   'uova',
   'burro',
   'latte'
];

let items = '<ul>';

// Valorizzo gli elemeti della spesa
let i = 0;
while (i < shoppingList.length) {
    items += `<li>${shoppingList[i]}</li>`;
    i++;
}

items += '</ul>';

resultElement.innerHTML = items;
