
/* 
    * Return: Instrução colocada ao final da função e a faz para de ser executada. Ele vai retornar o "valor" da função,
    que pode ou não ser utilizado, inclusive em outras funções.
    
    * Toda função que não possui "return" terá como valor "Undefined" 
*/

const soma = function(number1, number2) {
    let total = number1 + number2;
    return total
}

let number1 = 45;
let number2 = 38;

console.log(`A soma é ${soma(number1, number2)}`);