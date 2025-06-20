const season1Episodes = [
    {
        id: 1,
        number: 1,
        title: "Reinicio del Sistema",
        description: "Frankie descubre su verdadera naturaleza y comienza su viaje de autodescubrimiento.",
        videoUrl: "//sendvid.com/embed/a623mq3o",
        thumbnail: "NICKELODEON_IAMFRANKIE_101_HD_374416_1920x1080.jpg",
        detailUrl: "html/episodio1temporada1.html"
    },
    {
        id: 2,
        number: 2,
        title: "Nuevos Amigos",
        description: "Frankie hace sus primeros amigos en la escuela mientras aprende a mantener su secreto.",
        videoUrl: "//sendvid.com/embed/avimic5h",
        thumbnail: "episode2-thumb.png",
        detailUrl: "html/episodio2temporada1.html"
    },
    {
        id: 3,
        number: 3,
        title: "Desafíos Escolares",
        description: "Frankie enfrenta nuevos retos en la escuela mientras intenta parecer normal.",
        videoUrl: "//sendvid.com/embed/7drlk9s5",
        thumbnail: "episode3-thumb.png",
        detailUrl: "html/episodio3temporada1.html"
    },
    {
        id: 4,
        number: 4,
        title: "Secretos y Revelaciones",
        description: "La identidad de Frankie comienza a tambalearse mientras lucha por mantener su secreto.",
        videoUrl: "//sendvid.com/embed/8gtoyd42",
        thumbnail: "episode4-thumb.png",
        detailUrl: "html/episodio4temporada1.html"
    },
    {
        id: 5,
        number: 5,
        title: "Conexión de Red",
        description: "Frankie navega por interacciones sociales complejas mientras mantiene su identidad android.",
        videoUrl: "//sendvid.com/embed/gp5zwi2l",
        thumbnail: "episode5-thumb.png",
        detailUrl: "html/episodio5temporada1.html"
    },
    {
        id: 6,
        number: 6,
        title: "Pruebas y Lealtades",
        description: "Nuevos desafíos ponen a prueba la capacidad de Frankie para mantener su verdadera naturaleza en secreto.",
        videoUrl: "//sendvid.com/embed/ab4puk1v",
        thumbnail: "episode6-thumb.png",
        detailUrl: "html/episodio6temporada1.html"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const episodesGrid = document.querySelector('.episodes-grid');

    season1Episodes.forEach(episode => {
        const episodeCard = document.createElement('div');
        episodeCard.classList.add('episode-card');
        episodeCard.innerHTML = `
            <div class="episode-thumb">
                <img src="${episode.thumbnail}" alt="${episode.title}">
                <div class="episode-overlay">
                    <div class="episode-number">Episodio ${episode.number}</div>
                    <a href="${episode.detailUrl}" class="neon-button">
                        <i class="fas fa-play"></i>
                        Ver Episodio
                    </a>
                </div>
            </div>
            <div class="episode-content">
                <h3>${episode.title}</h3>
                <p>${episode.description}</p>
            </div>
        `;

        // Añadir efectos de hover con GSAP
        episodeCard.addEventListener('mouseenter', () => {
            gsap.to(episodeCard.querySelector('img'), {
                scale: 1.1,
                duration: 0.3
            });
            gsap.to(episodeCard, {
                boxShadow: '0 0 30px rgba(0,229,255,0.3)',
                duration: 0.3
            });
        });

        episodeCard.addEventListener('mouseleave', () => {
            gsap.to(episodeCard.querySelector('img'), {
                scale: 1,
                duration: 0.3
            });
            gsap.to(episodeCard, {
                boxShadow: 'none',
                duration: 0.3
            });
        });

        episodesGrid.appendChild(episodeCard);
    });
});