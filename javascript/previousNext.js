function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
    
  }

  // Función para cargar el contenido del episodio según el valor de "ep"
  function cargarEpisodio(season, episodeNumber) {
    // Leer el archivo JSON para obtener los datos de los episodios
    fetch('episodes.json')
      .then(response => response.json())
      .then(data => {
        //CODIGO DESCARTADO - NO USAR BAJO NINGUNA CIRCUNSTANCIA
        //const episodeData = data[seasonNumber][episodeNumber - 1]; // Los episodios comienzan desde 1, pero el array comienza desde 0
        //const dataNext = data[seasonNumber][episodeNumber];
        const currentSeason = data[season]; // Restamos 1 porque las temporadas comienzan desde 1, pero el array comienza desde 0
        const episodeData = currentSeason[episodeNumber - 1]; // Restamos 1 porque los episodios comienzan desde 1, pero el array comienza desde 0
        const dataNext = currentSeason[episodeNumber]; //Sin uso por el momento
        if (episodeData) { //se modifican las propiedades de la página
          document.getElementById('episodeTitle').innerText = episodeData.title;
          document.getElementById('episodeDescription').innerText = episodeData.description;
          document.getElementById('episodeSource').src = episodeData.source;
        } else {
          alert('Episodio no válido');
        }
      })
      .catch(error => {
        console.error('Error al cargar los datos de los episodios:', error);
      });
  }

  // Llamar a la función cargarEpisodio al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    const episodeNumber = getQueryParam('ep');
    const season = getQueryParam('s');
    if (episodeNumber) {
      cargarEpisodio(season, Number(episodeNumber));
    }

  });



