const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')

const placeholderCard = {
  nome: "Carta não carregada",
  tipo: "Arcano Maior",
  descricao: "Sem descrição",
  imagem: "http://via.placeholder.com/250X500",
  link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
  const novaCarta = new Card(carta).render()
  cardSection.innerHTML = novaCarta
}

renderizaCarta(placeholderCard);