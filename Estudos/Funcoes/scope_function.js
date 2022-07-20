// Function scope - Escopo de função


/*  1) Escopo quando há "valor" na variável de fora e na que está dentro da função.
        
        *Cada subject será tratado como variável independente, tendo cada uma seu "valor". */

        let subject = "create video";

        function createThink(subject){
            subject = 'study';
            return subject;
        };

        
        console.log(subject); // Mostra o valor do subject que está fora da função;
        console.log(createThink(subject)); // Mostra o valor atribuído ao subject dentro da função;

/////////////////////////////////////---------------------------////////////////////////////////////////

/*  2) Escopo quando a função não possui parâmetros
        
        * A variável "let subject" terá seu 'valor" substituído, pois o Js entende que se trata 
        de apenas uma variável */

        let subject = "create video";

        function createThink(){
            subject = 'study'; // Entende que deve apenas trocar o "valor" do subject anterior por esse.
            return subject;
        };

        
        console.log(subject); // Mostra o "valor" do subject que está fora da função = Ao que foi definido na função;
        console.log(createThink(subject)); // Mostra o "valor" que foi atribuído ao subject dentro da função;