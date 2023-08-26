function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Función para cargar el contenido del episodio según el valor de "ep"
  function cargarEpisodio(episodeNumber) {
    // Leer el archivo JSON para obtener los datos de los episodios
    fetch('/series/snk/shingeki-episodes.json')
      .then(response => response.json())
      .then(data => {
        const episodeData = data.episodes[episodeNumber - 1]; // Los episodios comienzan desde 1, pero el array comienza desde 0
        const dataNext = data.episodes[episodeNumber];
        if (episodeData) {
          document.getElementById('episodeTitle').innerText = episodeData.title;
          document.getElementById('episodeDescription').innerText = episodeData.description;
          document.getElementById('episodeSource').src = episodeData.source;
        } else {
          alert('Episodio no válido');
        }
        if(dataNext){
          
          document.getElementById('nextEpisodeTitle').innerText = dataNext.title;
          if (episodeData.image) {
            document.getElementById('nextEpisodeImage').src = dataNext.image;
          } else {
            document.getElementById('nextEpisodeImage').style.display = 'none'; // Oculta la imagen si no hay una URL de imagen
          }
        } else {
          console.alert('VIDEOPLAYER| Episodio no existente');
        }
      })
      .catch(error => {
        console.error('Error al cargar los datos de los episodios:', error);
      });
  }

  // Llamar a la función cargarEpisodio al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    const episodeNumber = getQueryParam('ep');
    if (episodeNumber) {
      cargarEpisodio(Number(episodeNumber));
    } else {
      alert('Episodio no especificado en la URL');
    }

// Crear el botón de episodio siguiente
const button = document.createElement('button');

button.classList.add("button");
button.classList.add("flex");
button.classList.add('next-episode-button');

 // Crear el elemento svg
 const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
 svg.classList.add("icon-tabler");
 svg.classList.add("icon-tabler-player-play");
 svg.setAttribute("width", "32");
 svg.setAttribute("height", "32");
 svg.setAttribute("viewBox", "0 0 24 24");
 svg.setAttribute("stroke-width", "2");
 svg.setAttribute("stroke", "currentColor");
 svg.setAttribute("fill", "none");
 svg.setAttribute("stroke-linecap", "round");
 svg.setAttribute("stroke-linejoin", "round");
 svg.innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path>';

 // Crear el elemento p
 const p = document.createElement('p');
 p.textContent = 'reproducir';

 // Agregar los elementos al botón
 button.appendChild(svg);
 button.appendChild(p);

 // Encontrar el div con la clase next-episode
 const nextEpisodeDiv = document.querySelector('.containerNext');

 // Agregar el botón al div
 if (nextEpisodeDiv) {
     nextEpisodeDiv.appendChild(button);
 }

  });



