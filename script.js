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
    // Implement your redirection to the shop here
    console.log('Redirecting to the shop...');
}

function showContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.style.display = 'block';
}

function contactViaEmail() {
    // Implement your email contact functionality here
    console.log('Contacting via email...');
}

function contactViaSMS() {
    // Implement your SMS contact functionality here
    console.log('Contacting via SMS...');
}

function showCategories() {
    const categories = document.getElementById('categories');
    categories.style.display = 'block';
}

function redirectToProducts() {
    window.location.href = "produkter.html";
}

function redirectToArticle(articleUrl) {
    window.location.href = articleUrl;
}
function playClickSound() {
    const clickSound = new Audio('click-sound.mp3'); // Sti til lydfilen

    // Sjekk om lydfilen er lastet før vi prøver å spille den
    clickSound.oncanplaythrough = () => {
        clickSound.play();
    };
}

function redirectToProducts() {
    playClickSound();
    window.location.href = "produkter.html";
}

function redirectToArticle(articleUrl) {
    playClickSound();
    window.location.href = articleUrl;
}

    // Etter 5 sekunder, vis innholdet med en fade-in-animasjon
    setTimeout(() => {
        content.classList.add('show');
        content.addEventListener('animationend', () => {
            startupAnimation.style.display = 'none'; // Skjul oppstartsanimasjonen
        });
    }, 5000);

    // Legg til en klikk-lytter for å spille av lyden når brukeren klikker hvor som helst på siden
    document.addEventListener('click', () => {
        if (!soundPlayed) {
            startupSound.play();
            soundPlayed = true;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const startupAnimation = document.querySelector('.startup-animation');
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


