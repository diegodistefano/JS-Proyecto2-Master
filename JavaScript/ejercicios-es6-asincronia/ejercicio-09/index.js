const img = document.querySelector(".random-image");

const idRandom = Math.floor(Math.random() * 151) + 1;

const getPokemons = async () => {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${idRandom}`;
    const res = await fetch(URL);
    const data = await res.json();

    img.src = data.sprites.other.dream_world.front_default;
  } catch (error) {
    console.log(error);
  }
};

getPokemons();

//Tuve q cumplir con los requisitos basicos, sino, no llegaba a tiempo.
