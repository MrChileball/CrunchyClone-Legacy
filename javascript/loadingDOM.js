document.addEventListener('DOMContentLoaded', () => {
    // Llamar a la función cuando el DOM esté listo
   

    setTimeout(() => {
      const styleBody = document.body; //Seleciona el elemento Body de CSS
      styleBody.classList.add("fade-in-nonlinear"); //añade la clase fade-in-nonlinear al body
      styleBody.style.visibility = "visible"; //vuelve visible la web y empieza la transición de carga   
    }, "300");
  });