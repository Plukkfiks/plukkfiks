document.addEventListener('DOMContentLoaded', () => {
    const startupAnimation = document.querySelector('.startup-animation');
    const startupSound = new Audio('startup-sound.mp3'); // Endre til din lydfilssti

    // Spill oppstartslyden
    startupSound.oncanplaythrough = () => {
        startupSound.play();
    };

    // Start oppstartsanimasjonen
    setTimeout(() => {
        startupAnimation.style.animation = 'custom-startup-animation 5s ease forwards';
        startupAnimation.addEventListener('animationend', () => {
            startupAnimation.style.display = 'none'; // Skjul oppstartsanimasjonen
            // Pause lyden etter at animasjonen er ferdig
            startupSound.pause();
        });
    }, 100); // Endre til riktig varighet for din animasjon
});
function redirectToVipps() {
    const vippSum = 80;  // Fast pris på 80 kr
    const vippNummer = 'DITT_VIPPS_NUMMER';  // Ditt Vipps-nummer

    const vippURL = `vipps://vipp?amount=${vippSum}&receiverId=${vippNummer}&message=Opptenningsved`;
    window.location.href = vippURL;
}

