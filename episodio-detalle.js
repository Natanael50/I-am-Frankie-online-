import { episodes } from './episodes.js';
import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js';

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del episodio de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const episodeId = parseInt(urlParams.get('id'));

    // Encontrar el episodio correspondiente
    const episode = episodes.find(ep => ep.id === episodeId);

    if (episode) {
        // Actualizar elementos del DOM
        document.getElementById('episode-video').src = episode.videoUrl;
        document.getElementById('episode-title').textContent = `${episode.title}`;
        document.getElementById('episode-season-number').textContent = `Temporada ${episode.season}, Episodio ${episode.number}`;
        document.getElementById('episode-description').textContent = episode.description;

        // Añadir momentos clave
        const keyMomentsList = document.getElementById('key-moments-list');
        // Since keyMoments is not defined in the episodes.js, we will comment this section
        // episode.keyMoments.forEach(moment => {
        //     const li = document.createElement('li');
        //     li.textContent = moment;
        //     keyMomentsList.appendChild(li);
        // });

        // Animaciones GSAP
        gsap.from('#episode-hero', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.episode-info-container', {
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        });
    } else {
        // Manejar caso de episodio no encontrado
        document.getElementById('episode-detail').innerHTML = '<p>Episodio no encontrado</p>';
    }
});