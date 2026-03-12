// ==========================================
// CASE STUDIES PAGE SCRIPTS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initFilters();
    initCardExpand();
    initNavScroll();
    initMobileMenu();
    initSmoothScroll();
});

// ==========================================
// ANIMATIONS ON SCROLL
// ==========================================
function initAOS() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// CATEGORY FILTER
// ==========================================
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.cs-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('expanded');
                }
            });
        });
    });
}

// ==========================================
// CARD EXPAND / COLLAPSE
// ==========================================
function initCardExpand() {
    const headers = document.querySelectorAll('.cs-card-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.cs-card');
            card.classList.toggle('expanded');
        });
    });
}

// ==========================================
// NAV SCROLL BEHAVIOR
// ==========================================
function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = target.offsetTop - 120;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });
}
