/**
* Carga el contenido de forma asíncrona en un contenedor específico.
* @param {string} url - La URL del contenido a cargar.
* @param {string} contenedorId - El ID del contenedor en el que se cargará el contenido.
*/
function cargarContenido(url, contenedorId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(contenedorId).innerHTML = data;
      })
      .catch(error => {
        console.error(`Error al cargar el contenido desde ${url}: ${error}`);
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
      });
    })
    .catch(error => {
      console.error(`Error al cargar los elementos: ${error}`);
    }); 