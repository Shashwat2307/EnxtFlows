// ============================================================
// EnxtFlows – Application Logic
// ============================================================

// ── Utility: generate star rating HTML ──
function renderStars(rating) {
    let html = '';
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    for (let i = 0; i < full; i++) html += '★';
    for (let i = 0; i < half; i++) html += '★';
    for (let i = 0; i < empty; i++) html += '☆';
    return html;
}

// ── Utility: get category icon for product images ──
function getCategoryIcon(categoryId) {
    const icons = {
        'all-industries': '🧠',
        'real-estate': '🏠',
        'fintech': '💰',
        'healthcare': '🏥',
        'filmmaking-media': '🎬',
        'services': '⚙️'
    };
    return icons[categoryId] || '🧠';
}

// ── Render a product card ──
function renderProductCard(product) {
    const category = getCategoryById(product.category);
    return `
    <a href="pages/product.html?id=${product.id}" class="ef-product-card">
      <div class="ef-product-image" style="background: ${product.image}">
        <span class="ef-product-image-icon">${getCategoryIcon(product.category)}</span>
        ${product.badge ? `<span class="ef-product-badge">${product.badge}</span>` : ''}
      </div>
      <div class="ef-product-info">
        <div class="ef-product-category-tag">${category ? category.name : ''}</div>
        <div class="ef-product-name">${product.name}</div>
        <div class="ef-product-tagline">${product.tagline}</div>
        <div class="ef-product-rating">
          <span class="ef-stars">${renderStars(product.rating)}</span>
          <span class="ef-rating-count">${product.reviews.toLocaleString()}</span>
        </div>
        <div class="ef-product-price">
          <strong>${product.price}</strong>
        </div>
      </div>
    </a>
  `;
}

// ── Render a category card ──
function renderCategoryCard(category, count) {
    return `
    <a href="pages/category.html?id=${category.id}" class="ef-category-card">
      <span class="ef-category-icon">${category.icon}</span>
      <div class="ef-category-name">${category.name}</div>
      <div class="ef-category-count">${count} product${count !== 1 ? 's' : ''}</div>
    </a>
  `;
}

// ── Render header HTML ──
function renderHeader(basePath = '') {
    return `
    <header class="ef-header">
      <div class="ef-header-top">
        <a href="${basePath}index.html" class="ef-logo">
          <div>
            Enxt<span>Flows</span>
            <span class="ef-logo-slogan">Save your ETM</span>
          </div>
        </a>

        <div class="ef-search-bar">
          <select class="ef-search-select" id="searchCategory">
            <option value="">All Categories</option>
            ${CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
          </select>
          <input type="text" class="ef-search-input" id="searchInput" placeholder="Search AI products & services..." />
          <button class="ef-search-btn" id="searchBtn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="#131921" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>

        <div class="ef-header-actions">
          <a class="ef-header-link" href="${basePath}index.html">
            <small>Hello, Enterprise</small>
            <strong>Account ▾</strong>
          </a>
          <a class="ef-header-link" href="${basePath}index.html">
            <small>Returns</small>
            <strong>& Orders</strong>
          </a>
        </div>
      </div>

      <nav class="ef-subnav">
        <div class="ef-subnav-inner">
          <a href="${basePath}index.html" class="ef-subnav-link">☰ All</a>
          ${CATEGORIES.map(c => `<a href="${basePath}pages/category.html?id=${c.id}" class="ef-subnav-link">${c.name}</a>`).join('')}
          <a href="#" class="ef-subnav-link">Today's Deals</a>
          <a href="#" class="ef-subnav-link">Enterprise Solutions</a>
          <a href="#" class="ef-subnav-link">Customer Service</a>
        </div>
      </nav>
    </header>
  `;
}

// ── Render footer HTML ──
function renderFooter(basePath = '') {
    return `
    <div class="ef-footer-back">
      <a href="#" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Back to top</a>
    </div>
    <footer class="ef-footer">
      <div class="ef-footer-grid">
        <div class="ef-footer-col">
          <h4>Get to Know Us</h4>
          <a href="#">About EnxtFlows</a>
          <a href="#">Careers</a>
          <a href="#">Press Releases</a>
          <a href="#">EnxtFlows Science</a>
        </div>
        <div class="ef-footer-col">
          <h4>Connect with Us</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
        <div class="ef-footer-col">
          <h4>Make Money with Us</h4>
          <a href="#">List Your AI Product</a>
          <a href="#">Become a Partner</a>
          <a href="#">Advertise Your Product</a>
          <a href="#">Enterprise Programs</a>
        </div>
        <div class="ef-footer-col">
          <h4>Let Us Help You</h4>
          <a href="#">Your Account</a>
          <a href="#">Enterprise Support</a>
          <a href="#">Help Center</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
      <div class="ef-footer-bottom">
        <div class="ef-footer-logo">Enxt<span>Flows</span></div>
        <div class="ef-footer-copy">© 2026 EnxtFlows. All rights reserved. Save your ETM.</div>
      </div>
    </footer>
  `;
}

// ── Setup search functionality ──
function setupSearch(basePath = '') {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');
    const catSelect = document.getElementById('searchCategory');

    function doSearch() {
        const query = input.value.trim();
        const category = catSelect.value;
        if (query || category) {
            const params = new URLSearchParams();
            if (query) params.set('q', query);
            if (category) params.set('cat', category);
            window.location.href = `${basePath}pages/search.html?${params.toString()}`;
        }
    }

    if (btn) btn.addEventListener('click', doSearch);
    if (input) input.addEventListener('keypress', (e) => { if (e.key === 'Enter') doSearch(); });
}

// ── Highlight active subnav links ──
function highlightSubnav() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('id');
    document.querySelectorAll('.ef-subnav-link').forEach(link => {
        if (categoryId && link.href.includes(`id=${categoryId}`)) {
            link.classList.add('active');
        }
    });
}
