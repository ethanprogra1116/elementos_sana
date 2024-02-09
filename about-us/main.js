// Funcion que muestra el NAV activo
function showSideNav() {
    if(primerDiv.classList.contains('visible')) {
        primerBoton.classList.add('active')
    }
}

// LISTA TODOS LOS DIVS
var divs = document.querySelectorAll('#div_chido')


// DIVS INDIVIDUALES    -----  Ubicamos los divs por el indice de la node list que es la variable 'divs'
let primerDiv = divs[0] // Quienes somos
let segundoDiv = divs[1] // Nuestro objetivo
let tercerDiv = divs[2] // Solucion
let cuartoDiv = divs[3] // Mision
let quintoDiv = divs[4] // Vision


// NAVS INDIVIDUALES    -----  Ubicamos los tres elementos del nav
let primerBoton = document.querySelector('#quienes_somos_boton')
let segundoBoton = document.querySelector('#objetivo_boton')
let tercerBoton = document.querySelector('#solucion_boton')
let cuartoBoton = document.querySelector('#mision_boton')
let quintoBoton = document.querySelector('#vision_boton')






// Objeto con las opciones
const options = {
    root: null, //Usa el viewport por default, que es el root
    rootMargin: '0px', // Margen del viewport
    threshold: 1 // Punto de interseccion
}
// Observer - siempre recibe el callback y las funciones
// Funcion callback que se ejecuta cada que un div chido se encuentra, todos los demas divs deberian de dejar de tener la clase visible
const callback = (entries, observer) => {
    entries.forEach((entrie)=> {
        entrie.classList.add('visible')
        entrie.classList.remove('invisible')
    });
}

const observer = new IntersectionObserver(callback, options)


// Hacemos que el observer vea la NodeList con nuestros divs 
observer.observe(divs)