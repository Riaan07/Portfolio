(() => {
    'use strict';
    const menuButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('#primary-nav');
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const closeMenu = () => { menu.classList.remove('open'); 
        menuButton.setAttribute('aria-expanded', 'false'); 
        menuButton.setAttribute('aria-label', 'Open navigation'); 
    };
    menuButton.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => { if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); 
    });
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); 
    });
    }, { rootMargin: '-30% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    document.querySelector('#year').textContent = new Date().getFullYear();
    if (window.lucide) window.lucide.createIcons();
})();
