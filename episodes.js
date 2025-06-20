import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js';

const episodes = [
    {
        id: 1,
        season: 1,
        number: 1,
        title: "Reinicio del Sistema",
        description: "Frankie descubre su verdadera naturaleza y comienza su viaje de autodescubrimiento.",
        thumbnail: "NICKELODEON_IAMFRANKIE_101_HD_374416_1920x1080.jpg",
        videoUrl: "//sendvid.com/embed/a623mq3o",
        fullDescription: "En este primer episodio, Frankie se enfrenta a la revelación de su verdadera identidad como un androide único. Su viaje de autodescubrimiento comienza cuando empieza a comprender la complejidad de sus emociones y su lugar en el mundo.",
        keyMoments: [
            "Primer encuentro con su verdadera naturaleza",
            "Desafíos iniciales de adaptación",
            "Primeras interacciones con humanos"
        ]
    },
    {
        id: 2,
        season: 1,
        number: 5,
        title: "Conexión de Red",
        description: "Frankie navega por interacciones sociales complejas mientras mantiene su identidad android.",
        thumbnail: "episode5-thumb.png",
        videoUrl: "#",
        fullDescription: "Un episodio que explora los desafíos de Frankie para integrarse socialmente mientras mantiene en secreto su naturaleza robótica.",
        keyMoments: [
            "Situaciones sociales delicadas",
            "Manejo de relaciones interpersonales",
            "Equilibrio entre su identidad humana y android"
        ]
    },
    // Más episodios pueden agregarse aquí
];

// Exportar los episodios para poder usarlos en otras páginas
export { episodes };

document.addEventListener('DOMContentLoaded', () => {
    const episodesContainer = document.querySelector('.episodes-container');
    const seasonFilter = document.getElementById('filtro-temporada');

    function renderEpisodes(filteredEpisodes) {
        episodesContainer.innerHTML = '';
        filteredEpisodes.forEach(episode => {
            const episodeCard = document.createElement('div');
            episodeCard.classList.add('episode-card');
            episodeCard.innerHTML = `
                <img src="${episode.thumbnail}" alt="${episode.title}">
                <div class="episode-info">
                    <h3>T${episode.season} E${episode.number}: ${episode.title}</h3>
                    <p>${episode.description}</p>
                    <a href="episodio.html?id=${episode.id}" class="neon-button">Ver Detalles</a>
                </div>
            `;
            episodesContainer.appendChild(episodeCard);

            // Animaciones al pasar el mouse
            episodeCard.addEventListener('mouseenter', () => {
                gsap.to(episodeCard, {
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)',
                    duration: 0.3
                });
            });

            episodeCard.addEventListener('mouseleave', () => {
                gsap.to(episodeCard, {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3
                });
            });
        });
    }

    // Renderizado inicial
    renderEpisodes(episodes);

    // Filtrado por temporada (si existe el filtro de temporada)
    if (seasonFilter) {
        seasonFilter.addEventListener('change', (e) => {
            const selectedSeason = e.target.value;
            const filteredEpisodes = selectedSeason === 'all' 
                ? episodes 
                : episodes.filter(ep => ep.season === parseInt(selectedSeason.replace('season', '')));
            renderEpisodes(filteredEpisodes);
        });
    }
});