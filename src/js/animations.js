export function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Select elements to animate
    const elementsToAnimate = document.querySelectorAll('.section-title, .about-content, .timeline-item, .project-card, .skills-category');

    elementsToAnimate.forEach((el, index) => {
        el.classList.add('reveal');
        // Add staggered delay to grid items
        if (el.classList.contains('project-card') || el.classList.contains('skills-category')) {
            el.style.transitionDelay = `${(index % 3) * 100}ms`;
        }
        observer.observe(el);
    });
}
