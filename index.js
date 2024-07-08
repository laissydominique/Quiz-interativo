document.addEventListener("DOMContentLoaded", () => {
  const perguntas = [
    {
      questao: "Qual é a flor nacional do Japão?",
      a: "Flor de Lotus",
      b: "Flor de Cerejeira",
      c: "Girassol",
      d: "Flor de Jabuticabeira",
      correta: "altB",
    },
    {
      questao: "Qual o maior país do mundo?",
      a: "França",
      b: "China",
      c: "Rússia",
      d: "Estados Unidos",
      correta: "altC",
    },
    {
      questao: "Qual o menor país do mundo?",
      a: "Austrália",
      b: "Canadá",
      c: "índia",
      d: "Vaticano",
      correta: "altD",
    },
    {
      questao: " Quantos dias são necessários para a Terra orbitar o sol?",
      a: "365",
      b: "12",
      c: "300",
      d: "31",
      correta: "altA",
    },
    {
      questao: " Qual é o rio mais longo do mundo?",
      a: "Rio Amazonas",
      b: "Rio Congo",
      c: "Rio Nilo",
      d: "Rio Mississippi",
      correta: "altC",
    },
    {
      questao: "Qual o nome do primeiro filme da Disney?",
      a: "Cinderela",
      b: "Toy Story",
      c: "Branca de neve e os sete anões",
      d: "Encantada",
      correta: "altC",
    },
    {
      questao: "Qual o planeta mais próximo do sol?",
      a: "Júpter",
      b: "Mercurio",
      c: "Vênus",
      d: "Terra",
      correta: "altB",
    },
  ];

  const iniciar = document.querySelector("#iniciar");
  const alt = document.querySelectorAll('input[name="alt"]');
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
    for (let al of alt) {
      if (al.checked === true) {
        resposta = al.id;
        break;
      }
    }
    return resposta;
  }

  submit.addEventListener("click", () => {
    const resposta = selecionar();
    if (resposta) {
      if (resposta === perguntas[perguntaAtual].correta) {
        pontos += 10;
        console.log("correta");
      } else {
        console.log("errou");
      }
      perguntaAtual++;
      if (perguntaAtual < perguntas.length) {
        jogar();
      } else {
        jogo.innerHTML = `
          <h2>Você respondeu corretamente ${pontos / 10}/${perguntas.length} questões. <br> Pontuação final: ${pontos} pontos.</h2>
          <button onclick="location.reload()">Recomeçar</button>
        `;
      }
    }
  });
});
