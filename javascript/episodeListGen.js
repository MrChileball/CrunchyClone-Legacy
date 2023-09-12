// Obtiene la url completa en la que se encuentra y elimina index.html
let href = window.location.href.slice(0, window.location.href.length - 10);;
// Añade el prefix player.html para redireccionar al reproductor de episodios
let playerHref = href + "player.html";
console.log(href);
console.log(playerHref);
let episodeCounter = 1; //contador para valor de ?ep=1 en los botones de cada episodio


// función asíncrona para leer datos de episodios ubicados en un archivo JSON
async function getEpisodes(season) {
    let listFile = 'episodes.json';
    try {
        let res = await fetch(listFile);
        let data = await res.json();
        // Asegúrate de que season sea uno de los valores válidos (s1, s2, s3, s4, music)
        if (data.hasOwnProperty(season)) {
            return data[season];
        } else {
            console.error(`No se encontró la temporada "${season}" en el archivo JSON.`);
            return [];
        }
    } catch (error) {
        console.log(error);
    }
}


async function renderEpisodes(season){
    //Lee los datos de un string en base al valor de la variable season
    let users = await getEpisodes(season);
    let htmlContent = '';
    users.forEach(episode => {
    
        let htmlSegment = `
        <div class="chapter-item">
                <picture>
                    <source srcset="" type="image/webp">
                    <img class="b-lazy preview-banner" loading="lazy"  src="${episode.image}" alt="A ti, 2,000 años en el futuro. La caída de Shiganshina - Primera Parte" loading="lazy" data-t="card-image">
                </picture>
                <div style="width: 100%;">
                    <p>Attack on titan - S1</p>
                    <div class="chapter-text">
                        <h4 class="custom-padding">${episode.title}</h4>
                        <button  onclick="window.location.href = '${playerHref}?s=${season}&ep=${episodeCounter}'" class="flex button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-player-play" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 4v16l13 -8z"></path>
                             </svg>
                             <p>reproducir</p>

                        </button>
                    </div>                            
                    
                </div>

            </div>
        `;

        htmlContent += htmlSegment;
        episodeCounter = episodeCounter + 1;
        
        
    });

    let container = document.querySelector('.chapter-list');
    container.innerHTML = htmlContent;
    episodeCounter = 1;

}
// Script que añade listeners a cada botón selector de temporada o categoría
const links = document.querySelectorAll('.dropdown-content a');

        // Busca un elemento con clase chapter-list
        const chapterList = document.querySelector('.chapter-list');

        //por cada elemento de tipo a hijo de un elemento clase dropdown-content, crea un bucle
        links.forEach(link => {
            //añade un listener de click, cada vez que clickea
            link.addEventListener('click', function(event) {
                event.preventDefault();
                //busca el atributo data-season que contiene el elemento HTML
                const season = this.getAttribute('data-season');
                //renderiza una categoría nueva en base al atributo
                renderEpisodes(season);
            });
        });

// Espera cerca de un segundo para ejecutar el renderEpisodes con el arg. s1 (Primera temporada)
setTimeout(() => {
    renderEpisodes("s1");
  }, "1000");


