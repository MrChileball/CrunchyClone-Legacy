
// función asíncrona para leer datos de episodios ubicados en 
async function getEpisodes() {
    let listFile = 'episodes.json';

    try {
        let res = await fetch(listFile);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderEpisodes(){

    let users = await getEpisodes();
    let htmlContent = '';
    console.log(users);
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
                        <button  onclick="window.location.href = '/series/snk/seasons/1/shingeki-season1.html?ep=1'" class="flex button">
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

        console.log("Contenido añadido a la variable HtmlContent");
        htmlContent += htmlSegment;
        
    });

    let container = document.querySelector('.chapter-list');
    console.log("Variable container guardada");
    container.innerHTML = htmlContent;
    console.log("innerhtml listo")

}
setTimeout(() => {
    renderEpisodes();
  }, "1000");

