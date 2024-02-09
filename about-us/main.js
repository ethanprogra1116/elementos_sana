// Función que muestra el NAV activo
function showSideNav(entries) {
    entries.forEach(entry => {
        const divId = entry.target.id;
        const buttonId = `${divId}_boton`;
        const button = document.querySelector(`#${buttonId}`);

        if (entry.isIntersecting) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// LISTA TODOS LOS DIVS
const divs = document.querySelectorAll('.div_chido');

// Observer - siempre recibe el callback y las funciones
const observer = new IntersectionObserver(showSideNav, { threshold: 1 });

// Hacemos que el observer observe cada div individualmente
divs.forEach(div => {
    observer.observe(div);
});
