// --- NAVIGATION & HAMBURGER MENU ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Toggle Menu on Click
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Close menu when a link is clicked (for single page scrolling)
if (links) {
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });
}

// --- SMOOTH SCROLLING ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- EXTRACURRICULAR ACCORDION (NEW) ---
const toggleCards = document.querySelectorAll('.toggle-card');

toggleCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide content
        card.classList.toggle('active');
    });
});