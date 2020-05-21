const form = document.getElementById("pkmForm");
const input = document.getElementById("pkmInput");
const pkmPlaceholder = document.getElementById("pkmPlaceholder");

const chamarRequisicao = (e) => {
  e.preventDefault();
  pkmPlaceholder.innerHTML = "";
  const pkmNome = input.value.toLowerCase();

  executarRequisicao(`https://pokeapi.co/api/v2/pokemon/${pkmNome}/`)
    .then((data) => {
      const parsedData = JSON.parse(data);
      const p = document.createElement("p");
      const img = document.createElement("img");

      p.textContent = parsedData.species.name;
      img.setAttribute(
        "src",
        `https://pokeres.bastionbot.org/images/pokemon/${parsedData.id}.png`
      );

      pkmPlaceholder.appendChild(p).appendChild(img);
    })
    .catch((err) => console.log("erro: ", err));
};

const executarRequisicao = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.open("GET", url);
    
    req.onreadystatechange = () => {
      if (req.readyState == 4 && req.status == 200) {
        resolve(req.response);
      } else {
        reject(req.status + " " + req.statusText);
      }
    };

    req.onerror = () => {
      reject("Erro de conexão");
    };

    req.send();
  });
};

form.addEventListener("submit", (e) => chamarRequisicao(e));
