
// Ejercicio 12
// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

// Pista: puedes generar un nuevo array y devolverlo.

// Puedes usar este array para probar tu función:

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

console.log(removeDuplicates(duplicates));


// function removeDuplicates(list) {  
//     const newList = [];
//     for (const l of list){
//         if(newList.indexOf(l)==-1){
//             newList.push(l);
//         }
//     }
//     return newList;
// }



function removeDuplicates(list) {  
    const newList = [];
    for (const l of list){
        if(!newList.includes(l)){
            newList.push(l);
        }
    }
    return newList;
}

//bueno, funciona de ambas formas