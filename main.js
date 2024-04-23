// antes o nome da função era: idElementoAudio - trocamos para seletorAudio para identificar melhor o que a função faz
// no console aparecia mensagens de erro, ao chamarmos uma classe(idElemento/seletorAudio) que não exisita - para consertar isso: inserir dentro da função mensagens para esse caso de não existir 
function tocaSom(seletorAudio) {
    // quando queremos manipular algo dentro da função: atribuir a uma variável
    const elemento = document.querySelector(seletorAudio);

    // não precisa colocar elemento === null - o JS já busca automaticamente essa condição dentro do if
    // && === and
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
    
    /*
    if (elemento === null) {
        console.log('Elemento não encontrado')
    }

    if (elemento != null) {
        if (elemento.LocalName === 'audio') {
            elemento.play();
        }
    }
    */

} 

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // função diretamente atrelada a um evento - para quando a tecla ta pressionada
    tecla.onkeydown = function (evento) {
        // passar o parâmetro que foi definido no css para a listagem de classes - já que estamos acrescentando outra interação (pelo teclado)
        // evento.code captura a tecla pressionada
        // o === 3x compara considerando o tipo de dado (se é str ou number - diferente do == que compara apenas valores)
        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

/*
let contador = 0;
while (contador < listaDeTeclas.length) {
    // procurar explicações
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];   // não entendi esse classlist
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;
    // console.log(contador);
}
*/