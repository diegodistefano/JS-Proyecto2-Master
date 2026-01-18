// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const body = document.querySelector('body');
const header = document.createElement('header');
header.textContent = 'Albums';
body.appendChild(header);

const main = document.createElement('main');
const ul = document.createElement('ul');

for (const a of albums) {
  const li = document.createElement('li');
  li.textContent = a;
  ul.appendChild(li);
}

body.appendChild(main);
main.appendChild(ul);

//aNTONIO, LE AGREGUE UN CSS PARA QUE TENGA UN POCO MAS DE EXPERIENCIA WEB