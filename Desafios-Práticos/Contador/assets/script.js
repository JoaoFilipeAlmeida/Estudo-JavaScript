var CurrentNumberSpan = document.getElementById('currentNumberSpan');
var CurrentNumber = 0;

const BotaoAumentar = document.getElementById('aumentar');
const BotaoDiminuir = document.getElementById('subtrair');

function increment (){
    CurrentNumber = CurrentNumber + 1;
    CurrentNumberSpan.innerHTML = CurrentNumber;

    //Mudar a cor de vermelho para preto quando for >= 0
    if (CurrentNumber < 0) {
        document.getElementById('currentNumberSpan').style.color = 'red';       
    } else {
        document.getElementById('currentNumberSpan').style.color = 'black';
    }

    // Desabilitar o botão de aumento
    if (CurrentNumber == 20) {
        BotaoAumentar.disabled = true;
        BotaoDiminuir.disabled = false;
        
    } else {
        BotaoAumentar.disabled = false;
    }
}

function decrement (){
    CurrentNumber = CurrentNumber - 1;
    CurrentNumberSpan.innerHTML = CurrentNumber;

    // Mudar cor ao ficar negativo
    if (CurrentNumber >= 0) {
        document.getElementById('currentNumberSpan').style.color = 'black';       
    } else {
        document.getElementById('currentNumberSpan').style.color = 'red';
    }

    // Desabilitar o botão de reduzir
    if (CurrentNumber == -20) {
        BotaoDiminuir.disabled = true;
        BotaoAumentar.disabled = false;
        
    } else {
        BotaoDiminuir.disabled = false;
    }
}






