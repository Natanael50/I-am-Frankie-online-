const season2Episodes = [
    {
        id: 1,
        number: 1,
        title: "Nuevos Desafíos",
        description: "Frankie regresa para una nueva temporada de aventuras y descubrimientos.",
        videoUrl: "URL_DEL_VIDEO"
    },
    {
        id: 2,
        number: 2,
        title: "Secretos Revelados",
        description: "Más androides aparecen y Frankie debe proteger su identidad más que nunca.",
        videoUrl: "URL_DEL_VIDEO"
    },
    // Añadir más episodios de la temporada 2
];

document.addEventListener('DOMContentLoaded', () => {
    const episodesGrid = document.querySelector('.episodes-grid');

    season2Episodes.forEach(episode => {
        const episodeCard = document.createElement('div');
        episodeCard.classList.add('episode-card');
        episodeCard.innerHTML = `
            <div class="episode-number">Episodio ${episode.number}</div>
            <h3>${episode.title}</h3>
            <p>${episode.description}</p>
            <iframe width="100%" height="215" src="${episode.videoUrl}" frameborder="0" allowfullscreen></iframe>
        `;
        episodesGrid.appendChild(episodeCard);
    });
});

