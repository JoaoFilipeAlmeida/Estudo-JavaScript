/* 
 - O tipo de dados Array, ou vetor, é um dado estrutural, 
 consiste em uma lista de dados agrupados unidimensional(Em linha);
 - Agrupamento de dados do mesmo tipo ou de diferentes tipos (Number, boolean, string);
 - Pode-se declarar outro array dentro do mesmo;
 - Sua declaração é por meio de colchetes [];
 - O índice (posição do dado dentro do array) só é acessado por um número inteiro, 
 onde o algarismo 0 é o primeiro índice.
*/

// Criando array com dados do mesmo tipo
let notas = [8.5, 9, 7.5, 10, 5.5, 8, 6, 10];
console.log(notas);

// Criando array com dados de diferentes tipo
let meuArray = ["string", 1, true,];
console.log(meuArray);

// Criando array dentro de um array
let varioArray = [[1, 2, 3], [10, 20, 30], ["Alfredo", "Carlos", "Luiz"]];
console.log(varioArray);

///////////////////////////////////// ----------- ///////////////////////////////////////////

/* 
 MANIPULANDO DADOS DE UM ARRAY 
    • forEach() – itera um array;
    • push() – add item no final do array;
    • pop() – remove item no final do array;
    • shift() – remove item no início do array;
    • unshift() – add item no início do array;
    • indexOf() – retorna o índice de um valor que foi determinado;
    • splice() – remove o item que está no índice determinado e retorna um novo "array" com itens que ficaram;
    • slice() – retorna os itens do índice determinado;
*/

// forEach
// Imprimir o item e seu índice correspondente dentro do array
notas.forEach(function(item, index){console.log(item, index)});

// indexOf
console.log(notas.indexOf(7.5));

// splice
notas.splice(0, 3);
console.log(notas);

// slice
notas.slice(4, 7);
console.log(notas);
