// Ejercicio 10
// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];

console.log(average(numbers));

function average(numberList) {
  let suma = numberList.reduce((acumulador, numero) => {
    return acumulador + numero;
  });
  let promedio = suma / numberList.length;
  return promedio;
}
