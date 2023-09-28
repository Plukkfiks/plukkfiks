document.addEventListener('DOMContentLoaded', () => {
    const startupAnimation = document.querySelector('.startup-animation img');
    const startupSound = new Audio('startup-sound.mp3'); // Endre til din lydfilssti

    // Spill oppstartslyden
    startupSound.oncanplaythrough = () => {
        startupSound.play();
    };

    // Start oppstartsanimasjonen
    setTimeout(() => {
        startupAnimation.style.animation = 'fadeOut 1s ease forwards';
        startupAnimation.addEventListener('animationend', () => {
            startupAnimation.style.display = 'none'; // Skjul oppstartsanimasjonen
            startupSound.pause(); // Pause lyden
        });
    }, 5000); // Endre til riktig varighet for din animasjon
});
