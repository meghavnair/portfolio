// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add animation to the projects when they come into view (scrolling animation)
const projectItems = document.querySelectorAll('.project-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}, {
    threshold: 0.1 // Trigger the animation when 10% of the project is in view
});

projectItems.forEach(item => {
    observer.observe(item);
});

// Optional: Button hover effect
const ctaButtons = document.querySelectorAll('.cta-btn, .view-all-projects');

ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover-effect');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover-effect');
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initial Call
animateOnScroll();
// JavaScript to add floating effect while scrolling
document.addEventListener('scroll', function () {
    const floatingElements = document.querySelectorAll('.float-on-scroll');
    const triggerPoint = window.innerHeight / 1.2;

    floatingElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('floating');
        } else {
            element.classList.remove('floating');
        }
    });
});
// JavaScript to trigger fade-in effect on scroll
window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});

