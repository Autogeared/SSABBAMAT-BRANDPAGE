/* ============================================
   SSA.BBA.MAT Brand Page — main.js
   ============================================ */

(function () {
    'use strict';

    var nav = document.getElementById('nav');
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    var menuTabs = document.querySelectorAll('.menu__tab');
    var menuCards = document.querySelectorAll('.menu__card');
    var fadeEls = document.querySelectorAll('.fade-in');

    /* ---------- Menu Data ---------- */
    var menuData = {
        '삼겹살덮밥': {
            category: '덮밥',
            name: '삼겹살 덮밥',
            kcal: '약 650 kcal',
            composition: ['삼겹살', '흰쌀밥', '양배추', '양파', '대파', '특제소스']
        },
        '우삼겹덮밥': {
            category: '덮밥',
            name: '우삼겹 덮밥',
            kcal: '약 620 kcal',
            composition: ['우삼겹', '흰쌀밥', '양배추', '양파', '대파', '특제소스']
        },
        '닭어깨살덮밥': {
            category: '덮밥',
            name: '닭어깨살 덮밥',
            kcal: '약 550 kcal',
            composition: ['닭어깨살', '흰쌀밥', '양배추', '양파', '대파', '특제소스']
        },
        '삼겹살파스타보울': {
            category: '파스타보울',
            name: '삼겹살 파스타보울',
            kcal: '약 680 kcal',
            composition: ['삼겹살', '파스타면', '양배추', '양파', '파프리카', '특제소스']
        },
        '우삼겹파스타보울': {
            category: '파스타보울',
            name: '우삼겹 파스타보울',
            kcal: '약 650 kcal',
            composition: ['우삼겹', '파스타면', '양배추', '양파', '파프리카', '특제소스']
        },
        '닭어깨살파스타보울': {
            category: '파스타보울',
            name: '닭어깨살 파스타보울',
            kcal: '약 580 kcal',
            composition: ['닭어깨살', '파스타면', '양배추', '양파', '파프리카', '특제소스']
        },
        '삼겹살샐러드보울': {
            category: '샐러드보울',
            name: '삼겹살 샐러드보울',
            kcal: '약 450 kcal',
            composition: ['삼겹살', '믹스샐러드', '토마토', '옥수수', '삶은달걀', '드레싱']
        },
        '우삼겹샐러드보울': {
            category: '샐러드보울',
            name: '우삼겹 샐러드보울',
            kcal: '약 420 kcal',
            composition: ['우삼겹', '믹스샐러드', '토마토', '옥수수', '삶은달걀', '드레싱']
        },
        '닭어깨살샐러드보울': {
            category: '샐러드보울',
            name: '닭어깨살 샐러드보울',
            kcal: '약 380 kcal',
            composition: ['닭어깨살', '믹스샐러드', '토마토', '옥수수', '삶은달걀', '드레싱']
        }
    };

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

    /* ---------- Menu: Modal ---------- */
    var modal = document.getElementById('menuModal');
    var modalImg = document.getElementById('modalImg');
    var modalCategory = document.getElementById('modalCategory');
    var modalName = document.getElementById('modalName');
    var modalKcal = document.getElementById('modalKcal');
    var modalComp = document.getElementById('modalComp');
    var modalClose = modal.querySelector('.modal__close');
    var modalBackdrop = modal.querySelector('.modal__backdrop');

    function openModal(card) {
        var key = card.getAttribute('data-menu');
        var data = menuData[key];
        if (!data) return;

        var imgSrc = card.querySelector('.menu__card-img img').src;
        modalImg.src = imgSrc;
        modalImg.alt = data.name;
        modalCategory.textContent = data.category;
        modalName.textContent = data.name;
        modalKcal.textContent = data.kcal;

        modalComp.innerHTML = '';
        data.composition.forEach(function (item) {
            var li = document.createElement('li');
            li.textContent = item;
            modalComp.appendChild(li);
        });

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    menuCards.forEach(function (card) {
        card.addEventListener('click', function () {
            openModal(card);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

})();
