document.addEventListener('DOMContentLoaded', () => {
    const startupAnimation = document.querySelector('.startup-animation');
    startupAnimation.style.display = 'none';  // Skjul oppstartsanimasjonen
});

function redirectToVipps() {
    const vippSum = 80;  // Fast pris på 80 kr
    const vippNummer = '94193690';  // Ditt Vipps-nummer

    const vippURL = `vipps://vipp?amount=${vippSum}&receiverId=${vippNummer}&message=Opptenningsved`;
    window.location.href = vippURL;
}