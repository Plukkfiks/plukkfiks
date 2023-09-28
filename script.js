let isContentVisible = false;

function toggleContent() {
    const contentSection = document.getElementById('content');
    contentSection.classList.toggle('show', !isContentVisible);

    const shopSection = document.getElementById('shop-section');
    const contactSection = document.getElementById('contact-section');
    const categoriesSection = document.getElementById('categories');

    shopSection.classList.toggle('show', isContentVisible);
    contactSection.classList.toggle('show', isContentVisible);
    categoriesSection.classList.toggle('show', isContentVisible);

    const button = document.querySelector('.scroll-button button');
    button.classList.toggle('clicked', isContentVisible);
    isContentVisible = !isContentVisible;
}

function redirectToShop() {
    playClickSound();
    // Implement your redirection to the shop here
    console.log('Redirecting to the shop...');
}

function showContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.style.display = 'block';
}

function contactViaEmail() {
    playClickSound();
    // Implement your email contact functionality here
    console.log('Contacting via email...');
}

function contactViaSMS() {
    playClickSound();
    // Implement your SMS contact functionality here
    console.log('Contacting via SMS...');
}

function showCategories() {
    const categories = document.getElementById('categories');
    categories.style.display = 'block';
}

function redirectToProducts() {
    playClickSound();
    window.location.href = "produkter.html";
}

function redirectToArticle(articleUrl) {
    playClickSound();
    window.location.href = articleUrl;
}

// Function to play the click sound
function playClickSound() {
    const clickSound = new Audio('click-sound.mp3');
    clickSound.play();
}

// After 5 seconds, show the content with a fade-in animation
setTimeout(() => {
    content.classList.add('show');
    content.addEventListener('animationend', () => {
        startupAnimation.style.display = 'none'; // Hide startup animation
    });
}, 5000);

// Add a click listener to play the sound when the user clicks anywhere on the page
document.addEventListener('click', () => {
    if (!soundPlayed) {
        startupSound.play();
        soundPlayed = true;
    }
});
