// Función para redireccionar a un episodio específico
function redirectToEpisode(episode) {
    window.location.href = `https://shingekionline.netlify.app/season1.html?episode=${episode}`;
  }
  
  // Función para cargar el episodio correspondiente al valor del query
  function loadEpisodeFromQuery() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const episode = urlParams.get('episode');
  
    if (episode) {
      fetch('episode-list.json')
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty(episode)) {
            const episodeBlobUrl = data[episode];
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.src = episodeBlobUrl;
            videoPlayer.load();
          } else {
            console.error(`No se encontró información para el episodio "${episode}".`);
          }
        })
        .catch(error => {
          console.error('Error al cargar el archivo episode-list.json:', error);
        });
    } else {
      console.error('No se proporcionó ningún parámetro de episodio en la URL.');
    }
  }
  
  // Cargar el episodio correspondiente cuando se cargue la página
  loadEpisodeFromQuery();