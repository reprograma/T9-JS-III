const chamarDemoBtn = document.getElementById('chamarDemo');

const chamarRequisicao = () => {
  // https://pokeapi.co/api/v2/pokemon/ditto/
  const request = new XMLHttpRequest(); // XHR
  const verbo = "GET";
  const url = "https://pokeapi.co/api/v2/pokemon/ditto/";

  request.open(verbo, url);

  request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200) {
      const dadoParseado = JSON.parse(request.response);

      const demo = document.getElementById("demo");
      demo.textContent = dadoParseado.name;
    } else {
      demo.textContent = "API sem resposta";
    }
  })

  request.send();
}

chamarDemoBtn.addEventListener('click', chamarRequisicao);
