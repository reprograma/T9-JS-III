const cep_input = document.getElementById("cep")
const logradouro_input = document.getElementById("logradouro")
// const complemento_input = document.getElementById("complemento")
const bairro_input = document.getElementById("bairro")
// const localidade_input = document.getElementById("localidade")
// const uf_input = document.getElementById("uf")
const cep_error = document.getElementById("cep-error")

cep_input.addEventListener("blur", () => {
  fetch(`https://viacep.com.br/ws/${cep_input.value}/json`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    logradouro_input.value = data.logradouro;
    bairro_input.value = data.bairro;
    cep_error.textContent = ""
  })
  .catch(
    (err) => {console.log('catch', err)
    cep_error.textContent = "Erroooou"
  })

});





fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
  .then((response) => {return response.json()})
  .then(data => {
    console.log('data: ', data)
  })
