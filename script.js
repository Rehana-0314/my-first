// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
        }
    });
});

// Favorite Button Toggle
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.textContent = this.textContent === '♥' ? '♡' : '♥';
        this.style.color = this.textContent === '♥' ? '#ef4444' : 'initial';
    });
});

// Newsletter Form
const subscribeForm = document.querySelector('.subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = subscribeForm.querySelector('input').value;
    if (email) {
        alert('Thank you for subscribing! You will receive our updates soon.');
        subscribeForm.querySelector('input').value = '';
    }
});

// Intersection Observer for Smooth Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animations to sections and cards
document.querySelectorAll('section, .category-card, .product-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// Add fade-in class for animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Optional: Close the mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Optional: Keypress to close the mobile menu (Esc key)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
    }
});

// Optionally, add 'active' class to the menu button when the menu is active
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
}
);

