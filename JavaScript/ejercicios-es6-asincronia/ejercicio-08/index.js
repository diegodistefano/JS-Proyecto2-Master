const URL = "https://thronesapi.com/api/v2/Characters";

const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

const charData = [];

const getCharacters = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    charData.push(...data)

    for (const character of charData) {
      const option = document.createElement("option");
      option.textContent = character.fullName;
      option.value = character.id;
      select.appendChild(option);
    }
  } catch (error) {
    console.error(error);
  }
};

const charactersImg = (id) => {
  try {
    const selected = charData.find((char) => char.id == id);
    img.src = selected.imageUrl;
  } catch (error) {
    console.error(error);
  }
};

select.addEventListener("change", (e) => {
  charactersImg(e.target.value);
});

getCharacters();