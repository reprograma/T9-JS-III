// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior


// TRANSFORMAR A REQUISIÇÃO XMLHTTREQUEST EM FETCH
// 14h30

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

const chamarRequisicao = (e) => {
  e.preventDefault();
  pkmPlaceholder.innerHTML = "";
  const pkmNome = input.value.toLowerCase();
  const request = new XMLHttpRequest();
  
  request.open("GET", `https://pokeapi.co/api/v2/pokemon/${pkmNome}/`, true);
  
  request.addEventListener("readystatechange", function () {
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.response);
      const p = document.createElement('p');
      const img = document.createElement('img');

      p.textContent = data.species.name;
      img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`)

      pkmPlaceholder.appendChild(p).appendChild(img);
    }
  })
  
  request.send();
}

form.addEventListener('submit', (e) => chamarRequisicao(e));
