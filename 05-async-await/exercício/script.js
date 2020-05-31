const formGithub = document.getElementById("formGithub");
const userGithub = document.getElementById("userGithub");
const namePlaceholder = document.getElementById("namePlaceholder");
const moodImg = document.getElementById("moodImg");

// https://api.github.com/users/${userGithubValue}
// http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC

// 1) assistir o evento de clique do botão submit OK
// 2) quando houver clique
  // a) recebe o valor do input OK
  // b) passa para a chamda de API do Github OK
  // c) do objeto recebido, pegar somente o nome OK
  // d) inserir esse nome junto com ", seu humor hoje é: " no placeholder OK

  // e) fazer chamada e API do giphy OK
  // f) receber a array OK
  // g) pegar um número aleatório de 0 a 24 OK
  // h) pegar a url da imagem do item escolhido OK
  // i) inserir a url da imagem no src do placeholder OK

const handleSubmit = async (e) => {
  e.preventDefault();
  // Solicitação de dados de Github
  const githubUsername = userGithub.value;
  const response = await fetch(`https://api.github.com/users/${githubUsername}`)
    .then(response => response.json())
    .then((dados) => { return dados })

  const nome = response.name;
  const mensagem = `${nome}, seu humor é: `;
  namePlaceholder.textContent = mensagem;
  
  // Solicitação de dados do Giphy
  const responseGiphy = await fetch("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
    .then(response => response.json())
    .then((dados) => { return dados.data})

  const numAleatorio = Math.floor(Math.random() * responseGiphy.length);
  const imageUrl = responseGiphy[numAleatorio].images.downsized.url;

  moodImg.setAttribute("src", imageUrl);
};

formGithub.onsubmit = handleSubmit;
