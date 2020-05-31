const url =
  "https://pokeapi.co/api/v2/pokemon/ditto";

const mostrarPkm = async () => {
  const response = await fetch(url).then(data => data.json());

  console.log(response);
}

mostrarPkm();
