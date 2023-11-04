/*
  Nesse desafio você irá criar uma lista de **estudantes** e, 
  cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois de criada a lista:

    - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
    aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/


let ap

let estudantes = [
  {
    name: "Jorge",
    n1: 8,
    n2: 7
  },
  {
    name: "Roberto",
    n1: 4,
    n2: 7
  },
  {
    name: "Astolfo",
    n1: 3,
    n2: 9
  },
  {
    name: "Cleber",
    n1: 2,
    n2: 4
  },
  {
    name: "Jeremias",
    n1: 9,
    n2: 9
  },
  {
    name: "Waldisnei",
    n1: 3,
    n2: 7
  },
]



function calculaMedia(nome,n1, n2) {
  let media = (n1 + n2) / 2
  if(ap >= 7 ){
    alert(`
      A média do(a) aluno(a) ${nome} é: ${media}
        Parabens, ${nome}! voce foi aprovado(a) no concurso!
    `)
  }else{
    alert(`
      A média do(a) aluno(a) ${nome} é: ${media}
        Não foi dessa vez, ${nome}! Tente novamente!
    `)
  }
}


for(let estudante of estudantes){
  ap = calculaMedia(estudante.name,estudante.n1, estudante.n2)
}