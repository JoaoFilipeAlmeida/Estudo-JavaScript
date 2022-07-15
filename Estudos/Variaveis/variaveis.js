/* 
 VARIÁVEIS

    - São espaços da memória volátil em que usamos para guardar um tipo de dado(Number, Boolean, String);
    - So existem enquanto estão em execução;
    - São associadas a identificadores (Nomes), que escolhemos de forma mais adequada;
    -  Para criar uma variável, podemos usar uma das palavras reservadas: 

        * var ou let-> Valores mutáveis, podem ser mudados conforme a necessidade. 
        * const -> São dados fixos, após serem declarados não podem mudar.

    - As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não;
    - Sua declaração é feita da seguinte maneira: palavrareservada nomedavariavel = "Dado"
*/

// Declarando uma variável (var, let, const)
    var nota1 = 10;
    console.log(nota1);

    let clima = "Nublado";
    console.log(tempo);

    const Nome = "João";
    console.log(Nome);

// Alterando valores de uma variável (var ou let)

var nota = 10;
    nota = 8;
console.log(nota1);

let tempo = "Nublado";
    tempo = "Seco";
console.log(tempo);

////////////////////////////////////////////////// -------------- ////////////////////////////////////////////////

/* ESCOPO
    
    O Scope ou Escopo determina a visibilidade de uma variável em um código e as vezes depende ou não do 
    block statement, que é o código presente dentro de chaves. 

*/

/* 
    # Tipo var
        - Escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código;
        - Escopo local, sendo declarada dentro do bloco, ou seja, entre {};

        - Efeito Hoisting: 
            Por "var" ter escopo global, mesmo que ela esteja dentro de um bloco, o Js vai compilar 
            e jogar de forma "invisível" para o topo do script, fazendo com que a variável "exista" 
            antes mesmo do compilador passar, ler e interpretar o bloco em que se encontra. 
            Entretanto, o valor que foi atribuído a ela dentro do bloco só será mostrado se houver 
            uma solicitação de impressão após o bloco, não havendo, o valor apresentado será "undefined".
            Pois, o compilador sabe que a "var" existe, mas onde o código parou não teve valor atribuído a ela.
*/

        // Comportamento Global
            var valor = 10;
            console.log(valor);

        // Comportamento Local
            console.log("> Numero existe antes do bloco?", valor)

            {
                var numero = 10;
            }

            console.log("> Numero existe e tem valor depois do bloco?", "\n", valor);


        // COMPORTAMENTO DO HOISTING
        
            var numero = ""; 
            //[Pega a declaração, joga pro início do script, lê e entende que existe uma "var" chamada "numero" ]

            console.log("> Numero existe antes do bloco?", valor) 
            //[Mostra "numero" existe mas que não possui valor dentro dela, então mostra Undefined]

            {
                numero = 10;
            } //[O compilador agora sabe que foi atribuído um valor a "numero" e é 10.]

            console.log("> Numero existe e tem valor depois do bloco?", "\n", valor); 
            //[Agora será mostrado o valor de "numero"]


/*
    #Tipo let

        - Escopo local de bloco; 
        - Pode ter seu valor alterado; 
        - Se não tiver um valor inicial será tratada como null.
*/
        // Comportamento local e alteração de valor
            {let casa = "casa01";
                    {casa = "casa02";} 
            }
            casa = "casa03";
            console.log(casa);


        // Erro
            console.log(casa) // [Ainda não existe para ser mostrada]
            
            {let casa = "casa01";
                    {casa = "casa02";} 
            }
            casa = "casa03";
            console.log(casa);

        
/*
    #Tipo const
        - Escopo local de bloco; 
        - O valor inicial é obrigatório; 
        - Não pode ser alterado.
*/

    // Comportamento local e sem alteração de valor
        {
            const casa2 = "casa04";
            console.log(casa2);
        
            casa2 = "casa05"; // [Gerar error por querer mudar o valor]
            console.log(casa2);
        }