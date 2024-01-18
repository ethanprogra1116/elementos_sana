// Obtener la referencia a la imagen con el id "logo_whatsapp_contacto"
const imagenWhatsApp = document.getElementById('logo_whatsapp_contacto');
console.log("El codigo empezo papu")
// Agregar el event listener "click"

imagenWhatsApp.addEventListener('click', function() {
  try {
    // Obtener el ancho y alto del viewport
    const anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    const altoViewport = window.innerHeight || document.documentElement.clientHeight;

    // Calcular las coordenadas para centrar la ventana
    const izquierda = (anchoViewport - 500) / 2;
    const arriba = (altoViewport - 500) / 2;

    // Abrir una nueva ventana de Google centrada
    const nuevaVentanita = window.open('https://api.whatsapp.com/send/?phone=528331881415&text&type=phone_number&app_absent=0', '_blank', `width=500,height=500,left=${izquierda},top=${arriba}`);
} catch(err) {
  console.log(err)
}
});




// CODIGO ASINCRONO --------------------------------------------------------------------------------------------------


// Función que devuelve una promesa que se resolverá cuando exista el elemento con el ID proporcionado
function esperarElementoExistente(id) {
  return new Promise(resolve => {
      const verificarExistencia = () => {
          const elemento = document.getElementById(id);
          if (elemento) {
              resolve(elemento);
          } else {
              setTimeout(verificarExistencia, 100); // Revisar cada 100 ms
          }
      };

      verificarExistencia();
  });
}

// Función asíncrona principal
async function iniciar() {
  try {
      // Esperar a que exista el elemento con el ID "logo_whatsapp_contacto"
      const imagenWhatsApp = await esperarElementoExistente('logo_whatsapp_contacto');

      // Agregar el event listener "click"
      imagenWhatsApp.addEventListener('click', async () => {
          // Obtener el ancho y alto del viewport
          const anchoViewport = window.innerWidth || document.documentElement.clientWidth;
          const altoViewport = window.innerHeight || document.documentElement.clientHeight;

          // Calcular las coordenadas para centrar la ventana
          const left = (anchoViewport - 500) / 2;
          const top = (altoViewport - 500) / 2;

          // Intentar abrir una nueva ventana centrada
          const nuevaVentanita = window.open('https://api.whatsapp.com/send/?phone=528331881415&text&type=phone_number&app_absent=0', '_blank', `width=500,height=500,left=${left},top=${top}`);

          if (!nuevaVentanita) {
              throw new Error('No se pudo abrir la nueva ventana. Es posible que los bloqueadores de ventanas emergentes estén activados.');
          }
      });

      console.log('Elemento encontrado y event listener agregado.');
  } catch (error) {
      console.error('Error:', error.message);
  }
}

// Llamar a la función asíncrona principal
iniciar();