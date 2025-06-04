listaPerguntas = [
  {
    pergunta: "Qual o maior ser vivo ?",
    opcoes : [
      "Baleia Azul",
      "Funo de Mel",
      "Elefante",
      "Girafa"
    ],
    correta: 1
  },
  {
    pergunta: "Qual a primeira capital do Brasil ?",
    opcoes: [
      "Groaíras",
      "Brasília",
      "Salvador",
      "Rio de Janeiro"
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano Brasil ganhou sua segunda Copa do Mundo ?",
    opcoes: [
      "1958",
      "1962",
      "1966",
      "1970"
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil ?",
    opcoes: [
      "Dom Pedro ||",
      "Gentúlio Vargas",
      "Juscelino Kubitschek",
      "Marechal Deodoro Da Fonseca"
    ],
    correta: 3
  }
]

pergunta = null

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPerg = document.querySelector(".tela-pergunta")
  telaPerg.style.display = "block"
  
  mostrarPergunta()
}

function mostrarPergunta() {
  pergunta = listaPerguntas[0]
  
  console.log(pergunta.pergunta)
}