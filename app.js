let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function verificarTexto(tag, texto) {
    let campo = document.querySelector( tag );
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function msgInicial() {
    verificarTexto("h1", "Jogo do número secreto");
verificarTexto("p", "Escolha um número entre 1 e 10");
}

msgInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? "Tentativas" : "Tentativa";
    let mensagemDeAcerto = `Parabéns, você acertou com ${tentativa} ${palavraTentativa}`;
    chute == numeroSecreto ? verificarTexto('h1', "Você acertou!") + verificarTexto('p', mensagemDeAcerto) + document.getElementById('reiniciar').removeAttribute('disabled') : 
    chute > numeroSecreto ? verificarTexto('p', `O número secreto é menor que ${chute}`):
     verificarTexto('p', `O número secreto é maior que ${chute}`);
     tentativa++;
     limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let tamanhoLista = listaDeNumerosSorteados.length;
    if (tamanhoLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value  = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute( 'disabled', true );
    
}