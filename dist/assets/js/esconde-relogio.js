let relogioOn = true;

let relogio = document.querySelector('.relogio');
let botaoEsconde = document.querySelector('.btn-esconde-relogio');
let botaoMostra = document.querySelector('.btn-mostra-relogio');


botaoEsconde.addEventListener('click', () => {
    relogio.classList.add('elemento-escondido');
    botaoMostra.classList.remove('elemento-escondido');
    botaoEsconde.classList.add('elemento-escondido');
})


botaoMostra.addEventListener('click', () =>{
    
    relogio.classList.remove('elemento-escondido');
    botaoEsconde.classList.remove('elemento-escondido');
    botaoMostra.classList.add('elemento-escondido');
})
