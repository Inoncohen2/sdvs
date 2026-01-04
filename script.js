document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => console.error(err));
    }

    gsap.registerPlugin(ScrollTrigger);

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('#custom-cursor');
    const cursorDot = document.querySelector('#custom-cursor-dot');

    if (cursor && cursorDot) {
        window.addEventListener('mousemove', (e) => {
            // Smooth movement for the outer ring
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power2.out'
            });
            // Instant movement for the dot
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        });

        // Interactive Elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .hover-lift, .nav-item');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, {
                    scale: 1.8,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    duration: 0.3
                });
                gsap.to(cursorDot, {
                    scale: 0.5,
                    opacity: 0.5,
                    duration: 0.3
                });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    duration: 0.3
                });
                gsap.to(cursorDot, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3
                });
            });
        });
    }

    // --- Global Animations ---
    gsap.from('.nav-item', {
        duration: 0.8,
        y: -20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Homepage Specific
    if (document.querySelector('.hero-section')) {
        gsap.to('.hero-section', { duration: 1.5, opacity: 1, y: 0, ease: 'power4.out', startAt: { y: 40 } });
        gsap.to('.article-card', { 
            scrollTrigger: { trigger: '.article-card', start: 'top 85%' },
            duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: 'power3.out', startAt: { y: 50 } 
        });
        gsap.to('.sidebar-card', {
            scrollTrigger: { trigger: '.sidebar-card', start: 'top 90%' },
            duration: 1, opacity: 1, x: 0, stagger: 0.15, ease: 'power2.out', startAt: { x: 30 }
        });
    }

    // About Page
    if (document.querySelector('.about-title')) {
        const aboutTl = gsap.timeline();
        aboutTl.to('.about-title', { duration: 1, opacity: 1, y: 0, startAt: { y: 30 }, ease: 'power3.out' })
               .to('.about-content', { duration: 1, opacity: 1, y: 0, startAt: { y: 20 }, ease: 'power3.out' }, '-=0.6');
    }

    // Contact Page
    if (document.querySelector('.contact-header')) {
        gsap.to('.contact-header', { duration: 1, opacity: 1, y: 0, stagger: 0.2, startAt: { y: 20 }, ease: 'power3.out' });
        gsap.to('.form-field', { duration: 0.8, opacity: 1, y: 0, stagger: 0.1, delay: 0.4, startAt: { y: 20 }, ease: 'power2.out' });
    }

    // Footer
    gsap.to('footer', { scrollTrigger: { trigger: 'footer', start: 'top bottom-=50' }, duration: 1, opacity: 1, ease: 'power2.out' });

    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-sm', 'bg-white/90');
        } else {
            nav.classList.remove('shadow-sm', 'bg-white/90');
        }
    });
});