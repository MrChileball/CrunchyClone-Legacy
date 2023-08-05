/**
* Carga el contenido de forma asíncrona en un contenedor específico.
* @param {string} url - La URL del contenido a cargar.
* @param {string} contenedorId - El ID del contenedor en el que se cargará el contenido.
*/
function cargarContenido(url, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) {
    console.log(`El contenedor con el ID '${contenedorId}' no se encontró en la página.`);
    return;
  }

  fetch(url)
    .then(response => response.text())
    .then(data => {
      contenedor.innerHTML = data;
      
      
    })
    .catch(error => {
      console.log(`Error al cargar el contenido desde ${url}: ${error}`);
    });
}
  
// Carga los elementos desde un archivo externo (elementos.json)
fetch("/web-modules/modules.json")
  .then(response => response.json())
  .then(data => {
    // Carga el contenido para cada elemento en paralelo
    Promise.all(
      data.map(elemento =>
        cargarContenido(elemento.url, elemento.contenedorId)
      )
    ).then(() => {
      console.log("Todos los elementos se han cargado correctamente.");
      onPageLoaded();
      
      

      
    });
  })
  .catch(error => {
    console.error(`Error al cargar los elementos: ${error}`);
  });


  function onPageLoaded() {
    // Cambiar la propiedad CSS del body una vez que todo esté cargado
    //document.body.style.display = "block";
    document.body.classList.add("loaded");
    console.log("Todos los elementos se han cargado correctamente.");
  }