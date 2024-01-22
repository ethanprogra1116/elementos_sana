'use strict'

const instagram = document.querySelector('.redes_emergentes .instagram')
const facebook = document.querySelector('.redes_emergentes .facebook')

function createWindow(red, link) {
    // Obtener el ancho y alto del viewport
    const anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    const altoViewport = window.innerHeight || document.documentElement.clientHeight;

    // Calcular las coordenadas para centrar la ventana
    const izquierda = (anchoViewport - 500) / 2;
    const arriba = (altoViewport - 500) / 2;

    //Funcion que hace que el click funcione
    red.addEventListener('click', ()=> {
        window.open(link, '_blank', `width=500, height=500, left=${izquierda}, top=${arriba}`)
    })
}

createWindow(instagram, 'https://www.instagram.com/eepatdemexico')
createWindow(facebook, 'https://www.facebook.com/EEPATdeMexico')