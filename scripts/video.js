// Espera a que el DOM se cargue por completo
document.addEventListener("DOMContentLoaded", function () {
    

    var videoContainer = document.getElementById("video-container");
    var mainContent = document.getElementById("main-content");
    var introVideo = document.getElementById("intro-video");
    const skipButton = document.getElementById('skipVideo');

    // Esperamos dos segundos para mostrar el botón
    setTimeout(()=> {
        skipButton.classList.add('visible')
    }, 1500)

    // Si se le da click al botón adelantamos el video
    skipButton.addEventListener('click',()=> {
        videoContainer.style.display = "none";
        mainContent.style.display = "block"; //Para SANA no es necesario porque usaremos z-index
        document.body.style.overflow = "auto";
    })


    // Reproducir el video y luego ocultarlo
    introVideo.addEventListener("ended", function () {
        videoContainer.style.display = "none"; 
        mainContent.style.display = "block"; //Para SANA no es necesario porque usaremos z-index
        document.body.style.overflow = "auto"; // Restaura el scroll
    });

});


















// CÓDIGO ASÍNCRONO --------------------------------------------------------------------------------------------

// Función que devuelve una promesa que se resolverá cuando exista el elemento con el ID proporcionado
function esperarElementoExistente(id) {
    return new Promise(resolve => {
        const verificarExistencia = ()=>{
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


  async function iniciar() {

    const videoContainer = await esperarElementoExistente('video-container');
    var mainContent = await esperarElementoExistente("main-content"); //Esto en SANA no va
    var introVideo = await esperarElementoExistente("intro-video");
    const skipButton = await esperarElementoExistente('skipVideo');
    

    // Esperamos dos segundos para mostrar el botón
    setTimeout(()=> {
        console.log('Esta pasando el setTime Out')
        skipButton.classList.add('visible')
    }, 1500);

    // Si se le da click al botón adelantamos el video
    skipButton.addEventListener('click',()=> {
        videoContainer.style.display = "none";
        document.body.style.overflow = "auto";
    })


    // Reproducir el video y luego ocultarlo
    introVideo.addEventListener("ended", function () {
        videoContainer.style.display = "none"; 
        document.body.style.overflow = "auto"; // Restaura el scroll
    });
  }

//Llamamos a la funcion principal
iniciar()