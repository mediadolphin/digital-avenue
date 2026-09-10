/* Digital Avenue – Prototyp: Navigation, Zielgruppen-Umschalter, Digital-Check-Formular, Reveal */
(function () {
  'use strict';

  /* Navigation: Schatten beim Scrollen, Drawer auf Mobil */
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav-burger');
  var drawer = document.querySelector('.nav-drawer');

  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Menü öffnen'); var u = burger.querySelector('use'); if (u) u.setAttribute('href', '#i-menu'); }
    document.body.style.overflow = '';
  }
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = !drawer.classList.contains('open');
      drawer.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      var use = burger.querySelector('use'); if (use) use.setAttribute('href', open ? '#i-x' : '#i-menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeDrawer); });
    window.addEventListener('resize', function () { if (window.innerWidth > 960) closeDrawer(); });
    if (/drawer/.test(location.search)) burger.click();
  }

  /* Zielgruppen-Umschalter (Startseite) */
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = root.querySelectorAll('[role="tab"]');
    var panels = root.querySelectorAll('[role="tabpanel"]');
    function activate(id) {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', String(t.getAttribute('aria-controls') === id)); });
      panels.forEach(function (p) { p.classList.toggle('active', p.id === id); });
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () { activate(t.getAttribute('aria-controls')); });
      t.addEventListener('keydown', function (e) {
        var list = Array.prototype.slice.call(tabs), i = list.indexOf(t);
        if (e.key === 'ArrowRight') { list[(i + 1) % list.length].focus(); list[(i + 1) % list.length].click(); }
        if (e.key === 'ArrowLeft') { list[(i - 1 + list.length) % list.length].focus(); list[(i - 1 + list.length) % list.length].click(); }
      });
    });
    var initial = root.getAttribute('data-tabs');
    if (initial) activate(initial);
  });

  /* Digital-Check: Dialog öffnen, validieren, Erfolgszustand */
  var dialog = document.getElementById('check-dialog');
  if (dialog) {
    var form = dialog.querySelector('form');
    var lastTrigger = null;

    function openDialog(trigger) {
      lastTrigger = trigger || null;
      closeDrawer();
      dialog.classList.remove('sent');
      if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
      var first = dialog.querySelector('input[name="name"]');
      if (first) setTimeout(function () { first.focus(); }, 50);
      var audience = trigger && trigger.getAttribute('data-audience');
      if (audience) {
        var radio = dialog.querySelector('input[name="audience"][value="' + audience + '"]');
        if (radio) radio.checked = true;
      }
    }
    function closeDialog() {
      if (dialog.open) dialog.close(); else dialog.removeAttribute('open');
      if (lastTrigger) lastTrigger.focus();
    }
    document.querySelectorAll('[data-open-check]').forEach(function (btn) {
      btn.addEventListener('click', function (e) { e.preventDefault(); openDialog(btn); });
    });
    dialog.querySelectorAll('[data-close-check]').forEach(function (btn) { btn.addEventListener('click', closeDialog); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) closeDialog(); });

    function setInvalid(input, invalid) {
      var field = input.closest('.field');
      if (field) field.classList.toggle('invalid', invalid);
      input.setAttribute('aria-invalid', String(invalid));
    }
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = true;
        var name = form.querySelector('input[name="name"]');
        var contact = form.querySelector('input[name="contact"]');
        var privacy = form.querySelector('input[name="privacy"]');
        if (!name.value.trim()) { setInvalid(name, true); ok = false; } else setInvalid(name, false);
        var c = contact.value.trim();
        var looksLikeMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
        var looksLikePhone = /^[+\d][\d\s\/\-().]{5,}$/.test(c);
        if (!(looksLikeMail || looksLikePhone)) { setInvalid(contact, true); ok = false; } else setInvalid(contact, false);
        if (privacy && !privacy.checked) { setInvalid(privacy, true); ok = false; } else if (privacy) setInvalid(privacy, false);
        if (!ok) {
          var firstInvalid = form.querySelector('.field.invalid input');
          if (firstInvalid) firstInvalid.focus();
          return;
        }
        var btn = form.querySelector('button[type="submit"]');
        btn.disabled = true; btn.textContent = 'Wird gesendet …';
        setTimeout(function () {
          dialog.classList.add('sent');
          btn.disabled = false; btn.textContent = 'Digital-Check anfragen';
          var okBtn = dialog.querySelector('.form-success .da-btn-primary');
          if (okBtn) okBtn.focus();
          form.reset();
        }, 700);
      });
      form.querySelectorAll('input').forEach(function (i) {
        i.addEventListener('input', function () { setInvalid(i, false); });
      });
    }
  }

  /* Reveal beim Scrollen */
  if (/noreveal/.test(location.search)) document.body.classList.add('no-reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* Aktive Seite in der Navigation */
  var page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.nav-menu a, .nav-drawer a').forEach(function (a) {
      if (a.getAttribute('data-page') === page) a.setAttribute('aria-current', 'page');
    });
  }
})();
