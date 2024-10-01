const pokeImage = document.getElementById("pokemonSprite");

async function fetchData() {
  let pokeInput = document.getElementById("pokemonName").value;
  pokeInput = pokeInput.trim().toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
    );

    if (!response.ok) {
      throw new Error("Could not find resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    pokeImage.src = pokemonSprite;
    pokeImage.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
