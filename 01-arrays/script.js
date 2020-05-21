// map(): faz uma iteração com todos os elementos da lista e retorna outra
// 1) Adicionar "a" no final das palavras
const profissionais = ["desenvolvedor", "programador", "autor", "vereador", "professor"];

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})

// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

const frutasFormatadas = frutas.map(fruta => fruta[0].toUpperCase() + fruta.toLowerCase().substr(1));


// filter(): retorna uma nova array com apenas com elementos que atendem à condição

// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = num.filter(n => n % 2 === 0);

// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

const pessoasTI = pessoas.filter(pessoa => pessoa.area === "TI");


// reduce(): recebe uma array e retorna um valor só. Redutor.

// 1) Dado uma array de números, retornar a soma de todos eles
const soma = num.reduce((acc, curr) => acc + curr);

// 2) Retornar o lucro de uma empresa
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];

const lucro = transacoes.reduce((acc, curr) => curr.tipo === "entrada" ? acc + curr.valor : acc - curr.valor, 0)

// sort(): organiza itens da array de acordo com uma verificação

// 1) Organizar números de forma decrescente
const numDecrescente = [...num].sort((a , b) => b - a);

// 2) Organizar pessoas por ordem alfabética
const pessoasAlfabetico = [...pessoas].sort((a, b) => {
  if (a.nome < b.nome) {
    return -1;
  } else if (a.nome > b.nome) {
    return 1;
  } else {
    return 0;
  }
});
