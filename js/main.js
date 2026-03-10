/* ============================================
   SSA.BBA.MAT Brand Page — main.js
   ============================================ */

(function () {
    'use strict';

    var nav = document.getElementById('nav');
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    var heroPattern = document.querySelector('.hero__pattern');
    var menuTabs = document.querySelectorAll('.menu__tab');
    var menuCards = document.querySelectorAll('.menu__card');
    var fadeEls = document.querySelectorAll('.fade-in');

    /* ---------- Navigation: Scroll Background ---------- */
    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    /* ---------- Navigation: Hamburger Toggle ---------- */
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    /* ---------- Hero: Parallax Pattern ---------- */
    window.addEventListener('scroll', function () {
        if (!heroPattern) return;
        var scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroPattern.style.transform = 'translateY(' + scrollY * 0.3 + 'px)';
        }
    }, { passive: true });

    /* ---------- Scroll Fade-In ---------- */
    if ('IntersectionObserver' in window) {
        var fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        fadeEls.forEach(function (el) {
            fadeObserver.observe(el);
        });
    } else {
        fadeEls.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    /* ---------- Menu: Tab Filtering ---------- */
    menuTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            menuTabs.forEach(function (t) { t.classList.remove('active'); });
            tab.classList.add('active');

            var category = tab.getAttribute('data-category');

            menuCards.forEach(function (card) {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                    if (!card.classList.contains('visible')) {
                        card.classList.add('visible');
                    }
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

})();
