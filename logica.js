listaPerguntas = [
  {
    pergunta: "Qual o maior ser vivo ?",
    opcoes : ["Baleia Azul","Fungo de Mel","Elefante","Girafa"],
    correta: 1 
  },
  {
    pergunta: "Qual foi a  primeira capital do Brasil ?",
    opcoes: ["Groaíras","Brasília","Salvador","Rio de Janeiro"],
    correta: 2
  },
  {
    pergunta: "Em que ano Brasil ganhou sua segunda Copa do Mundo ?",
    opcoes: ["1958","1962","1966","1970"],
    correta: 1
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil ?",
    opcoes: ["Dom Pedro ||","Gentúlio Vargas","Juscelino Kubitschek","Marechal Deodoro Da Fonseca"],
    correta: 3
  }
]

objPergunta = null

telaInicial = document.querySelector(".tela-inicial")
telaPergunta = document.querySelector(".tela-pergunta")
telaAcertou = document.querySelector(".tela-acertou")
telaErrou = document.querySelector(".tela-errou")
telaGanhou = document.querySelector(".tela-ganhou")

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

divPergunta = document.querySelector(".pergunta");

botao0 = document.querySelector(".opcao0");
botao1 = document.querySelector(".opcao1");
botao2 = document.querySelector(".opcao2");
botao3 = document.querySelector(".opcao3");

perguntaAtual = 0

telaAcertou.addEventListener("click", () => {
  telaAcertou.style.display = "none"
  if (perguntaAtual == 4)  {
    mostrarGanhou()
  } else {
    iniciarJogo()
  }
})

telaErrou.addEventListener("click", () => {
  telaErrou.style.display = "none"
  telaInicial.style.display = "block"
  perguntaAtual = 0
})

telaGanhou.addEventListener("click", () => {
  telaGanhou.style.display = "none"
  telaInicial.style.display = "block"
  perguntaAtual = 0
})

  
botao0.addEventListener("click", () => {
  if (objPergunta.correta == 0) {
    mostrarAcertou()
  } else { 
    mostrarErrou()
  }
})

botao1.addEventListener("click", () => {
  if (objPergunta.correta == 1) {
    mostrarAcertou()
  } else { 
    mostrarErrou()
  }
})

botao2.addEventListener("click", () => {
  if (objPergunta.correta == 2) {
    mostrarAcertou()
  } else { 
    mostrarErrou()
  }
})

botao3.addEventListener("click", () => {
  if (objPergunta.correta == 3) {
    mostrarAcertou()
  } else { 
    mostrarErrou()
  }
})

function iniciarJogo() {
  telaInicial.style.display = "none"
  telaPergunta.style.display = "block"
  
  mostrarPergunta()
}

function mostrarPergunta() {
  objPergunta = listaPerguntas[perguntaAtual];

  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta.innerHTML = ""
  divPergunta.appendChild(textoPergunta); 

  txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0.innerHTML = ""
  botao0.appendChild(txtOpcao1);

  txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1.innerHTML = ""
  botao1.appendChild(txtOpcao2);

  txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao2.innerHTML = ""
  botao2.appendChild(txtOpcao3);

  txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao3.innerHTML = ""
  botao3.appendChild(txtOpcao4);
}

function mostrarAcertou() {
  telaPergunta.style.display = "none"
  telaAcertou.style.display = "block"
  perguntaAtual ++
}

function mostrarErrou() {
  telaPergunta.style.display = "none"
  telaErrou.style.display = "block"
}

function mostrarGanhou() {
  telaGanhou.style.display = "block"
}



