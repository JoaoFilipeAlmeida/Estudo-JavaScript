/* OBJECT

    - É um tipo de dado estrutural(possui uma estrutura a ser seguida);
    - Possui propriedades/atributos e valores/métodos/funcionalidades)
    - As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto.
    - Pode ser feita a desestruturação de objetos.
 */

// Exemplo de objeto

var caneca = {
    cor: 'azul',
    tamanho: "p",
    utilidade: function() {
        console.log('Beber café')
    }
}
//Acessando todas as características
console.log(caneca);

//Escolhendo qual características acessar
console.log(caneca.tamanho);


/////////////////////////////////------///////////////////////////////////////////////////////////////

//DESESTRUTURAÇÃO DE OBJETO

var xicara = {
    cor: 'azul',
    tamanho: "p",
    utilidade: "Beber café",
    lojaComprada: "Mercearia",
    valor: "22 Reais"
}

var corDaXicara = xicara.cor;
console.log(corDaXicara);

var tamanhos = xicara.tamanho;
console.log(tamanhos);

// OU //

var {cor, tamanho, valor} = xicara;
console.log(cor, tamanho, valor);