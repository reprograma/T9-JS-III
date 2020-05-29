const chamarDemoBtn = document.getElementById('chamarDemo');

const chamarRequisicao = () => {
  const request = new XMLHttpRequest();
  
  request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto/", true);
  
  request.addEventListener("readystatechange", function () {
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.response);
      document.getElementById("demo").innerHTML = data.species.name;
    }
  })
  
  request.send();
}

chamarDemoBtn.addEventListener('click', chamarRequisicao);
