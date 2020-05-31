const cardSection = document.getElementById("cards-section");
const errorSection = document.getElementById("error");
const loading = document.getElementById("spinner");
// Caso os cards não carreguem, mostraremos isso:
const placeholderCard = {
  nome: "Carta não carregada",
  tipo: "Arcano Maior",
  descricao: "Sem descrição",
  imagem: "http://via.placeholder.com/250X500",
  link: "https://www.astrolink.com.br/",
};

const chamarNovaCartaBtn = document.getElementById("chamarNovaCartaBtn");

renderizaCarta = (carta) => {
  const novaCarta = new Card(carta).render();
  cardSection.innerHTML = novaCarta;
};

// Fazer requisição neste link:
// https://github.com/reprograma/T9-JS-III/blob/sexta/04-fetch/exercicio/tarot.json
// Renderizar uma carta aleatória quando clicar no botão "Tirar outra carta"

const url =
  "https://raw.githubusercontent.com/reprograma/T9-JS-III/sexta/04-fetch/exercicio/tarot.json";

// renderizaCarta(placeholderCard);

chamarNovaCartaBtn.addEventListener("click", () => {
  fetch(url) // a url pra qual será feita a requisição
    .then((response) => {
      return response.json(); // transforma o json em objeto ou array javascript
    })
    .then((dados) => {
      // vamos processar os dados
      console.log('dados', dados)
      const numAleatorio = Math.floor(Math.random() * dados.length);

      renderizaCarta(dados[numAleatorio]);
    });
});
