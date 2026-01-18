// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton = document.querySelector('.showme')


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const textoH1 = document.querySelector('#pillado')

// 1.3 Usa querySelector para mostrar por consola todos los p

const parrafos = document.querySelectorAll('p');

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// 	la clase.pokemon

const pokemons = document.querySelectorAll('.pokemon')

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".

const personajes = document.querySelectorAll('[data-function="testMe"]')

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

const personaje3 = personajes[2];

console.log(boton);
console.log(textoH1);
console.log(parrafos);
console.log(pokemons);
console.log(personajes);
console.log(personaje3);
