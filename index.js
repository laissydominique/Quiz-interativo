document.addEventListener("DOMContentLoaded", () => {
  const perguntas = [
    {
      questao: "Qual é a flor nacional do Japão?",
      a: "Flor de Lotus",
      b: "Flor de Cerejeira",
      c: "Girassol",
      d: "Flor de Jabuticabeira",
      correta: "b",
    },

    {
      questao: "Qual o maior país do mundo?",
      a: "França",
      b: "China",
      c: "Rússia",
      d: "Estados Unidos",
      correta: "c",
    },

    {
      questao: "Qual o menor país do mundo?",
      a: "Austrália",
      b: "Canadá",
      c: "índia",
      d: "Vaticano",
      correta: "d",
    },

    {
      questao: " Quantos dias são necessários para a Terra orbitar o sol?",
      a: "365",
      b: "12",
      c: "300",
      d: "31",
      correta: "a",
    },

    {
      questao: " Qual é o rio mais longo do mundo?",
      a: "Rio Amazonas",
      b: "Rio Congo",
      c: "Rio Nilo",
      d: "Rio Mississippi",
      correta: "a",
    },

    {
      questao: "Qual o nome do primeiro filme da Disney?",
      a: "Cinderela",
      b: "Toy Story",
      c: "Branca de neve e os sete anões",
      d: "Encantada",
      correta: "c",
    },

    {
      questao: "Qual o planeta mais próximo do sol?",
      a: "Júpter",
      b: "Mercurio",
      c: "Vênus",
      d: "Terra",
      correta: "b",
    },
  ];
  const container = document.querySelector(".container");

  const iniciar = document.querySelector("#iniciar");
  const alt = document.querySelectorAll(".alt");
  const jogo = document.querySelector(".jogo");
  const questao = document.querySelector(".questao");
  const submit = document.querySelector(".submit");

  const respA = document.getElementById("respA");
  const respB = document.getElementById("respB");
  const respC = document.getElementById("respC");
  const respD = document.getElementById("respD");

  let perguntaAtual = 0;
  let pontos = 0;

  iniciar.addEventListener("click", () => {
    jogo.classList.remove("hidden");
    iniciar.classList.add("hidden");
    jogar();
  });

  function jogar() {
    desmarcar();
    const dadosPerguntaAtual = perguntas[perguntaAtual];
    questao.innerText = dadosPerguntaAtual.questao;
    respA.innerText = dadosPerguntaAtual.a;
    respB.innerText = dadosPerguntaAtual.b;
    respC.innerText = dadosPerguntaAtual.c;
    respD.innerText = dadosPerguntaAtual.d;
  }

  function desmarcar() {
    alt.forEach((al) => (al.checked = false));
  }

  function selecionar() {
    let resposta;
    alt.forEach((al) => {
      if (al.checked) {
        resposta = al.id;
      }
    });
    return resposta;
  }

  submit.addEventListener("click", () => {
    const resposta = selecionar();
    if (resposta) {
      if (resposta == perguntas[perguntaAtual].correta) {
        console.log("correta");
        pontos++;
      }
      perguntaAtual++;
      if (perguntaAtual < perguntas.length) {
        jogar();
      } else {
        jogo.innerHTML = `
          <h2>Você respondeu corretamente ${pontos}/${perguntas.length} questões. <br> Pontuação final: ${pontos} pontos.</h2>
          <button onclick="location.reload()">Recomeçar</button>
        `;
      }
    }
  });
});
