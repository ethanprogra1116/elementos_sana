// ESTE CÓDIGO SE EJECUTA EN UN EVENTO CLICK, AL OCURRIR EL EVENTO, SE ABRE LA VENTANA DE CONTACTO DE WHATSAPP



// Obtener el ancho y alto del viewport
const anchoViewport = window.innerWidth || document.documentElement.clientWidth;
const altoViewport = window.innerHeight || document.documentElement.clientHeight;

// Calcular las coordenadas para centrar la ventana
const izquierda = (anchoViewport - 500) / 2;
const arriba = (altoViewport - 500) / 2;

// Abrir una nueva ventana de Google centrada
const nuevaVentanita = window.open('https://api.whatsapp.com/send/?phone=528331881415&text&type=phone_number&app_absent=0', '_blank', `width=500,height=500,left=${izquierda},top=${arriba}`);

