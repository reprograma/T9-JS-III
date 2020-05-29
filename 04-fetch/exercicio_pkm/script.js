// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

const form = document.getElementById("pkmForm");
const input = document.getElementById("pkmInput");
const pkmPlaceholder = document.getElementById("pkmPlaceholder");

const chamarRequisicao = (e) => {
  e.preventDefault();
  pkmPlaceholder.innerHTML = "";
  const pkmNome = input.value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pkmNome}/`)
    .then((resposta) => {return resposta.json()}) // JSON.parse(resposta)
    .then((dadoObj) => {
      inserirPkmPagina(dadoObj)
    });
};

new XMLHttpRequest() + new Promise() = fetch()









const inserirPkmPagina = (dados) => {
  const p = document.createElement("p");
  const img = document.createElement("img");

  p.textContent = dados.species.name;
  img.setAttribute(
    "src",
    `https://pokeres.bastionbot.org/images/pokemon/${dados.id}.png`
  );

  pkmPlaceholder.appendChild(p).appendChild(img);
}

form.addEventListener("submit", (e) => chamarRequisicao(e));
