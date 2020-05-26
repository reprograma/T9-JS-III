// map(): faz uma iteração com todos os elementos da lista e retorna outra
// map():
// input: Array
// output: Array de mesmo tamanho

// 1) Adicionar "a" no final das palavras
const profissionais = [
  "desenvolvedor",
  "programador",
  "autor",
  "vereador",
  "professor",
];

const profissionaisMelhores = profissionais.map(
  (item) => {
    return item + "a";
  }
);

// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

// retorno:
// ["Maçã", "Banana", "Pera", "Melancia", "Pêssego", "Jaca"]

// passar por todos os itens:
// 1. colocar todas as letras minúsculas
// 2. colocar a primeira letra maiúscula
// 3. colocar a lista nova em uma variável

const frutasFormatadas = frutas.map(
  (item) => {
    const letraInicial = item[0].toUpperCase();
    const itemMinusculo = item.toLowerCase();
    const itemSemPrimeiraLetra = itemMinusculo.substring(1);

    return letraInicial + itemSemPrimeiraLetra;
  }
);

// filter(): retorna uma nova array com apenas com elementos que atendem à condição
// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// [2, 4, 6, 8, 10]

const numPares = num.filter(
  (bolinha) => {
    const ehNumPar = bolinha % 2 === 0;
    return ehNumPar;
  }
)

// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

// expectativa: 
// const profissionaisTI = [
//   { nome: "Mell", area: "TI", profissao: "dev" },
//   { nome: "Madalena", area: "TI", profissao: "infra" }
// ];

const profissionaisTI = pessoas.filter(
  (item) => {
    const ehDeTI = item.area === "TI";
    return ehDeTI;
  }
)

// reduce(): recebe uma array e retorna um valor só. Redutor.
// 1) Dado uma array de números, retornar a soma de todos eles


// 2) Retornar o lucro de uma empresa
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];


// sort(): organiza itens da array de acordo com uma verificação
// 1) Organizar números de forma decrescente

// 2) Organizar pessoas por ordem alfabética
