/* Ananta Home — main.js */

// Nav: transparent over hero, white on scroll
(function () {
  var nav = document.getElementById('main-nav');
  if (!nav) return;

  var THRESHOLD = 80;

  function updateNav() {
    if (window.scrollY > THRESHOLD) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

// Mobile nav toggle
(function () {
  var toggle = document.getElementById('nav-toggle');
  var center = document.getElementById('nav-center');
  if (!toggle || !center) return;

  toggle.addEventListener('click', function () {
    var isOpen = center.classList.toggle('nav__center--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  center.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      center.classList.remove('nav__center--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Contact form submission is handled in contact.html inline script (with validation).
