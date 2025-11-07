document.addEventListener('DOMContentLoaded', () => {
    const season1Btn = document.getElementById('season1-btn');
    const season2Btn = document.getElementById('season2-btn');
    const season1List = document.getElementById('season1');
    const season2List = document.getElementById('season2');

    // Datos de los episodios (puedes expandir esto con títulos reales)
    const episodesS1 = Array.from({ length: 20 }, (_, i) => `Episodio ${i + 1}`);
    const episodesS2 = Array.from({ length: 21 }, (_, i) => `Episodio ${i + 1}`);

    function generateEpisodeCards(seasonNumber, episodeTitles, container) {
        container.innerHTML = ''; // Limpiar la lista
        episodeTitles.forEach((title, index) => {
            const episodeNumber = index + 1;
            const card = document.createElement('div');
            card.className = 'episode-card';
            card.innerHTML = `
                <div class="episode-thumbnail">
                    <img src="temporada${seasonNumber}-episodio${episodeNumber}.jpg" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="episode-title">${title}</div>
            `;
            container.appendChild(card);
        });
    }

    // Generar episodios al cargar la página
    generateEpisodeCards(1, episodesS1, season1List);
    generateEpisodeCards(2, episodesS2, season2List);

    // Event listener para el botón de la Temporada 1
    season1Btn.addEventListener('click', () => {
        season1List.style.display = 'grid';
        season2List.style.display = 'none';
        season1Btn.classList.add('active');
        season2Btn.classList.remove('active');
    });

    // Event listener para el botón de la Temporada 2
    season2Btn.addEventListener('click', () => {
        season2List.style.display = 'grid';
        season1List.style.display = 'none';
        season2Btn.classList.add('active');
        season1Btn.classList.remove('active');
    });
});
