// Timeline Interactivity
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        console.log(`Switched to step ${item.dataset.step}`);
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
