// --- NAVIGATION & HAMBURGER MENU ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Toggle Menu Function
function toggleMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// Close menu when a link is clicked
if (links) {
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });
}

// --- CLICK OUTSIDE TO CLOSE MENU (Mobile) ---
document.addEventListener('click', (e) => {
    // Check if menu is open
    if (navLinks.classList.contains('active')) {
        // If click is NOT inside nav-links AND NOT on the hamburger button
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    }
});

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

// --- EXTRACURRICULAR ACCORDION ---
const toggleCards = document.querySelectorAll('.toggle-card');

toggleCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Prevent the card from toggling if the user clicked a link/button inside it
        if (e.target.closest('a') || e.target.closest('button')) {
            return;
        }
        
        // Toggle the 'active' class
        this.classList.toggle('active');
    });
});