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
    const novaProfissional = item + "a";
    return novaProfissional;
  }
);

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})

// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

<<<<<<< HEAD
// retorno:
// ["Maçã", "Banana", "Pera", "Melancia", "Pêssego", "Jaca"]

// passar por todos os itens:
// 1. colocar todas as letras minúsculas
// 2. colocar a primeira letra maiúscula
// 3. colocar a lista nova em uma variável

// 3) Retonar uma nova array com o nome das alunas com a nota final
const notasAlunas = [
  { nome: "Julia", notas: [
      { materia: "matemática", nota: 7, peso: 1.5 },
      { materia: "portugues", nota: 3, peso: 2 }
    ]
  },
  { nome: "Zelia", notas: [
      { materia: "matemática", nota: 6, peso: 1.5 },
      { materia: "portugues", nota: 5, peso: 2 }
    ]
  },
  { nome: "Jussara", notas: [
      { materia: "matemática", nota: 8, peso: 1.5 },
      { materia: "portugues", nota: 2, peso: 2 }
    ]
  }
]

const notasFinaisAlunas = notasAlunas.map(
  (aluna) => {
    const arrNotas = aluna.notas;

    let somaNotas = 0;
    let somaPesos = 0;

    for(let i = 0; i < arrNotas.length; i++) {
      const nota = arrNotas[i].nota;
      const peso = arrNotas[i].peso;
      const notaFinalMateria = nota * peso;
      somaNotas += notaFinalMateria;
      somaPesos += peso;
    }

    const notaFinalUm = somaNotas / somaPesos;

    const novaAluna = {
      nome: aluna.nome,
      notaFinal: notaFinalUm
    }

    return novaAluna;
  }
)
=======
const frutasFormatadas = frutas.map(fruta => fruta[0].toUpperCase() + fruta.toLowerCase().substr(1));

>>>>>>> Exercicio array resolvido

// filter(): retorna uma nova array com apenas com elementos que atendem à condição

// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

<<<<<<< HEAD
// [2, 4, 6, 8, 10]

const numPares = num.filter(
  (item) => {
    const ehNumPar = item % 2 === 0;
    return ehNumPar;
  }
)
=======
const pares = num.filter(n => n % 2 === 0);
>>>>>>> Exercicio array resolvido

// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

<<<<<<< HEAD
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

// 3) Criar uma array somente com alunas que passaram de ano (média > 5)
const alunasPassantes = notasFinaisAlunas.filter(
  (item) => {
    const media = 5;
    const passou = item.notaFinal >= media;
    return passou;
  }
);

// reduce(): recebe uma array e retorna um valor só. Redutor.
// 1) Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = num.reduce(
  (acumulado, item) => {
    const somaAtual = acumulado + item;
    return somaAtual;
  }
);
=======
const pessoasTI = pessoas.filter(pessoa => pessoa.area === "TI");


// reduce(): recebe uma array e retorna um valor só. Redutor.

// 1) Dado uma array de números, retornar a soma de todos eles
const soma = num.reduce((acc, curr) => acc + curr);
>>>>>>> Exercicio array resolvido

// 2) Retornar o lucro de uma empresa
// se for saída, subtratir o valor
// se for entrada, adicionar o valor
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];

<<<<<<< HEAD
const lucro = transacoes.reduce(
  (acumulado, item) => {    
    console.log(item.tipo === "entrada");
    if(item.tipo === "entrada") {
      return acumulado + item.valor;
    } else {
      return acumulado - item.valor;
    }
  }, 0
);
=======
const lucro = transacoes.reduce((acc, curr) => curr.tipo === "entrada" ? acc + curr.valor : acc - curr.valor, 0)
>>>>>>> Exercicio array resolvido

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
