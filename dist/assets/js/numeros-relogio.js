setInterval(criaCanvasRelogio, 1000);


const Pi = Math.PI;
let relogioCanvas = document.querySelector('#relogio-canvas');
let relogioCanvascontexto = relogioCanvas.getContext('2d');
let raio = relogioCanvas.height / 2;

centralizaContexto(relogioCanvascontexto, raio);


function criaCanvasRelogio() {

    desenhaCirculo(relogioCanvascontexto, raio);   
    desenhaNumeros(relogioCanvascontexto, raio);
    desenhaHoras(relogioCanvascontexto, raio);

}

function centralizaContexto(contexto, raio) {
    contexto.translate(raio, raio);
}

function desenhaCirculo(contexto, raio) {
    contexto.arc(0, 0, raio, 0, 2 * Pi);

    aplicaGradiente(contexto, "#FB8C00", "#fff");

}

function aplicaGradiente(contexto, corInicial, corFinal) {
   
    contexto.beginPath();
    contexto.arc(0, 0, raio, 0, 2*Pi);
    contexto.fillStyle = 'white';
    contexto.fill();
   
    var gradiente = contexto.createLinearGradient(10, 80, 0, 0);
    gradiente.addColorStop(0, corInicial);
    gradiente.addColorStop(1, corFinal);
    contexto.fillStyle = gradiente;

    contexto.fill()
}

function desenhaNumeros(contexto, raio) {
    var angulo;
    var numero;

    contexto.font = raio * 0.12 + "px arial";
    contexto.textBaseline = "middle";
    contexto.textAlign = "center";
    contexto.fillStyle = "#000";

    for (numero = 1; numero < 25; numero++) {
        angulo = numero * Pi / 12;

        contexto.rotate(angulo);
        contexto.translate(0, raio * 0.9);
        contexto.rotate(-angulo);
        contexto.fillText(numero.toString(), 0, 0);
        contexto.rotate(angulo);
        contexto.translate(0, -raio * 0.9);
        contexto.rotate(-angulo);
    }
}



function desenhaHoras(contexto, raio) {
    let agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();


    //Arredonda a hora
    hora = hora % 24;


    let anguloHora = (hora*Pi/12) + (minuto*Pi/(12*60)) + (minuto*Pi/(12*360));
    desenhaPonteiros(contexto, anguloHora, raio * 0.5, raio * 0.07);


    //minuto
    let AnguloMinuto = (minuto*Pi/(30)) + (segundo*Pi/(60*30));

    desenhaPonteiros(contexto, AnguloMinuto, raio * 0.8, raio * 0.07);
    // segundo
    let anguloSegundo =  (segundo*Pi/(30));
    desenhaPonteiros(contexto, anguloSegundo, raio * 0.9, raio * 0.02);

}

function desenhaPonteiros(contexto, posicao, length, width) {
    contexto.beginPath();
    contexto.lineWidth = width;
    contexto.lineCap = "round";
    contexto.moveTo(0, 0);
    contexto.rotate(posicao);
    contexto.lineTo(0, length);
    contexto.stroke();
    contexto.rotate(-posicao);
}


