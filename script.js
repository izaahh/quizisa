const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "QUAL É A PRINCIPAL FUNÇÃO DE UM MÉDICO",
        alternativas: [
            {
                texto: "Diagnosticar e tratar doenças",
                afirmacao: "Os medicos sao responsaveis pela saude dos pacientes,realizando diagnosticos e tratamentos."
            },
            {
                texto: "Ensinar matéria escolares ",
                afirmacao: "A principal funcao de um medico e diagnosticar e tratar doencas,nao ensinar."
            }
        ]
    },
    {
        enunciado: "O QUE FAZ UM ENGENHEIRO CIVIL",
        alternativas: [
            {
                texto: "PROJECTA E CONSTROI EDIFICIOS",
                afirmacao: "muito bem! engenheiros civis trabalham na concepçao,como pontes, estradas e edificios"
            },
            {
                texto: "CONSERTA ELETRODOMESTICOS",
                afirmacao: "Engenheiro civis projetam e constroem edificios e infraestruturas,eles nao concertam eletrodomesticos."
            }
        ]
    },
    {
        enunciado: "QUAL A PRINCIPAL FUNÇÃO DE UM PROFESSOR",
        alternativas: [
            {
                texto: "GERIR UMA EMPRESA",
                afirmacao: "AFIRMATIVA RESPOSTA 1"
            },
            {
                texto: "ENSINAR E EDUCAR ALUNOS",
                afirmacao: "AFIRMATIVA RESPOSTA 2."
            }
        ]
    },
      
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();