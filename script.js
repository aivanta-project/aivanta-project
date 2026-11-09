(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('themeToggle');
  const themeIcon = themeButton.querySelector('.theme-icon');
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, persist = true) {
    root.dataset.theme = theme;
    themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    metaTheme.setAttribute('content', theme === 'dark' ? '#1F1B24' : '#F8F4EA');
    if (persist) {
      try { localStorage.setItem('aivanta-theme', theme); } catch (_) {}
    }
  }
  applyTheme(root.dataset.theme || 'light', false);
  themeButton.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));

  const filters = [...document.querySelectorAll('.filter-button')];
  const cards = [...document.querySelectorAll('.project-card')];
  const search = document.getElementById('projectSearch');
  const empty = document.getElementById('emptyState');
  let activeFilter = 'all';

  function updateProjects() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const tags = card.dataset.tags.split(' ');
      const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);
      const matchesQuery = !query || (card.dataset.name + ' ' + card.textContent).toLowerCase().includes(query);
      const show = matchesFilter && matchesQuery;
      card.hidden = !show;
      if (show) visible++;
    });
    empty.hidden = visible !== 0;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    updateProjects();
  }));
  search.addEventListener('input', updateProjects);

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();