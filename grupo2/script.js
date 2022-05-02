function cargarAccion() {
    const botones = document.getElementsByClassName('boton');
    for(let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', () => dispararAccion(botones[i]));
    }
}

function dispararAccion(elemento) {
    if(elemento.getAttribute('data-valor') === 'colorUno') {
        const bordeVisualizador = document.getElementById('visualizador');
        bordeVisualizador.style.borderColor = 'green';
    }

    if(elemento.getAttribute('data-valor') === 'colorDos') {
        const bordeVisualizador = document.getElementById('visualizador');
        bordeVisualizador.style.borderColor = 'blue';
    }

    if(elemento.getAttribute('data-valor') === 'colorTres') {
        const bordeVisualizador = document.getElementById('visualizador');
        bordeVisualizador.style.borderColor = 'red';
    }

    if(elemento.getAttribute('data-valor') === 'paisajeUno') {
        const imagen = document.getElementById("visualizador");
        imagen.src = "./images/mountain1.jpg";
    }

    if(elemento.getAttribute('data-valor') === 'paisajeDos') {
        const imagen = document.getElementById("visualizador");
        imagen.src = "./images/mountain2.jpg";
    }
    if(elemento.getAttribute('data-valor') === 'paisajeTres') {
        const imagen = document.getElementById("visualizador");
        imagen.src = "./images/mountain3.jpg";
    }
}


function cargarDocumento(){
    cargarAccion();
}

window.onload = cargarDocumento;

