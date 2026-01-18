// Ejercicio 4
// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages18 = ages.filter((age) => age > 18);

console.log(ages18);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter((age) => age % 2 === 0);

console.log(pares);

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolPlayers = streamers.filter(
  (player) => player.gameMorePlayed === "League of Legends"
);

console.log(lolPlayers);

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

const uPlayers = streamers.filter((player) => player.name.includes("u"));

console.log(uPlayers);

// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

const lolPlayers35 = streamers
  .filter((player) => player.gameMorePlayed.includes("Legends"))
  .map((player) => {
    if (player.age > 35) {
      return { ...player, gameMorePlayed: player.gameMorePlayed.toUpperCase() };
    }
    return player;
  });

console.log(lolPlayers35);

//EL 4.5 ME MATÓ. NECESITÉ DE CHATGPT PARA ENTENDERLO. PORQUE SOLO CON .FILTER NO ME PERMITIA.
