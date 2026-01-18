// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement('div');
document.body.appendChild(divVacio);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConP = document.createElement('div');
const divP = document.createElement('p');
divConP.appendChild(divP);
document.body.appendChild(divConP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const div6P = document.createElement('div');
for (let index = 0; index < 6; index++) {
    const p = document.createElement('p');
    div6P.appendChild(p);
}
document.body.appendChild(div6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const dinamico = document.createElement('p');
dinamico.textContent = 'Soy dinamico!';
document.body.appendChild(dinamico);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for (const a of apps) {
  const li = document.createElement('li');
  li.textContent = a;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll('.fn-remove-me');
for (const e of eliminar) {
  e.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const allDivs = document.querySelectorAll('div');
const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';

if (allDivs.length >= 2) {
  allDivs[1].before(pMedio);
}


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const divInsert = document.querySelectorAll('div.fn-insert-here');

for (const d of divInsert) {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  d.appendChild(p);
}