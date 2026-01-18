// Ejercicio 8
// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

console.log(findLongestWord(avengers));

// function findLongestWord(stringList) {
//   let numberChar = [];
//   let numberMax = -1;
//   let stringMax = "";
//   for (let i = 0; i < stringList.length; i++) {
//     const element = stringList[i];
//     for (let j = 0; j < element.length; j++) {
//       numberChar[i] = j;
//     }
//     if (numberChar[i] > numberMax) {
//       numberMax = numberChar[i];
//       stringMax = stringList[i];
//     }
//   }
//   return stringMax;
// }

function findLongestWord(stringList) {
    stringMax2 = "";
    for (let i = 0; i < stringList.length; i++) {
        if(stringList[i].length>stringMax2.length){
            stringMax2 = stringList[i];
        }
    }
    return stringMax2;
}
