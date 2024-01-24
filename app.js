//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'JOGO DO NÚMERO SECRETO';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'ESCOLHA UM NÚMERO ENTRE 1 E 10';

let listaDeNumerosSoteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
     //{rate:1.2});
}
 function exibirMensagemIncial( ) {
    exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
    exibirTextoNaTela('p', 'ESCOLHA UM NÚMERO ENTRE 1 E 10');
 }

 exibirMensagemIncial();

 function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', "Parabens !");
        let palavraTentativa =  tentativas > 1 ? 'tentativas'  :
        'tentativa';
        let mensagemTentativas = `Voçê descobriu o número secreto com 
        ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor ');        
        }else { 
            exibirTextoNaTela('p', 'O numero secreto é maior ');
        }
         tentativas++;
         limparCampo();
              
    }
}

function gerarNumeroAleatorio()  {  
let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
let quantideElementosLista = listaDeNumerosSoteados.length;
if(quantideElementosLista == 3 ){
    listaDeNumerosSoteados = [];
}
if (listaDeNumerosSoteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
}else{ 
    listaDeNumerosSoteados.push(numeroEscolhido);
    console.log (listaDeNumerosSoteados);
    return numeroEscolhido;

    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

  }

  function reiniciarJogo() {    
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    getElementById('reiniciar').setAtribute('disabled', true)
    
    } 
