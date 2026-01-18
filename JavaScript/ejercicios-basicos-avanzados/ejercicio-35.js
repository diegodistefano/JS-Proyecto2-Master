// Ejercicio 35
// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Deadpool', power: 'regeneration' },//yo agregue este para q tome dos iguales
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];



console.log(findMutantByPower(mutants, 'regeneration'));
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'fuerza'));



function findMutantByPower(mutants, power) {
  let mutantesEncontrados = [];
  for (const m of mutants) {
    if (m.power === power) {
      mutantesEncontrados.push(m.name);
    }
  }
  if (mutantesEncontrados.length) {
    return `Mutantes encontrados con *${power}*: ${mutantesEncontrados.length}`;
  } else {
    return `No se encontraron mutantes con: *${power}*`;
  }
}