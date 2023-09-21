// = document.getElementsByClassName('main-background');

//var element = document.getElementsByClassName("main-background");
//element.style.background = "url('https://cdn.xgqfrms.xyz/logo/logo.png')";

// Obtener el elemento con la clase "main-background"

function test() {
    // Obtener el elemento con la clase "main-background"
    const mainBackground = document.querySelector('.main-background');

    if (mainBackground) {
        // Cambiar la propiedad de fondo
        mainBackground.style.background = 'url(/series/snk/content/banner-mobile.webp)';
    } else {
        //ELEMENTO NO CARGADO, CONEXIÓN MUY LENTA O UN ERROR
    }
};
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento con la clase "main-background"
    setTimeout(test, 450);
});
