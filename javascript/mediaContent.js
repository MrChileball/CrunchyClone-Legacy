let path = location.pathname;
let value =`(${path}content/banner-mobile.webp) no-repeat center center`;
let valueDesktop =`${path}content/banner-desktop.webp`;
let valueMobile =`${path}content/banner-mobile.webp`;
function test() {
    // Obtener el elemento con la clase "main-background"
    const mainBackground = document.querySelector('.main-background');


    if (mainBackground) {
        // Cambiar la propiedad de fondo  
        mainBackground.style.background = 'url' + value ;
        mainBackground.style.backgroundSize="cover";
        document.querySelector('.banner-desktop').src = valueDesktop;
        document.querySelector('.banner-mobile').src = valueMobile;
    } else {
        //ELEMENTO NO CARGADO, CONEXIÓN MUY LENTA O UN ERROR
    }
};
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento con la clase "main-background"
    setTimeout(test, 450);
});
