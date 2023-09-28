document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const startupAnimation = document.querySelector('.startup-animation');
    const startupSound = new Audio('startup-sound.mp3'); // Endre til riktig lydfil

    // Spill oppstartslyden
    startupSound.oncanplaythrough = () => {
        startupSound.play();
    };

    // Start oppstartsanimasjonen
    setTimeout(() => {
        startupAnimation.style.animation = 'fadeOut 1s ease forwards';
        content.style.animation = 'fadeInContent 2s ease forwards';
        startupAnimation.addEventListener('animationend', () => {
            startupAnimation.style.display = 'none'; // Skjul oppstartsanimasjonen
            startupSound.pause(); // Pause lyden
        });
    }, 5000); // Endre til riktig varighet for din animasjon
});
