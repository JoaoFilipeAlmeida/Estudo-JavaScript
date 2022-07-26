function calculator () {
    const operationSelect = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão de Inteiros (%)\n 6 - Potenciação (**)'));

    // Conferindo os parâmetros de escolha das operações
    if ( !operationSelect || operationSelect >= 7){
        alert("Selecione uma opção válida")
        calculator();
    }
    else{
        
        //Coleta de dados
        let n1 = Number(prompt('Insira o primeiro número:'));
        let n2 = Number(prompt('Insira o segundo número:'));
        let resultado;

        // Conferindo os parâmetros da coleta de dados
        if (!n1 || !n2){
            alert("Paramêtros inválidos. Por favor digitar apenas números!")
            calculator();
        }
        else{
            // Ações das operações
            function sum() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                newOperation();
            }

            function subtraction() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                newOperation();
            }

            function multiplication() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                newOperation();
            }

            function realDivision() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                newOperation();
            }

            function integerDivision() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`)
                newOperation();  
            }

            function potentiation() {
                resultado = n1 ** n2;
                alert(` ${n1} elevado a ${n2}ª é igual a: ${resultado}`)
                newOperation();   
            }

            // Realizar ou não nova operação
            function newOperation(){
                let option = prompt("Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não\n");

                if(option == 1){
                    calculator();
                }
                else if(option == 2){
                    alert('Ate mais!');
                }
                else{
                    alert("Digite uma opção válida")
                    newOperation();
                }
            }
        }

        // Escolher a operação
        switch(operationSelect){
            case 1: 
                sum();
                break;
            case 2:
                subtraction();
                break;
            case 3:
                multiplication();
                break;
            case 4:
                realDivision();
                break;
            case 5:
                integerDivision();
                break;
            case 6:
                potentiation();
                break;
        }
    }
}
calculator ();