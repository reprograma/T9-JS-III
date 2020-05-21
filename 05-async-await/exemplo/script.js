function resolveDoisSegundos(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

const add = async (x) => { // async function expression atribuída a uma variável
  const a = await resolveDoisSegundos(20);
  const b = await resolveDoisSegundos(30);
  console.log('dentro da função', a, b);
  return x + a + b;
};

add(10).then(v => {
  console.log(v);  // imprime 60 após 4 segundos.
});

const addSemAsync = function(x) { // async function expression atribuída a uma variável
  const a = resolveDoisSegundos(20);
  const b = resolveDoisSegundos(30);
  console.log('dentro da função', a, b);
  return x + a + b;
};

addSemAsync(10);
