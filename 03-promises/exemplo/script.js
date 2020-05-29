const form = document.getElementById("pkmForm");
const input = document.getElementById("pkmInput");
const pkmPlaceholder = document.getElementById("pkmPlaceholder");

const chamarRequisicao = (e) => {
  e.preventDefault();
  pkmPlaceholder.innerHTML = "";
  const pkmNome = input.value.toLowerCase();

  executarRequisicao(`https://pokeapi.co/api/v2/pokemon/${pkmNome}/`)
    .then((data) => {
      console.log("data", data);
      return JSON.parse(data);
    })
    .then((dadoParseado) => {
      const p = document.createElement("p");
      const img = document.createElement("img");

      p.textContent = dadoParseado.species.name;
      img.setAttribute(
        "src",
        `https://pokeres.bastionbot.org/images/pokemon/${dadoParseado.id}.png`
      );

      pkmPlaceholder.appendChild(p).appendChild(img);
    })
    .catch((err) => {
      console.log("deu ruim");
    });
};

const executarRequisicao = (url) => {
  const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.addEventListener("readystatechange", function () {
      if (request.readyState == 4 && request.status == 200) {
        resolve(request.response);
      }
    });

    request.send();
  });

  return promise;
};

form.addEventListener("submit", (e) => chamarRequisicao(e));
