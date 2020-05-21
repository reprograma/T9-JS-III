const form = document.getElementById("pkmForm");
const input = document.getElementById("pkmInput");
const pkmPlaceholder = document.getElementById("pkmPlaceholder");

const chamarRequisicao = (e) => {
  e.preventDefault();
  pkmPlaceholder.innerHTML = "";
  const pkmNome = input.value.toLowerCase();
};

const executarRequisicao = (url) => {
};

form.addEventListener("submit", (e) => chamarRequisicao(e));
