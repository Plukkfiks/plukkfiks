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
