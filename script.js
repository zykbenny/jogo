const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Em um dia qualquer, você se depara com o mundo destruído em sua volta. A destruição ambiental avançou tanto que a sociedade precisa agir agora antes que seja tarde demais. Você sabe que precisa agir; qual decisão você toma?",
    alternativas: [
      {
        texto: "Isso é resultado das ações humanas! Vou fazer algo para mudar isso.",
        afirmacao: [
          "Estava com medo, mas sabia que precisava agir e queria saber como.",
          "Foi atrás de soluções para melhorar a situação do mundo em que vive."
        ]
      },
      {
        texto: "Isso não me interessa, não é problema meu. O governo que se vire.",
        afirmacao: [
          "Você é vista como uma pessoa egoísta, que não se importa com o mundo em que está.",
          "Não se importa com o meio ambiente nem com o futuro do planeta, focando apenas no seu conforto e consumo."
        ]
      }
    ]
  }
];

let historiaFinal = "";
let atual = 0;

function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function mostrarPergunta() {
  if (atual >= perguntas.length) {
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "História final: " + historiaFinal;
    caixaResultado.style.display = "block";
    return;
  }

  const perguntaAtual = perguntas[atual];
  caixaPerguntas.innerHTML = "";
  caixaAlternativas.innerHTML = "";

  const titulo = document.createElement("h2");
  titulo.textContent = perguntaAtual.enunciado;
  caixaPerguntas.appendChild(titulo);

  perguntaAtual.alternativas.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = opcao.texto;
    botao.addEventListener("click", () => respostaSelecionada(opcao));
    caixaAlternativas.appendChild(botao);
  });
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacoes + " ";
  atual++;
  mostrarPergunta();
}

caixaResultado.style.display = "none";
mostrarPergunta();
