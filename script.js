// Configura la biblioteca Anime.js para las animaciones
anime({
    targets: '.animate__animated',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: anime.stagger(200)
});
