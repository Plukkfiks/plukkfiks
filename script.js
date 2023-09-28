function redirectToVipps() {
    const vippSum = 80;  // Fast pris på 80 kr
    const vippNummer = 'DITT_VIPPS_NUMMER';  // Ditt Vipps-nummer

    const vippURL = `vipps://vipp?amount=${vippSum}&receiverId=${vippNummer}&message=Opptenningsved`;
    window.location.href = vippURL;
}
