import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js';

const episodes = [
    {
        id: 1,
        season: 1,
        number: 1,
        title: "Reinicio del Sistema",
        description: "Frankie descubre su verdadera naturaleza y comienza su viaje de autodescubrimiento.",
        thumbnail: "NICKELODEON_IAMFRANKIE_101_HD_374416_1920x1080.jpg"
    },
    {
        id: 2,
        season: 1,
        number: 5,
        title: "Conexión de Red",
        description: "Frankie navega por interacciones sociales complejas mientras mantiene su identidad android.",
        thumbnail: "episode5-thumb.png"
    },
    // Más episodios...
];

document.addEventListener('DOMContentLoaded', () => {
    // Animar sección de hero
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animación del episodio destacado
    gsap.from('.featured-episode-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animación de las tarjetas de episodios
    gsap.from('.episode-preview-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Animación del hover en las tarjetas de episodios
    const previewCards = document.querySelectorAll('.episode-preview-card');
    previewCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03,
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3
            });
        });
    });

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
                    <a href="#" class="neon-button">Ver Episodio</a>
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

    // Filtrado por temporada
    seasonFilter.addEventListener('change', (e) => {
        const selectedSeason = e.target.value;
        const filteredEpisodes = selectedSeason === 'all' 
            ? episodes 
            : episodes.filter(ep => ep.season === parseInt(selectedSeason.replace('season', '')));
        renderEpisodes(filteredEpisodes);
    });

    // Efectos de hover para tarjetas de sección
    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3
            });
        });
    });
});