/* FUNÇÕES

    * Funções são tipos de dados estruturais
    * Uma função é importante para o agrupamento e reutilização de código.
    * Variáveis criadas dentro de funções apenas podem ser utilizadas dentro dela.
    * Declaração: 
        function nomedafuncao (parametros) {
            instrucao;
        }
 */

    // function declaration or function statement - declaração de função
        function createPhrases () {
            console.log("Estudar é bom");
            console.log("Revisar é a chave do aprendizado");
            console.log("Equilíbrio e persistência");
        }

    // function execute, run, call, invoke - Executar função, rodar, chamar, invocar
        createPhrases();

    // Reutilizando a função
        createPhrases();
        createPhrases();
        createPhrases();
        createPhrases();

///////////////////////////////-----------------------//////////////////////////////////////////

    // Explicação lúdica do que é uma função: "Pense que ela é um liquidificador"
        
        function fazerVitamina (fruta1, fruta2) {
            return fruta1+fruta2;
        };

        const copoDeVitamina = fazerVitamina('Banana', "Maçã");
        console.log(copoDeVitamina);



    