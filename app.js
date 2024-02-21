let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function cliqueButtonConsole() {
    console.log('O Botão Foi Clicado!!!');
}

function cliqueButtonAlert() {
    alert('EU AMO JAVASCRIPT');
}

function cliqueButtonPrompt() {
    let cidadeEscolhida = prompt('Digite no campo uma Cidade Do Brasil!');
    alert(` Estive em ${cidadeEscolhida} e Lembrei de Você!`);
}

function cliqueButtonSoma() {
    let valor1 = prompt('Digite o valor 1 a ser somado.');
    let valor2 = prompt('Digite o valor 2 a ser somado.');


    let resultado = parseInt(valor1) + parseInt(valor2);
    alert(`A Soma entre ${valor1} e ${valor2} é ${resultado}.`);

}