(function () {
  const navbarContainer = document.getElementById('navbar');
  if (!navbarContainer) return;

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const navItems = [
    { href: 'index.html', label: 'Home', icon: '', page: 'index.html' },
    { href: 'reserve.html', label: 'Reserve', icon: '', page: 'reserve.html' },
    { href: 'fleet.html', label: 'Fleet', icon: '', page: 'fleet.html' },
    { href: 'deals.html', label: 'Deals', icon: '', page: 'deals.html' },
    { href: 'locations.html', label: 'Locations', icon: '', page: 'locations.html' },
    { href: 'support.html', label: 'Support', icon: '', page: 'support.html' }
  ];

  const links = navItems.map((item) => {
    const isActive = currentPage === item.page;
    return `
      <li class="nav-item">
        <a class="nav-link${isActive ? ' active' : ''}" href="${item.href}"${isActive ? ' aria-current="page"' : ''}>
          <span class="nav-icon" aria-hidden="true">${item.icon}</span>
          <span>${item.label}</span>
        </a>
      </li>`;
  }).join('');

  navbarContainer.innerHTML = `
    <style>
      #navbar .navbar-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.15rem;
        letter-spacing: 0.02em;
      }
      #navbar .qcar-logo {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
      }
      #navbar .qcar-logo svg {
        width: 22px;
        height: 22px;
        stroke: #169b45;
        stroke-width: 2.2;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      #navbar .nav-link {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0.55rem 0.75rem;
        border-radius: 6px;
      }
      #navbar .nav-icon {
        font-size: 0.95rem;
        line-height: 1;
      }
    </style>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <span class="qcar-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 8h10l3 4h3"></path>
              <circle cx="8" cy="16" r="2"></circle>
              <circle cx="18" cy="16" r="2"></circle>
              <path d="M8 8V6h8"></path>
            </svg>
          </span>
          <span><strong>QCar</strong></span>
        </a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto">
            ${links}
          </ul>
        </div>
      </div>
    </nav>`;
})();
