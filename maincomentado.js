/* convenção: usar MAIN como nome do arquivo principal de JS de uma página */
/* JavaScript carrega os tipos de interação, para aplicar a alguma coisa - precisa acessar elementos de um outro arquivo, nesse caso: HTML e CSS - e faz isso através de palavras reservadas - DOCUMENT, por exemplo, indica que o JS vai acessar elemntos de todo o documento (navegador) - o . "diz para o JS que esse caesso será através de: + nome do elemento que quero acessar"*/

/* o ponto "entra" na função para passar uma instrução
    quando queremos que um trecho de código seja executado segundo condições específicas - criar uma função */

/* o que vai dentro das chaves: trecho de código que eu quero que o navegador execute, apenas quando for chamado */
//                  o parâmetro é o que preciso buscar para executar a função - nesse caso, elemento áudio
function tocaSomPom(idElementoAudio) {
    /*                     ID(tipo a classe) que identifica esse elemento, lá no HTML */
    //                     se permanecer com esse ID, sempre será reproduzido esse áudio - então agt quem deve passar o parâmetro na função, ao chamá-la
    // document.querySelector('#som_tecla_pom').play();
    document.querySelector(idElementoAudio).play();
} 

// seleciona todos os elementos que correspondem ao parâmetro que eu passei e transformam em uma lista
// referências - criadas com base no valor que elas vão receber e ter que guardar - elas guardam um valor contantes, po rexemplo a lista de teclas - usadas para facilitar o entendimento e manipulação do dado armazenado
const listaDeTeclas = document.querySelectorAll('.tecla');
// eu não consigo usar o ponto para acessar eventos (onclick) para a lista - pq, na verdade, ele funciona para o elementos da lista
// listaDeTeclas[0].onclick = tocaSomPom;

// espera receber uma condição que seja verdadeira ou falsa
let contador = 0;
while (contador < listaDeTeclas.length) {
//  é preciso informar o seletor, mas se usar () a função é executada antes das interações, apresentando erro - usar função anônima - assim consigo usar o parêntese, mas sem chaamr a execução
//    listaDeTeclas[contador].onclick = tocaSom;
    listaDeTeclas[coontador].onclick = function () {
        tocaSom('#som_tecla_pom');
    }
    contador = contador + 1
    console.log(contador);
}

// função anônima: Em JavaScript, você pode atribuir uma função a uma variável, sem precisar dar um nome a ela

/*
document.querySelector('.tecla_pom');

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/