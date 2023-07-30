//SIN UTILIZAR POR EL MOMENTO

function updateFlexWrap (){
    /*SE PUEDE USAR getElementById o querySelector(),
     query agarra el primer id o clase que encuentre disponible*/
    const chapterTextList = document.getElementsByClassName('chapter-text');
    window.addEventListener('mousemove', updateFlexWrap);
    for (const chapterText of chapterTextList){
        if (chapterText.offsetWidth < 355){
            chapterText.style.flexWrap = 'wrap';
            chapterText.classList.add('flex-wrapOn');
        }else{
            chapterText.style.flexWrap = 'nowrap';
            chapterText.classList.remove('flex-wrapOn');
        }
    }
}

// Se llama una sola vez
console.log("resolution changed");

// Listener que escucha cada vez que se cambia la resolución de la pantalla
window.addEventListener('HTMLDetailsElement', updateFlexWrap);
window.addEventListener('resize', updateFlexWrap);
updateFlexWrap();
document.addEventListener('DOMContentLoaded', () => {
    // Llamar a la función cuando el DOM esté listo
    updateFlexWrap();
});