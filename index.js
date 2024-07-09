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
      a: "365 dias",
      b: "12 dias",
      c: "300 dias",
      d: "31 dias",
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
      b: "Mercúrio",
      c: "Vênus",
      d: "Terra",
      correta: "altB",
    },

    {
      questao: "Quem pintou a Mona Lisa?",
      a: "Vincent van Gogh",
      b: "Leonardo da Vinci",
      c: "Michelangelo",
      d: "Pablo Picasso",
      correta: "altB",
    },

    {
      questao: "Qual é o animal terrestre mais rápido do mundo?",
      a: "Leopardo",
      b: "Tigre",
      c: "Guepardo",
      d: "Leão",
      correta: "altC",
    },
    {
      questao: "Qual é a moeda oficial do Japão?",
      a: "Yuan",
      b: "Yen",
      c: "Won",
      d: "Peso",
      correta: "altB",
    },
  ];

  const iniciar = document.querySelector("#iniciar");
  const alt = document.querySelectorAll('input[name="alt"]');
  const jogo = document.querySelector(".jogo");
  const questao = document.querySelector(".questao");
  const submit = document.querySelector(".submit");
  const nome = document.querySelector(".nome");
  const label = document.querySelector(".labelNome");

  const respA = document.getElementById("respA");
  const respB = document.getElementById("respB");
  const respC = document.getElementById("respC");
  const respD = document.getElementById("respD");

  let perguntaAtual = 0;
  let pontos = 0;

  iniciar.addEventListener("click", () => {
    if (!nome.value) {
      alert("Nome de jogador inválido")
      return;
    }
    setTimeout(delayConteudo, 3000);
    carregando();
    adicionaRemoveHidden();
    jogar();
  });

  function adicionaRemoveHidden() {
    const nome = document.querySelector(".nome");
    const label = document.querySelector(".labelNome");
    const bemVindo = document.querySelector(".bemVindo");
    const iniciar = document.querySelector("#iniciar");

    bemVindo.classList.remove("hidden");
    label.classList.add("hidden");
    nome.classList.add("hidden");
    iniciar.classList.add("hidden");
  }

  function carregando() {
    const bemVindo = document.querySelector(".bemVindo");
    const carregando = document.querySelector(".carregando");
    carregando.classList.remove("hidden");
    bemVindo.innerHTML = `Bem vindo(a), ${nome.value}`;
  }

  function delayConteudo() {
    const carregando = document.querySelector(".carregando");
    const bemVindo = document.querySelector(".bemVindo");
    const jogo = document.querySelector(".jogo");
    jogo.classList.remove("hidden");
    carregando.classList.add("hidden");
    bemVindo.classList.add("hidden");
  }

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
        const nome = document.querySelector(".nome");
        jogar();
      } else {
        jogo.innerHTML = `
        <div class="fim"> 
          <h2>Você respondeu corretamente <span> ${pontos / 10}/${
          perguntas.length 
        } </span>  questões, ${nome.value}. <br> Pontuação final: <span> ${pontos}  </span> pontos.</h2> </div>
          <div class= "botaoFim">
        <button class= "recomecar" onclick="location.reload()">Recomeçar</button></div>
       `;
      }
    }
  });
});
