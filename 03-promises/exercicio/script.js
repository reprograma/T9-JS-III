const promise = new Promise((resolve, reject) => {
  if (false) {
    resolve("resolvido!"); // dado é retornado para o then
  } else {
    reject("aaahh errooou"); // entra no catch
  }
});

promise
  .then(
    (resolveUm) => {console.log(resolveUm)}
  )
  .catch((err) => {console.log(err)})