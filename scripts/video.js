document.addEventListener("DOMContentLoaded", function () {
    // Espera a que la página se cargue completamente
    console.log('DOM cargado')

    var videoContainer = document.getElementById("video-container");
    var mainContent = document.getElementById("main-content");
    var introVideo = document.getElementById("intro-video");

    // Reproducir el video y luego ocultarlo
    introVideo.addEventListener("ended", function () {
        videoContainer.style.display = "none";
        mainContent.style.display = "block";
        document.body.style.overflow = "auto"; // Restaura el scroll
    });

    // Puedes agregar más acciones o personalizaciones según tus necesidades
});
