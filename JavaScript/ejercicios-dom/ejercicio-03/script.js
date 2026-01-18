// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
for (const c of countries){
    const liCountries = document.createElement('li');
    liCountries.textContent = c;
    ulCountries.appendChild(liCountries);
}

document.body.appendChild(ulCountries);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector('.fn-remove-me')?.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrint = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
for (const c of cars){
    const liCars = document.createElement('li');
    liCars.textContent = c;
    ulCars.appendChild(liCars);
}
divPrint.appendChild(ulCars);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesArray = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const divCountriesArray = document.createElement('div');
divCountriesArray.className = 'div-countries';
document.body.appendChild(divCountriesArray);

for(const c of countriesArray){

    const countryDiv = document.createElement('div');
    countryDiv.className = 'country';
    
    const h4Countrie = document.createElement('h4');
    h4Countrie.textContent = c.title;
    
    const imgCountrie = document.createElement('img');
    imgCountrie.src = c.imgUrl;

    //****ejercicio 1.6 */
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';

    btnEliminar.addEventListener('click', ()=>{ countryDiv.remove();
    })

    countryDiv.appendChild(h4Countrie);
    countryDiv.appendChild(imgCountrie);
    countryDiv.appendChild(btnEliminar);

    divCountriesArray.appendChild(countryDiv);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const btnEliminaUltimo = document.createElement('button');
btnEliminaUltimo.textContent = 'Elimina el ultimo';

btnEliminaUltimo.addEventListener('click', ()=>{
    const lastCountry = divCountriesArray.lastElementChild;
    lastCountry?.remove();
})
document.body.appendChild(btnEliminaUltimo);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html

//*********LO ARMÉ DENTRO DEL EJERCICIO ANTERIOR********