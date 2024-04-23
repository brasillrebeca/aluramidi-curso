/* convenção: usar MAIN como nome do arquivo principal de JS de uma página */
/* JavaScript carrega os tipos de interação, para aplicar a alguma coisa - precisa acessar elementos de um outro arquivo, nesse caso: HTML e CSS - e faz isso através de palavras reservadas - DOCUMENT, por exemplo, indica que o JS vai acessar elemntos de todo o documento (navegador) - o . "diz para o JS que esse caesso será através de: + nome do elemento que quero acessar"*/

/* o ponto "entra" na função para passar uma instrução
    quando queremos que um trecho de código seja executado segundo condições específicas - criar uma função */

/* o que vai dentro das chaves: trecho de código que eu quero que o navegador execute, apenas quando for chamado */

function tocaSomPom() {
    /*                     ID(tipo a classe) que identifica esse elemento, lá no HTML */
    document.querySelector('#som_tecla_pom').play();
} 


// Lista de exercícios - funções que executam a mesma coisa
// Código 1

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('#tecla_pom').onclick = tocaSomPom;

// Código 2

document.querySelector("#tecla_pom").onclick = function() {
    document.querySelector("#som_tecla_pom").play();
}

// Código 3 - acrescentando um evento
function tocaSomPom() {
    document.querySelector("#som_tecla_pom").play();
}

document.querySelector('#botaoPom').addEventListener('click', tocaSomPom);

/* se dentro do arquivo JS quisermos passar uma função para um atributo - não utilizar o parêntese da função, se não vai chamá-la imediatamente para ser execucatada - e agt viu que o JS barra execuções imediatadas */

// Como automatizar funções
