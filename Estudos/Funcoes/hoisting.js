/*
    * O JavaScript possui function hoisting;
    * Permite que uma função seja declarada depois de ser chamada;
    * Não ocorre hoisting quando ela for declarada dentro de "let", "var" ou "const";
*/

// Hoisting

soma(2,3)

function soma (number1, number2){
    return number1 + number2;
}

// Erro por estar dentro de "let", "var" ou "const"

soma(2,3)

const soma = function(number1, number2) {
    console.log(number1 + number2)
}