// Lito Landing Page Scripts
(function () {
  // ---- Navbar scroll ----
  var nav = document.getElementById('ln');
  var hero = document.querySelector('.hero');

  function updateNav() {
    if (!hero || !nav) return;
    nav.classList.toggle('scrolled', window.scrollY > hero.offsetHeight - 80);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ---- Mobile menu ----
  var menuBtn = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      menuBtn.classList.toggle('active', open);
      menuBtn.setAttribute('aria-expanded', open);
    });
  }

  // ---- Theme toggle ----
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var isDark = document.documentElement.classList.toggle('dark');
      document.documentElement.classList.toggle('light', !isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // ---- Scroll reveals ----
  var els = document.querySelectorAll('[data-reveal]');
  // Skip hero children (they use CSS animation)
  var revealEls = [];
  for (var i = 0; i < els.length; i++) {
    if (!els[i].closest('.hero')) revealEls.push(els[i]);
  }

  if (revealEls.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var parent = el.parentElement;
        var siblings = parent
          ? Array.prototype.filter.call(parent.children, function (c) { return c.hasAttribute('data-reveal'); })
          : [el];
        var idx = siblings.indexOf(el);
        setTimeout(function () { el.classList.add('revealed'); }, idx * 80);
        obs.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    for (var j = 0; j < els.length; j++) els[j].classList.add('revealed');
  }

  // ---- Terminal typing ----
  var cmd = 'npx @litodocs/cli init';
  var typedEl = document.getElementById('typed');
  var cursorEl = document.getElementById('cursor');
  var ci = 0;

  function typeNext() {
    if (!typedEl) return;
    if (ci < cmd.length) {
      typedEl.textContent += cmd[ci];
      ci++;
      setTimeout(typeNext, 55 + Math.random() * 35);
    } else {
      setTimeout(function () {
        if (cursorEl) cursorEl.style.display = 'none';
        showOut();
      }, 500);
    }
  }

  function showOut() {
    ['o1', 'o2', 'o3'].forEach(function (id, i) {
      setTimeout(function () {
        var el = document.getElementById(id);
        if (!el) return;
        el.style.display = 'flex';
        void el.offsetHeight;
        el.classList.add('show');
      }, i * 600);
    });
  }

  setTimeout(typeNext, 900);
})();
