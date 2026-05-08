(function () {
  const MAX_CARD_COLORS = 9;

  // Filter state
  const state = {
    search: '',
    line: 'all',
    gramMin: null,
    gramMax: null,
    widths: new Set(),
    ligamentos: new Set(),
    applications: new Set(),
    colorSearch: '',
    selectionMode: false,
    selectedCodes: new Set(),
    quickMaterials: new Set(),
    compareMode: false,
    compareCodes: new Set()   // max 4
  };

  // ─── Helpers ─────────────────────────────────────────────────
  const colorCodeFrom = str => str.split(' ')[0];
  const compositionText = comp => comp.map(c => `${c.material} ${c.percentage}%`).join(' · ');
  const compositionLines = comp => comp.map(c => `<span class="comp-line"><strong>${c.percentage}%</strong> ${c.material}</span>`).join('');
  const fabricImagePath      = code => `${code}.jpg`;
  const fabricThumbPath      = code => `${code}-thumb.jpg`;
  const fabricOriginalPath   = code => `_backup_originais/${code}.jpg`;

  // Ícones das instruções de lavagem (na mesma ordem de washingInstructions)
  // Seguem o estilo de símbolos têxteis (tina/balde + modificadores) quando aplicável
  const washIcons = [
    // 1. Lavar separadamente — duas camisetas lado a lado
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l1.5-1.5h2l1 1 1-1h2L12 6l-1.2.8V13H4.2V6.8L3 6z"/><path d="M13 6l1.5-1.5h2l1 1 1-1h2L22 6l-1.2.8V13h-6.6V6.8L13 6z"/><line x1="12" y1="16" x2="12" y2="20"/></svg>',

    // 2. Lavagem manual — tina com mão dentro (símbolo ISO de lavagem à mão)
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l2-4h16l2 4"/><path d="M3 9l1.5 10a2 2 0 0 0 2 1.7h11a2 2 0 0 0 2-1.7L21 9"/><path d="M9 13v-2a1 1 0 0 1 2 0v2"/><path d="M11 13v-3.5a1 1 0 0 1 2 0V13"/><path d="M13 13v-2.5a1 1 0 0 1 2 0v3.5"/><path d="M15 11.5a1 1 0 0 1 2 0V14"/></svg>',

    // 3. Não misturar cores — duas bolinhas (clara/escura) com proibição
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4" fill="currentColor" fill-opacity="0.35"/><circle cx="12" cy="12" r="10.5"/><line x1="4.5" y1="19.5" x2="19.5" y2="4.5"/></svg>',

    // 4. Não friccionar — mão esfregando com proibição
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 14v-3a1 1 0 0 1 2 0v2"/><path d="M9 12v-4a1 1 0 0 1 2 0v4"/><path d="M11 8V6a1 1 0 0 1 2 0v6"/><path d="M13 9a1 1 0 0 1 2 0v5a4 4 0 0 1-4 4H9a3 3 0 0 1-3-3v-3"/><path d="M4 17l4 3"/><circle cx="12" cy="12" r="10.5"/><line x1="4.5" y1="19.5" x2="19.5" y2="4.5"/></svg>',

    // 5. Não misturar leves com pesadas — pena + peso
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3c3 0 4 3 4 6s-2 5-5 5H4l5-5h-3l5-6z"/><path d="M4 14l-1 7"/><path d="M15 15l-1-2h6l-1 2"/><rect x="13" y="15" width="8" height="6" rx="1"/><path d="M17 12v1"/></svg>',

    // 6. Enxaguar com água em abundância — tina com várias gotas
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 11l2-4h16l2 4"/><path d="M3 11l1.5 8a2 2 0 0 0 2 1.7h11a2 2 0 0 0 2-1.7L21 11"/><path d="M8 14c0 1 1 1.5 1 2.5S8 18 8 18s-1-.5-1-1.5S8 14 8 14z" fill="currentColor"/><path d="M12 13c0 1 1 1.5 1 2.5S12 17 12 17s-1-.5-1-1.5S12 13 12 13z" fill="currentColor"/><path d="M16 14c0 1 1 1.5 1 2.5S16 18 16 18s-1-.5-1-1.5S16 14 16 14z" fill="currentColor"/></svg>',

    // 7. Temperatura ambiente — tina com um ponto (símbolo ISO: 1 ponto = lavagem fria)
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l2-4h16l2 4"/><path d="M3 9l1.5 10a2 2 0 0 0 2 1.7h11a2 2 0 0 0 2-1.7L21 9"/><circle cx="12" cy="14" r="1.5" fill="currentColor"/></svg>',

    // 8. Não deixar de molho — tina com X (proibido)
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l2-4h16l2 4"/><path d="M3 9l1.5 10a2 2 0 0 0 2 1.7h11a2 2 0 0 0 2-1.7L21 9"/><line x1="5" y1="21" x2="19" y2="5"/><line x1="5" y1="5" x2="19" y2="21"/></svg>',

    // 9. Não torcer — pano torcido com proibição (símbolo ISO clássico)
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><circle cx="12" cy="12" r="10.5"/><line x1="4.5" y1="19.5" x2="19.5" y2="4.5"/></svg>'
  ];

  function normalizeText(s) {
    return (s || '').toString().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Color search matching: returns true if the fabric has any color matching the query
  function fabricMatchesColorSearch(fabric, query) {
    if (!query) return true;
    const q = normalizeText(query);
    return fabric.colors.some(colorStr => {
      if (colorStr === 'N/A') return false;
      const code = colorCodeFrom(colorStr);
      const data = colorData[code];
      const fullName = data ? normalizeText(data.name) : normalizeText(colorStr);
      return fullName.includes(q) || normalizeText(code).includes(q);
    });
  }

  // Color should be highlighted (matched the search)?
  function colorMatchesSearch(colorStr, query) {
    if (!query || colorStr === 'N/A') return false;
    const q = normalizeText(query);
    const code = colorCodeFrom(colorStr);
    const data = colorData[code];
    const fullName = data ? normalizeText(data.name) : normalizeText(colorStr);
    return fullName.includes(q) || normalizeText(code).includes(q);
  }

  function colorImgSrc(data) {
    const noColor = data.pantone === 'Não encontrado' || data.pantone === 'Xadrez';
    if (noColor) return 'NA.png';
    return data.img && data.img !== 'NA.png' ? data.img : null;
  }

  function buildColorDot(colorStr, highlight) {
    if (colorStr === 'N/A') return '';
    const code = colorCodeFrom(colorStr);
    const data = colorData[code];
    if (!data) return '';
    const src = colorImgSrc(data);
    const bg = src === 'NA.png' ? '#C8C8C8' : (data.hex || '#ccc');
    const img = src ? `<img src="${src}" alt="${data.name}" loading="lazy" onerror="this.remove()">` : '';
    return `<div class="color-dot${highlight ? ' highlight' : ''}" style="background:${bg}" title="${data.name}">${img}</div>`;
  }

  function buildColorSwatch(colorStr, highlight) {
    if (colorStr === 'N/A') return '';
    const code = colorCodeFrom(colorStr);
    const data = colorData[code];
    if (!data) return '';
    const parts = data.name.split(' - ');
    const label = parts.length > 1 ? parts.slice(1).join(' - ') : data.name;
    const src = colorImgSrc(data);
    const bg = src === 'NA.png' ? '#C8C8C8' : (data.hex || '#ccc');
    const imgSrcFull = src && src !== 'NA.png' ? src : null;
    const img = src ? `<img src="${src}" alt="${data.name}" loading="lazy" onerror="this.remove()">` : '';
    return `
      <div class="color-item${highlight ? ' highlight' : ''}"${imgSrcFull ? ` data-color-img="${imgSrcFull}" title="Clique para ver a imagem completa"` : ''}>
        <div class="color-swatch" style="background:${bg}">${img}</div>
        <div class="color-item-info">
          <span class="color-item-code">${code}</span>
          <span class="color-item-name">${label}</span>
          ${data.pantone && data.pantone !== 'Não encontrado' && data.pantone !== 'Xadrez'
            ? `<span class="color-item-pantone">${data.pantone}</span>` : ''}
        </div>
      </div>`;
  }

  // ─── Filter options ──────────────────────────────────────────
  function allLines() {
    const set = new Set();
    fabrics.forEach(f => f.line.forEach(l => set.add(l)));
    return Array.from(set).sort();
  }
  function allWidths() {
    const set = new Set();
    fabrics.forEach(f => set.add(f.width));
    return Array.from(set).sort((a, b) => a - b);
  }
  function allLigamentos() {
    const set = new Set();
    fabrics.forEach(f => set.add(f.ligamento));
    return Array.from(set).sort();
  }
  function allApplications() {
    const set = new Set();
    fabrics.forEach(f => f.application.forEach(a => { if (a) set.add(a); }));
    return Array.from(set).sort();
  }
  function allMaterials() {
    const set = new Set();
    fabrics.forEach(f => f.composition.forEach(c => { if (c.material) set.add(c.material); }));
    return Array.from(set).sort();
  }
  function gramRange() {
    const vals = fabrics.map(f => f.gramWeight);
    return { min: Math.min(...vals), max: Math.max(...vals) };
  }

  function activeFilterCount() {
    let n = 0;
    if (state.gramMin != null) n++;
    if (state.gramMax != null) n++;
    n += state.widths.size;
    n += state.ligamentos.size;
    n += state.applications.size;
    n += state.quickMaterials.size;
    if (state.colorSearch) n++;
    return n;
  }

  // ─── Filtering ───────────────────────────────────────────────
  function filteredFabrics() {
    const q = normalizeText(state.search);
    return fabrics.filter(f => {
      // Busca por texto (nome ou código)
      if (q) {
        const nameOk = normalizeText(f.name).includes(q) || normalizeText(f.code).includes(q);
        if (!nameOk) return false;
      }

      // Segmento — seleção única
      if (state.line !== 'all' && !f.line.includes(state.line)) return false;

      // Gramatura
      if (state.gramMin != null && f.gramWeight < state.gramMin) return false;
      if (state.gramMax != null && f.gramWeight > state.gramMax) return false;

      // Largura — OR dentro do grupo (campo de valor único por tecido)
      if (state.widths.size && !state.widths.has(f.width)) return false;

      // Ligamento — OR dentro do grupo (campo de valor único por tecido)
      if (state.ligamentos.size && !state.ligamentos.has(f.ligamento)) return false;

      // Aplicações — AND: o tecido deve contemplar todas as aplicações selecionadas
      for (const app of state.applications) {
        if (!f.application.includes(app)) return false;
      }

      // Composição — OR: o tecido deve conter ao menos uma das composições selecionadas
      if (state.quickMaterials.size > 0) {
        const hasAny = [...state.quickMaterials].some(qm =>
          f.composition.some(c => normalizeText(c.material) === normalizeText(qm))
        );
        if (!hasAny) return false;
      }

      // Busca por cor
      if (state.colorSearch && !fabricMatchesColorSearch(f, state.colorSearch)) return false;
      return true;
    }).sort((a, b) => parseInt(a.code) - parseInt(b.code));
  }

  // ─── Dropdown helpers ─────────────────────────────────────────
  function openDropdown(id) {
    // Close all others first
    document.querySelectorAll('.dropdown.open').forEach(d => {
      if (d.id !== id) closeDropdown(d.id);
    });
    const dd = document.getElementById(id);
    if (dd) dd.classList.add('open');
    const btn = dd && dd.querySelector('[aria-expanded]');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
  function closeDropdown(id) {
    const dd = document.getElementById(id);
    if (dd) dd.classList.remove('open');
    const btn = dd && dd.querySelector('[aria-expanded]');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
  function toggleDropdown(id) {
    const dd = document.getElementById(id);
    if (dd && dd.classList.contains('open')) closeDropdown(id);
    else openDropdown(id);
  }

  // ─── Segment dropdown (single-select) ─────────────────────────
  function renderSegmentDropdown() {
    const lines = allLines();
    const list = document.getElementById('segment-list');

    const allOption = `<div class="dropdown-option single selected" data-value="all" role="option" aria-selected="true">Todos os segmentos</div>`;
    const opts = lines.map(l =>
      `<div class="dropdown-option single" data-value="${l}" role="option" aria-selected="false">${l}</div>`
    ).join('');

    list.innerHTML = allOption + `<div class="dropdown-divider"></div>` + opts;

    list.addEventListener('click', e => {
      const opt = e.target.closest('.dropdown-option');
      if (!opt) return;
      list.querySelectorAll('.dropdown-option').forEach(o => {
        o.classList.remove('selected');
        o.setAttribute('aria-selected', 'false');
      });
      opt.classList.add('selected');
      opt.setAttribute('aria-selected', 'true');
      state.line = opt.dataset.value;
      const btn = document.getElementById('segment-btn');
      document.getElementById('segment-label').textContent =
        state.line === 'all' ? 'Segmento' : state.line;
      btn.classList.toggle('active', state.line !== 'all');
      closeDropdown('segment-dropdown');
      renderGrid();
    });

    document.getElementById('segment-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleDropdown('segment-dropdown');
    });
  }

  // ─── Composição quick dropdown (multi-select) ────────────────
  function renderMaterialQuickDropdown() {
    const mats = allMaterials();
    const list = document.getElementById('material-quick-list');

    const optionsHtml = mats.map(m =>
      `<div class="dropdown-option" data-value="${m}" role="option" aria-selected="false">
        <span class="option-check">${checkSvg}</span>${m}
      </div>`
    ).join('');

    list.innerHTML = `
      <div class="dd-search-wrap">
        <input type="search" class="dd-search-input" id="mat-quick-search"
               placeholder="Buscar composição..." autocomplete="off">
      </div>
      <div class="dropdown-divider"></div>
      <div id="mat-quick-options">${optionsHtml}</div>`;

    const searchEl = list.querySelector('#mat-quick-search');
    const optionsEl = list.querySelector('#mat-quick-options');

    searchEl.addEventListener('input', () => {
      const q = normalizeText(searchEl.value);
      let anyVisible = false;
      optionsEl.querySelectorAll('.dropdown-option').forEach(opt => {
        const match = !q || normalizeText(opt.dataset.value).includes(q);
        opt.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      let noMatch = optionsEl.querySelector('.dd-no-match');
      if (!anyVisible) {
        if (!noMatch) {
          noMatch = document.createElement('div');
          noMatch.className = 'dd-no-match';
          noMatch.textContent = 'Nenhuma opção encontrada';
          optionsEl.appendChild(noMatch);
        }
      } else if (noMatch) noMatch.remove();
    });

    searchEl.addEventListener('click', e => e.stopPropagation());

    optionsEl.addEventListener('click', e => {
      const opt = e.target.closest('.dropdown-option');
      if (!opt) return;
      const val = opt.dataset.value;
      if (state.quickMaterials.has(val)) {
        state.quickMaterials.delete(val);
        opt.classList.remove('selected');
        opt.setAttribute('aria-selected', 'false');
      } else {
        state.quickMaterials.add(val);
        opt.classList.add('selected');
        opt.setAttribute('aria-selected', 'true');
      }
      updateQuickMaterialLabel();
      updateBadge();
      renderGrid();
    });

    document.getElementById('material-quick-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleDropdown('material-quick-dropdown');
      if (document.getElementById('material-quick-dropdown').classList.contains('open')) {
        setTimeout(() => searchEl.focus(), 50);
      }
    });
  }

  function updateQuickMaterialLabel() {
    const count = state.quickMaterials.size;
    const label = count === 0 ? 'Composição'
      : count === 1 ? [...state.quickMaterials][0]
      : `${count} selecionadas`;
    document.getElementById('material-quick-label').textContent = label;
    document.getElementById('material-quick-btn').classList.toggle('active', count > 0);
  }

  // ─── Render: advanced filters ────────────────────────────────
  function renderAdvancedFilters() {
    const { min, max } = gramRange();
    document.getElementById('gram-hint').textContent = `(faixa: ${min}–${max})`;
    document.getElementById('gram-min').min = min;
    document.getElementById('gram-min').max = max;
    document.getElementById('gram-max').min = min;
    document.getElementById('gram-max').max = max;

    const widthContainer = document.getElementById('width-filters');
    widthContainer.innerHTML = allWidths()
      .map(w => `<button class="pill" data-value="${w}">${w.toFixed(2)} m</button>`).join('');

    const ligContainer = document.getElementById('ligamento-filters');
    ligContainer.innerHTML = allLigamentos()
      .map(l => `<button class="pill" data-value="${l}">${l}</button>`).join('');

    bindPillGroup(widthContainer, state.widths, parseFloat);
    bindPillGroup(ligContainer, state.ligamentos, v => v);

    renderApplicationDropdown();
  }

  // ─── Application dropdown (multi-select) ──────────────────────
  const checkSvg = `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1.5 5 4 7.5 8.5 2.5"/></svg>`;

  function renderApplicationDropdown() {
    const apps = allApplications();
    const list = document.getElementById('application-list');

    const optionsHtml = apps.map(a =>
      `<div class="dropdown-option" data-value="${a}" role="option" aria-selected="false">
        <span class="option-check">${checkSvg}</span>${a}
      </div>`
    ).join('');

    list.innerHTML = `
      <div class="dd-search-wrap">
        <input type="search" class="dd-search-input" id="application-search"
               placeholder="Buscar aplicação..." autocomplete="off">
      </div>
      <div class="dropdown-divider"></div>
      <div id="application-options">${optionsHtml}</div>`;

    // Search/filter inside the dropdown
    const searchEl = list.querySelector('#application-search');
    const optionsEl = list.querySelector('#application-options');

    searchEl.addEventListener('input', () => {
      const q = normalizeText(searchEl.value);
      let anyVisible = false;
      optionsEl.querySelectorAll('.dropdown-option').forEach(opt => {
        const match = !q || normalizeText(opt.dataset.value).includes(q);
        opt.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      // Show "no results" hint when nothing matches
      let noMatch = optionsEl.querySelector('.dd-no-match');
      if (!anyVisible) {
        if (!noMatch) {
          noMatch = document.createElement('div');
          noMatch.className = 'dd-no-match';
          noMatch.textContent = 'Nenhuma opção encontrada';
          optionsEl.appendChild(noMatch);
        }
      } else if (noMatch) {
        noMatch.remove();
      }
    });

    // Stop search click from bubbling up to the outside-click handler
    searchEl.addEventListener('click', e => e.stopPropagation());

    // Option selection
    optionsEl.addEventListener('click', e => {
      const opt = e.target.closest('.dropdown-option');
      if (!opt) return;
      const val = opt.dataset.value;
      if (state.applications.has(val)) {
        state.applications.delete(val);
        opt.classList.remove('selected');
        opt.setAttribute('aria-selected', 'false');
      } else {
        state.applications.add(val);
        opt.classList.add('selected');
        opt.setAttribute('aria-selected', 'true');
      }
      updateApplicationLabel();
      updateBadge();
      renderGrid();
    });

    document.getElementById('application-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleDropdown('application-dropdown');
      // Focus search when opening
      if (document.getElementById('application-dropdown').classList.contains('open')) {
        setTimeout(() => searchEl.focus(), 50);
      }
    });
  }

  function updateApplicationLabel() {
    const count = state.applications.size;
    const label = count === 0 ? 'Todas'
      : count === 1 ? [...state.applications][0]
      : `${count} selecionadas`;
    document.getElementById('application-label').textContent = label;
    document.getElementById('application-btn').classList.toggle('active', count > 0);
  }

  function bindPillGroup(container, stateSet, parser) {
    container.addEventListener('click', e => {
      const pill = e.target.closest('.pill');
      if (!pill) return;
      const val = parser(pill.dataset.value);
      if (stateSet.has(val)) { stateSet.delete(val); pill.classList.remove('active'); }
      else { stateSet.add(val); pill.classList.add('active'); }
      updateBadge();
      renderGrid();
    });
  }

  function updateBadge() {
    const n = activeFilterCount();
    const badge = document.getElementById('filter-badge');
    badge.textContent = n;
    badge.classList.toggle('hidden', n === 0);
  }

  function clearFilters() {
    state.gramMin = null;
    state.gramMax = null;
    state.widths.clear();
    state.ligamentos.clear();
    state.applications.clear();
    state.colorSearch = '';
    document.getElementById('gram-min').value = '';
    document.getElementById('gram-max').value = '';
    document.getElementById('color-search').value = '';
    document.querySelectorAll('.advanced-panel .pill.active').forEach(p => p.classList.remove('active'));
    // Reset application dropdown
    document.getElementById('application-label').textContent = 'Todas';
    document.getElementById('application-btn').classList.remove('active');
    document.querySelectorAll('#application-list .dropdown-option').forEach(o => {
      o.classList.remove('selected');
      o.setAttribute('aria-selected', 'false');
      o.style.display = '';
    });
    const appSearch = document.getElementById('application-search');
    if (appSearch) appSearch.value = '';
    const noMatch = document.querySelector('#application-options .dd-no-match');
    if (noMatch) noMatch.remove();
    // Reset composição dropdown
    state.quickMaterials.clear();
    document.getElementById('material-quick-label').textContent = 'Composição';
    document.getElementById('material-quick-btn').classList.remove('active');
    document.querySelectorAll('#material-quick-list .dropdown-option').forEach(o => {
      o.classList.remove('selected');
      o.setAttribute('aria-selected', 'false');
      o.style.display = '';
    });
    const matQuickSearch = document.getElementById('mat-quick-search');
    if (matQuickSearch) matQuickSearch.value = '';
    const matQuickNoMatch = document.querySelector('#mat-quick-options .dd-no-match');
    if (matQuickNoMatch) matQuickNoMatch.remove();
    updateBadge();
    renderGrid();
  }

  // ─── Selection + Download ────────────────────────────────────
  function updateSelectionBar() {
    const bar = document.getElementById('selection-bar');
    const countEl = document.getElementById('selection-count');
    const csvBtn = document.getElementById('btn-download-csv');
    const pdfBtn = document.getElementById('btn-download-pdf');
    const n = state.selectedCodes.size;
    bar.classList.toggle('hidden', !state.selectionMode);
    if (state.selectionMode) {
      countEl.textContent = n === 0
        ? 'Nenhum tecido selecionado'
        : `${n} tecido${n !== 1 ? 's' : ''} selecionado${n !== 1 ? 's' : ''}`;
      csvBtn.disabled = n === 0;
      pdfBtn.disabled = n === 0;
    }
  }

  function toggleSelectionMode() {
    state.selectionMode = !state.selectionMode;
    if (!state.selectionMode) state.selectedCodes.clear();
    if (state.selectionMode && state.compareMode) cancelCompare();
    document.getElementById('select-toggle-btn').classList.toggle('active', state.selectionMode);
    renderGrid();
    updateSelectionBar();
  }

  function toggleCardSelection(code) {
    if (state.selectedCodes.has(code)) state.selectedCodes.delete(code);
    else state.selectedCodes.add(code);
    const card = document.querySelector(`.fabric-card[data-code="${code}"]`);
    if (card) {
      const sel = state.selectedCodes.has(code);
      card.classList.toggle('selected', sel);
      const check = card.querySelector('.card-select-check');
      if (check) check.classList.toggle('checked', sel);
    }
    updateSelectionBar();
  }

  function selectAllVisible() {
    const visible = filteredFabrics().map(f => f.code);
    const allSelected = visible.every(c => state.selectedCodes.has(c));
    visible.forEach(c => allSelected ? state.selectedCodes.delete(c) : state.selectedCodes.add(c));
    renderGrid();
    updateSelectionBar();
  }

  function cancelSelection() {
    state.selectionMode = false;
    state.selectedCodes.clear();
    document.getElementById('select-toggle-btn').classList.remove('active');
    renderGrid();
    updateSelectionBar();
  }

  function downloadCSV() {
    const selected = fabrics.filter(f => state.selectedCodes.has(f.code))
      .sort((a, b) => parseInt(a.code) - parseInt(b.code));
    if (!selected.length) return;

    const headers = ['Código','Nome','Segmentos','Gramatura (g/m²)','Largura (m)','Ligamento','Composição','Aplicações','Código Cor','Nome Cor','Pantone'];

    const rows = [];
    selected.forEach(f => {
      const base = [
        f.code,
        f.name,
        f.line.join(', '),
        f.gramWeight,
        f.width.toFixed(2),
        f.ligamento,
        f.composition.map(c => `${c.percentage}% ${c.material}`).join(', '),
        f.application.filter(a => a && a !== '#').join(', ')
      ];
      if (f.colors[0] === 'N/A') {
        rows.push([...base, '', 'Sob consulta', '']);
      } else {
        f.colors.forEach(colorStr => {
          const code = colorCodeFrom(colorStr);
          const data = colorData[code];
          const parts = data ? data.name.split(' - ') : [];
          const name = parts.length > 1 ? parts.slice(1).join(' - ') : (data ? data.name : colorStr);
          const pantone = data ? data.pantone : '';
          rows.push([...base, code, name, pantone]);
        });
      }
    });
    const csv = [headers, ...rows]
      .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tecidos-macias-${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadPDF() {
    const selected = fabrics.filter(f => state.selectedCodes.has(f.code))
      .sort((a, b) => parseInt(a.code) - parseInt(b.code));
    if (!selected.length) return;

    const date = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

    const rows = selected.map(f => {
      const comp = f.composition.map(c => `<span class="comp-row"><strong>${c.percentage}%</strong> ${c.material}</span>`).join('');
      const apps = f.application.filter(a => a && a !== '#').join(', ') || '—';
      const colorList = f.colors.filter(c => c !== 'N/A').join(', ') || 'Sob consulta';
      return `
        <div class="fabric-row">
          <div class="fabric-header">
            <span class="fabric-name">${f.name}</span>
            <span class="fabric-code">${f.code}</span>
          </div>
          <div class="fabric-specs">
            <div class="spec spec-full"><span class="spec-label">Composição</span><div class="spec-value comp-stack">${comp}</div></div>
            <div class="spec"><span class="spec-label">Gramatura</span><span class="spec-value">${f.gramWeight} g/m²</span></div>
            <div class="spec"><span class="spec-label">Largura</span><span class="spec-value">${f.width} m</span></div>
            <div class="spec"><span class="spec-label">Ligamento</span><span class="spec-value">${f.ligamento}</span></div>
          </div>
          <div class="fabric-lines">${f.line.map(l => `<span class="tag">${l}</span>`).join('')}</div>
          <div class="fabric-applications"><span class="spec-label">Aplicações: </span>${apps}</div>
          <div class="fabric-colors"><span class="spec-label">Cores: </span>${colorList}</div>
        </div>`;
    }).join('');

    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Tecidos Selecionados — Macias</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; padding: 2.2cm 2cm; font-size: 10.5pt; }
    .doc-header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2.5px solid #192a44; padding-bottom: 0.9rem; margin-bottom: 1.4rem; }
    .doc-title { font-size: 17pt; font-weight: 800; color: #192a44; }
    .doc-sub { font-size: 9pt; color: #777; margin-top: 0.25rem; }
    .doc-date { font-size: 8.5pt; color: #888; text-align: right; margin-top: 0.2rem; }
    .fabric-row { border: 1px solid #dedad4; border-radius: 6px; padding: 0.85rem 1rem; margin-bottom: 0.7rem; page-break-inside: avoid; break-inside: avoid; }
    .fabric-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.55rem; }
    .fabric-name { font-size: 12.5pt; font-weight: 700; color: #192a44; }
    .fabric-code { font-size: 8.5pt; background: #f0ede8; padding: 2px 8px; border-radius: 4px; font-family: 'Courier New', monospace; font-weight: 700; color: #555; }
    .fabric-specs { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.35rem 1.2rem; margin-bottom: 0.5rem; }
    .spec { display: flex; flex-direction: column; gap: 2px; }
    .spec-full { grid-column: 1 / -1; }
    .spec-label { font-size: 7pt; text-transform: uppercase; letter-spacing: 0.06em; color: #999; font-weight: 700; }
    .spec-value { font-size: 9.5pt; font-weight: 600; }
    .comp-stack { display: flex; flex-direction: column; gap: 1px; }
    .comp-row { font-size: 9.5pt; font-weight: 400; }
    .comp-row strong { font-weight: 700; }
    .fabric-lines { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 0.4rem; }
    .tag { font-size: 7.5pt; padding: 2px 7px; border-radius: 3px; background: #e0f0fb; color: #005f8a; font-weight: 600; }
    .fabric-applications, .fabric-colors { font-size: 8.5pt; color: #555; margin-top: 0.25rem; line-height: 1.5; }
    .fabric-applications .spec-label, .fabric-colors .spec-label { font-size: 7pt; letter-spacing: 0.05em; color: #999; font-weight: 700; text-transform: uppercase; }
    .doc-footer { margin-top: 1.8rem; padding-top: 0.65rem; border-top: 1px solid #dedad4; font-size: 7.5pt; color: #aaa; text-align: center; line-height: 1.7; }
    @media print { body { padding: 1.5cm; } .fabric-row { page-break-inside: avoid; } }
  </style>
</head>
<body>
  <div class="doc-header">
    <div>
      <div class="doc-title">Catálogo de Tecidos — Macias</div>
      <div class="doc-sub">${selected.length} ${selected.length === 1 ? 'tecido selecionado' : 'tecidos selecionados'}</div>
    </div>
    <div class="doc-date">${date}</div>
  </div>
  ${rows}
  <div class="doc-footer">
    Todos os códigos Pantone® são aproximações. Todos os direitos reservados para Macias®.
  </div>
  <script>window.onload = function() { window.print(); };<\/script>
</body>
</html>`;

    const win = window.open('', '_blank');
    if (win) { win.document.write(html); win.document.close(); }
  }

  // ─── Compare ─────────────────────────────────────────────────
  const MAX_COMPARE = 4;

  function toggleCompareMode() {
    state.compareMode = !state.compareMode;
    if (!state.compareMode) state.compareCodes.clear();
    if (state.compareMode && state.selectionMode) cancelSelection();
    document.getElementById('compare-toggle-btn').classList.toggle('active', state.compareMode);
    renderGrid();
    updateCompareBar();
  }

  function cancelCompare() {
    state.compareMode = false;
    state.compareCodes.clear();
    document.getElementById('compare-toggle-btn').classList.remove('active');
    document.getElementById('compare-bar').classList.add('hidden');
    renderGrid();
  }

  function toggleCompareCard(code) {
    if (state.compareCodes.has(code)) {
      state.compareCodes.delete(code);
    } else {
      if (state.compareCodes.size >= MAX_COMPARE) return;
      state.compareCodes.add(code);
    }
    updateCompareBadges();
    updateCompareBar();
  }

  function updateCompareBadges() {
    const arr = [...state.compareCodes];
    document.querySelectorAll('#fabric-grid .fabric-card').forEach(card => {
      const code = card.dataset.code;
      const idx  = arr.indexOf(code);
      card.classList.toggle('compare-selected', idx >= 0);
      const badge = card.querySelector('.card-compare-badge');
      if (badge) {
        badge.textContent = idx >= 0 ? idx + 1 : '';
        badge.classList.toggle('visible', idx >= 0);
      }
    });
  }

  function updateCompareBar() {
    const bar   = document.getElementById('compare-bar');
    const slots = document.getElementById('compare-slots');
    const btn   = document.getElementById('btn-compare-now');
    bar.classList.toggle('hidden', !state.compareMode);
    if (!state.compareMode) return;

    const arr = [...state.compareCodes];
    const slotsHtml = Array.from({ length: MAX_COMPARE }, (_, i) => {
      if (arr[i]) {
        const f = fabrics.find(fab => fab.code === arr[i]);
        if (!f) return '';
        const thumb = fabricThumbPath(f.code);
        const full  = fabricImagePath(f.code);
        return `
          <div class="compare-slot filled" data-code="${f.code}">
            <img src="${thumb}" alt="${f.name}" onerror="this.src='${full}'">
            <div class="compare-slot-info">
              <span class="compare-slot-name">${f.name}</span>
              <span class="compare-slot-code">${f.code}</span>
            </div>
            <button class="compare-slot-remove" data-code="${f.code}" aria-label="Remover">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>`;
      }
      return `<div class="compare-slot empty">+ Adicionar</div>`;
    }).join('');

    slots.innerHTML = slotsHtml;

    const n = arr.length;
    btn.disabled    = n < 2;
    btn.textContent = n < 2 ? `Selecione ${2 - n} mais` : `Comparar (${n})`;

    slots.querySelectorAll('.compare-slot-remove').forEach(removeBtn => {
      removeBtn.addEventListener('click', e => {
        e.stopPropagation();
        state.compareCodes.delete(removeBtn.dataset.code);
        updateCompareBadges();
        updateCompareBar();
      });
    });
  }

  function openCompareView() {
    const arr = [...state.compareCodes];
    if (arr.length < 2) return;
    const fabs = arr.map(c => fabrics.find(f => f.code === c)).filter(Boolean);
    document.getElementById('compare-view-body').innerHTML = renderCompareTable(fabs);
    document.getElementById('compare-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeCompareView() {
    document.getElementById('compare-overlay').classList.add('hidden');
    document.body.style.overflow = '';
  }

  function renderCompareTable(fabs) {
    const n = fabs.length;
    const cols = `repeat(${n}, 1fr)`;
    const minW = Math.max(n * 220, 500) + 'px';

    function allSame(vals) { return vals.every(v => v === vals[0]); }

    // Header
    const header = fabs.map(f => {
      const thumb = fabricThumbPath(f.code);
      const full  = fabricImagePath(f.code);
      return `
        <div class="cmp-col-header">
          <div class="cmp-fabric-img">
            <img src="${thumb}" alt="${f.name}" onerror="this.src='${full}'">
          </div>
          <div class="cmp-fabric-name">${f.name}</div>
          <div class="cmp-fabric-code">Cód. ${f.code}</div>
          <div class="cmp-fabric-lines">
            ${f.line.map(l => `<span class="line-tag">${l}</span>`).join('')}
          </div>
        </div>`;
    }).join('');

    // Row builder
    function row(label, cellsHtml) {
      return `
        <div class="cmp-row">
          <div class="cmp-row-label">${label}</div>
          <div class="cmp-row-cells" style="grid-template-columns:${cols}">${cellsHtml}</div>
        </div>`;
    }

    // Composição
    const compCells = fabs.map(f => `
      <div class="cmp-cell">
        ${f.composition.map(c => `
          <div class="cmp-comp-item">
            <div class="comp-bar-track"><div class="comp-bar-fill" style="width:${c.percentage}%"></div></div>
            <span>${c.material} — ${c.percentage}%</span>
          </div>`).join('')}
      </div>`).join('');

    // Gramatura
    const gramVals = fabs.map(f => String(f.gramWeight));
    const gramCells = fabs.map(f =>
      `<div class="cmp-cell${allSame(gramVals) ? '' : ' cmp-diff'}">${f.gramWeight} g/m²</div>`
    ).join('');

    // Largura
    const widthVals = fabs.map(f => f.width.toFixed(2));
    const widthCells = fabs.map(f =>
      `<div class="cmp-cell${allSame(widthVals) ? '' : ' cmp-diff'}">${f.width.toFixed(2)} m</div>`
    ).join('');

    // Ligamento
    const ligVals = fabs.map(f => f.ligamento);
    const ligCells = fabs.map(f =>
      `<div class="cmp-cell${allSame(ligVals) ? '' : ' cmp-diff'}">${f.ligamento}</div>`
    ).join('');

    // Aplicações
    const appCells = fabs.map(f => {
      const apps = f.application.filter(a => a && a !== '#');
      return `<div class="cmp-cell">${apps.length
        ? apps.map(a => `<span class="tag">${a}</span>`).join('')
        : '<span class="cmp-empty">—</span>'}</div>`;
    }).join('');

    // Cores
    const cs = state.colorSearch;
    const colorCells = fabs.map(f => {
      if (f.colors[0] === 'N/A')
        return `<div class="cmp-cell cmp-cell-colors"><span class="colors-na-badge">Sob consulta</span></div>`;
      const swatches = f.colors.map(c => buildColorSwatch(c, colorMatchesSearch(c, cs))).join('');
      return `<div class="cmp-cell cmp-cell-colors">
        <div class="cmp-colors-grid">${swatches}</div>
        <div class="cmp-colors-count">${f.colors.length} cor${f.colors.length !== 1 ? 'es' : ''}</div>
      </div>`;
    }).join('');

    return `
      <div class="cmp-table" style="min-width:${minW}">
        <div class="cmp-header-row" style="grid-template-columns:${cols}">${header}</div>
        ${row('Composição', compCells)}
        ${row('Gramatura', gramCells)}
        ${row('Largura', widthCells)}
        ${row('Ligamento', ligCells)}
        ${row('Aplicações', appCells)}
        ${row('Cores disponíveis', colorCells)}
      </div>`;
  }

  // ─── Render: card ────────────────────────────────────────────
  function renderCard(f) {
    const isNA = f.colors[0] === 'N/A';
    const thumbPath = fabricThumbPath(f.code);
    const fullPath  = fabricImagePath(f.code);

    const imageHtml = `
      <img src="${thumbPath}" alt="${f.name}" loading="lazy" decoding="async"
           onerror="this.src='${fullPath}';this.onerror=function(){this.parentElement.innerHTML='<div class=\\'card-image-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><path d=\\'M3 9h18M9 21V9\\'/></svg><span>Foto em breve</span></div>'};">`;

    const visible = f.colors.slice(0, MAX_CARD_COLORS);
    const more = f.colors.length - MAX_CARD_COLORS;
    const cs = state.colorSearch;
    const colorsHtml = isNA
      ? '<span class="colors-na-badge">Sob consulta</span>'
      : visible.map(c => buildColorDot(c, colorMatchesSearch(c, cs))).join('') +
        (more > 0 ? `<span class="colors-more">+${more}</span>` : '');

    const isSelected = state.selectedCodes.has(f.code);
    const selectCheck = state.selectionMode
      ? `<div class="card-select-check${isSelected ? ' checked' : ''}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>`
      : '';
    const compareArr = [...state.compareCodes];
    const compareIdx = compareArr.indexOf(f.code);
    const compareBadge = state.compareMode
      ? `<div class="card-compare-badge${compareIdx >= 0 ? ' visible' : ''}">${compareIdx >= 0 ? compareIdx + 1 : ''}</div>`
      : '';
    const { min: gMin, max: gMax } = gramRange();
    const gramPct = gMax > gMin ? Math.round(((f.gramWeight - gMin) / (gMax - gMin)) * 100) : 50;

    return `
      <article class="fabric-card${state.selectionMode ? ' selectable' : ''}${isSelected ? ' selected' : ''}${state.compareMode && compareIdx >= 0 ? ' compare-selected' : ''}" data-code="${f.code}">
        ${selectCheck}${compareBadge}
        <div class="card-image">${imageHtml}</div>
        <div class="card-body">
          <div class="card-header">
            <h2 class="card-name">${f.name}</h2>
            <span class="card-code">${f.code}</span>
          </div>
          <div class="card-specs">
            <div class="spec-item">
              <span class="spec-label">Composição</span>
              <span class="spec-value comp-value">${compositionLines(f.composition)}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Gramatura</span>
              <span class="spec-value"><span class="gram-number">${f.gramWeight}</span><span class="gram-unit"> g/m²</span></span>
              <div class="gram-bar-wrap"><div class="gram-bar-fill" style="width:${gramPct}%"></div></div>
            </div>
            <div class="spec-item">
              <span class="spec-label">Largura</span>
              <span class="spec-value">${f.width.toFixed(2)} m</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Ligamento</span>
              <span class="spec-value">${f.ligamento}</span>
            </div>
          </div>
          <div class="card-lines">
            ${f.line.map(l => `<span class="line-tag">${l}</span>`).join('')}
          </div>
          <div class="card-colors">${colorsHtml}</div>
        </div>
      </article>`;
  }

  // ─── Render: grid ────────────────────────────────────────────
  function renderGrid() {
    const list = filteredFabrics();
    const grid = document.getElementById('fabric-grid');
    const noResults = document.getElementById('no-results');
    const count = document.getElementById('results-count');

    if (list.length === 0) {
      grid.innerHTML = '';
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
      grid.innerHTML = list.map(renderCard).join('');
      requestAnimationFrame(equalizeCardRows);
    }
    const n = list.length;
    count.textContent = `${n} tecido${n !== 1 ? 's' : ''} encontrado${n !== 1 ? 's' : ''} (de ${fabrics.length})`;
  }

  function equalizeCardRows() {
    const cards = [...document.querySelectorAll('#fabric-grid .fabric-card')];
    // Reset
    cards.forEach(card => {
      ['.comp-value', '.card-lines'].forEach(sel => {
        const el = card.querySelector(sel);
        if (el) el.style.minHeight = '';
      });
    });
    if (cards.length < 2) return;

    // Group cards by row top position
    const byRow = new Map();
    cards.forEach(card => {
      const top = Math.round(card.getBoundingClientRect().top);
      if (!byRow.has(top)) byRow.set(top, []);
      byRow.get(top).push(card);
    });

    byRow.forEach(rowCards => {
      if (rowCards.length < 2) return;
      ['.comp-value', '.card-lines'].forEach(sel => {
        const els = rowCards.map(c => c.querySelector(sel)).filter(Boolean);
        if (!els.length) return;
        const maxH = Math.max(...els.map(el => el.getBoundingClientRect().height));
        els.forEach(el => el.style.minHeight = maxH + 'px');
      });
    });
  }

  // ─── Modal ───────────────────────────────────────────────────
  function openModal(f) {
    const isNA = f.colors[0] === 'N/A';
    const apps = f.application.filter(a => a && a !== '#');
    const imgPath  = fabricImagePath(f.code);
    const origPath = fabricOriginalPath(f.code);
    const cs = state.colorSearch;

    const html = `
      <div class="modal-header">
        <div>
          <h2 class="modal-name">${f.name}</h2>
          <div class="modal-lines">
            ${f.line.map(l => `<span class="modal-line-tag">${l}</span>`).join('')}
          </div>
        </div>
        <span class="modal-code">Cód. ${f.code}</span>
      </div>

      <div class="modal-image">
        <img src="${imgPath}" alt="${f.name}" id="modal-fabric-img"
             data-orig="${origPath}" data-loaded="false"
             title="Clique para ver em alta qualidade"
             onerror="this.parentElement.innerHTML='<div class=\\'modal-image-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><path d=\\'M3 9h18M9 21V9\\'/></svg><span>Foto em breve</span></div>'">
        <span class="modal-img-hint">Clique para ampliar</span>
      </div>

      <div class="modal-grid">
        <div class="modal-field full">
          <span class="field-label">Composição</span>
          <div class="comp-list">
            ${f.composition.map(c => `
              <div class="comp-item">
                <div class="comp-bar-track">
                  <div class="comp-bar-fill" style="width:${c.percentage}%"></div>
                </div>
                <span class="comp-bar-label">${c.material} — ${c.percentage}%</span>
              </div>`).join('')}
          </div>
        </div>

        <div class="modal-field">
          <span class="field-label">Gramatura</span>
          <span class="field-value">${f.gramWeight} g/m²</span>
        </div>
        <div class="modal-field">
          <span class="field-label">Largura</span>
          <span class="field-value">${f.width.toFixed(2)} m</span>
        </div>
        <div class="modal-field">
          <span class="field-label">Ligamento</span>
          <span class="field-value">${f.ligamento}</span>
        </div>
        <div class="modal-field">
          <span class="field-label">Segmento / Linha</span>
          <span class="field-value">${f.line.join(', ')}</span>
        </div>

        ${apps.length > 0 ? `
        <div class="modal-field full">
          <span class="field-label">Aplicações</span>
          <div class="tag-list">
            ${apps.map(a => `<span class="tag">${a}</span>`).join('')}
          </div>
        </div>` : ''}
      </div>

      <hr class="section-divider">
      <p class="section-label">Cores disponíveis${isNA ? '' : ` (${f.colors.length})`}</p>
      ${isNA
        ? '<p class="colors-na-text">Cores disponíveis apenas sob consulta.</p>'
        : `<div class="colors-grid">${f.colors.map(c => buildColorSwatch(c, colorMatchesSearch(c, cs))).join('')}</div>`}

      <hr class="section-divider">
      <p class="section-label">Instruções de Lavagem</p>
      <ul class="wash-list">
        ${washingInstructions.map(w => `
          <li class="wash-item">${w}</li>`).join('')}
      </ul>
    `;

    document.getElementById('modal-content').innerHTML = html;
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Clique na foto do modal → abre lightbox com original em alta qualidade
    const fabricImg = document.getElementById('modal-fabric-img');
    if (fabricImg) {
      fabricImg.addEventListener('click', () => openLightbox(fabricImg.dataset.orig));
    }

    // Clique em cor → abre imagem em nova aba
    document.getElementById('modal-content').addEventListener('click', e => {
      const item = e.target.closest('.color-item[data-color-img]');
      if (item) window.open(item.dataset.colorImg, '_blank', 'noopener');
    });
  }

  // ─── Lightbox ────────────────────────────────────────────────
  let lbPhotos = null;   // array de srcs quando há navegação
  let lbIndex  = 0;

  function openLightbox(src, photos = null, index = 0) {
    lbPhotos = photos;
    lbIndex  = index;

    const lb      = document.getElementById('lightbox');
    const prev    = document.getElementById('lightbox-prev');
    const next    = document.getElementById('lightbox-next');
    const counter = document.getElementById('lightbox-counter');

    // Mostrar/ocultar setas e contador
    const hasNav = photos && photos.length > 1;
    prev.classList.toggle('hidden', !hasNav);
    next.classList.toggle('hidden', !hasNav);
    counter.classList.toggle('hidden', !hasNav);

    lb.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    lbLoadImage(src);
  }

  function lbLoadImage(src) {
    const lbImg   = document.getElementById('lightbox-img');
    const spinner = document.getElementById('lightbox-spinner');
    const counter = document.getElementById('lightbox-counter');

    lbImg.classList.add('hidden');
    spinner.classList.remove('hidden');

    if (lbPhotos) {
      counter.textContent = `${lbIndex + 1} / ${lbPhotos.length}`;
    }

    lbImg.onload = () => {
      spinner.classList.add('hidden');
      lbImg.classList.remove('hidden');
    };
    lbImg.onerror = () => {
      spinner.classList.add('hidden');
      // fallback: remove prefixo _backup_originais/ se existir
      lbImg.src = src.replace('_backup_originais/', '');
      lbImg.classList.remove('hidden');
    };
    lbImg.src = src;
  }

  function lbNavigate(dir) {
    if (!lbPhotos) return;
    lbIndex = (lbIndex + dir + lbPhotos.length) % lbPhotos.length;
    lbLoadImage(lbPhotos[lbIndex]);
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.classList.add('hidden');
    document.getElementById('lightbox-img').src = '';
    lbPhotos = null;
    if (!document.getElementById('modal-overlay').classList.contains('hidden')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.body.style.overflow = '';
  }

  // ─── Calendar ────────────────────────────────────────────────
  const MONTH_NAMES = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const EVENT_TYPE_LABELS = { feira: 'Feira', lancamento: 'Lançamento', promocao: 'Promoção', feriado: 'Feriado', interno: 'Interno' };

  let calDate = new Date(); // current month shown

  function formatDateBR(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return `${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}/${y}`;
  }
  function sameYMD(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  function parseEventDate(str) {
    const [y, m, d] = str.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  function eventsOnDate(date) {
    return events.filter(e => {
      const ed = parseEventDate(e.date);
      return sameYMD(ed, date);
    });
  }

  function renderCalendar() {
    const year = calDate.getFullYear();
    const month = calDate.getMonth();
    const today = new Date();

    const monthCap = MONTH_NAMES[month].charAt(0).toUpperCase() + MONTH_NAMES[month].slice(1);
    document.getElementById('cal-title').textContent = `${monthCap} de ${year}`;

    const firstDay = new Date(year, month, 1);
    const startOffset = firstDay.getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const cells = [];
    // Leading days from prev month
    for (let i = startOffset - 1; i >= 0; i--) {
      cells.push({ day: daysInPrevMonth - i, date: new Date(year, month - 1, daysInPrevMonth - i), other: true });
    }
    // This month
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d, date: new Date(year, month, d), other: false });
    }
    // Trailing days — fill to complete weeks (multiple of 7)
    while (cells.length % 7 !== 0) {
      const next = cells.length - (startOffset + daysInMonth) + 1;
      cells.push({ day: next, date: new Date(year, month + 1, next), other: true });
    }

    const grid = document.getElementById('cal-grid');
    grid.innerHTML = cells.map(c => {
      const evts = eventsOnDate(c.date);
      const isToday = sameYMD(c.date, today);
      const cls = ['cal-cell'];
      if (c.other) cls.push('other-month');
      if (isToday) cls.push('today');
      if (evts.length) cls.push('has-event');

      const pills = evts.slice(0, 3).map(e =>
        `<span class="cal-event-pill ${e.type}" title="${e.title}">${e.title}</span>`
      ).join('');
      const more = evts.length > 3 ? `<span class="cal-event-more">+${evts.length - 3}</span>` : '';

      const iso = `${c.date.getFullYear()}-${String(c.date.getMonth()+1).padStart(2,'0')}-${String(c.date.getDate()).padStart(2,'0')}`;
      return `<div class="${cls.join(' ')}" data-date="${iso}">
        <span class="cal-day-num">${c.day}</span>
        <div class="cal-events">${pills}${more}</div>
      </div>`;
    }).join('');
  }

  function renderEventsList() {
    const today = new Date(); today.setHours(0,0,0,0);
    const upcoming = events
      .map(e => ({ ...e, _d: parseEventDate(e.date) }))
      .filter(e => e._d >= today)
      .sort((a, b) => a._d - b._d)
      .slice(0, 15);

    const list = document.getElementById('events-list');
    if (upcoming.length === 0) {
      list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-muted)">Nenhum evento futuro cadastrado.</p>';
      return;
    }
    list.innerHTML = upcoming.map(e => `
      <div class="event-card ${e.type}" data-date="${e.date}">
        <div class="event-date-row">
          <span class="event-date">${formatDateBR(e.date)}</span>
          <span class="event-type-badge ${e.type}">${EVENT_TYPE_LABELS[e.type] || e.type}</span>
        </div>
        <div class="event-name">${e.title}</div>
        ${e.location && e.location !== '-' ? `<div class="event-loc">📍 ${e.location}</div>` : ''}
      </div>
    `).join('');
  }

  function openEventModal(date) {
    const evts = events.filter(e => e.date === date);
    if (evts.length === 0) return;

    const html = evts.map(e => `
      <div class="event-modal" ${evts.length > 1 ? 'style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)"' : ''}>
        <div class="modal-header" style="border-bottom:none;padding-bottom:0;margin-bottom:1rem">
          <div>
            <h2 class="modal-name">${e.title}</h2>
            <div class="modal-lines">
              <span class="event-type-badge ${e.type}">${EVENT_TYPE_LABELS[e.type] || e.type}</span>
            </div>
          </div>
        </div>
        <div class="event-meta">
          <div class="event-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            ${formatDateBR(e.date)}
          </div>
          ${e.location && e.location !== '-' ? `
          <div class="event-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${e.location}
          </div>` : ''}
        </div>
        <p class="event-desc">${e.description || ''}</p>
        ${ e.gallery === true ? `
        <button class="event-gallery-btn" data-action="open-gallery">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          Ver fotos
        </button>` : e.gallery === false ? `
        <p class="event-gallery-soon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>
          Fotos ainda não adicionadas
        </p>` : '' }
      </div>
    `).join('');

    document.getElementById('modal-content').innerHTML = html;
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // "Ver fotos" button → close modal and open gallery tab
    const galleryBtn = document.querySelector('.event-gallery-btn[data-action="open-gallery"]');
    if (galleryBtn) {
      galleryBtn.addEventListener('click', () => {
        closeModal();
        switchView('gallery');
        document.querySelector('.view-tab[data-view="gallery"]').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  }

  function switchView(view) {
    document.querySelectorAll('.view-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.view === view);
    });
    document.getElementById('fabrics-view').classList.toggle('hidden', view !== 'fabrics');
    document.getElementById('events-view').classList.toggle('hidden', view !== 'events');
    document.getElementById('videos-view').classList.toggle('hidden', view !== 'videos');
    document.getElementById('colors-view').classList.toggle('hidden', view !== 'colors');
    document.getElementById('gallery-view').classList.toggle('hidden', view !== 'gallery');
    // document.getElementById('reps-view').classList.toggle('hidden', view !== 'reps');
    document.getElementById('filter-bar').classList.toggle('hidden', view !== 'fabrics');

    // Fix: remove hidden when returning to fabrics so toggle works again
    const adv = document.getElementById('advanced-panel');
    if (view !== 'fabrics') {
      adv.classList.remove('open');
      adv.classList.add('hidden');
    } else {
      adv.classList.remove('hidden');
    }

    if (view === 'events') { renderCalendar(); renderEventsList(); }
    if (view === 'colors') renderColorsPage();
    if (view === 'gallery') renderGallery();
  }

  // ─── Gallery page ─────────────────────────────────────────────
  // Deriva o nome da miniatura: "foto.jpg" → "foto-thumb.jpg"
  function thumbSrc(src) {
    return src.replace(/(\.[^.]+)$/, '-thumb$1');
  }

  function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const empty = document.getElementById('gallery-empty');
    if (!grid || grid.dataset.rendered) return;

    if (!galleryPhotos || galleryPhotos.length === 0) {
      empty.classList.remove('hidden');
      grid.dataset.rendered = '1';
      return;
    }

    grid.innerHTML = galleryPhotos.map((p, i) => `
      <div class="gallery-item" data-index="${i}">
        <img src="${thumbSrc(p.src)}" alt="${p.caption || ''}" loading="lazy" decoding="async"
             onerror="this.src='${p.src}'">
        ${p.caption ? `<div class="gallery-caption">${p.caption}</div>` : ''}
      </div>`).join('');

    grid.dataset.rendered = '1';

    // Click → abre lightbox com navegação entre todas as fotos
    const allSrcs = galleryPhotos.map(p => p.src);
    grid.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const idx = Number(item.dataset.index);
      openLightbox(galleryPhotos[idx].src, allSrcs, idx);
    });
  }

  // ─── Colors page ─────────────────────────────────────────────
  function renderColorsPage() {
    const grid = document.getElementById('colors-page-grid');
    if (!grid || grid.dataset.rendered) return;

    const keys = Object.keys(colorData)
      .filter(k => k !== 'N/A')
      .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));

    grid.innerHTML = keys.map(code => {
      const data = colorData[code];
      const hex = data.hex || '#ccc';
      const parts = data.name.split(' - ');
      const name = parts.length > 1 ? parts.slice(1).join(' - ') : data.name;
      const src = colorImgSrc(data);
      const img = src
        ? `<img src="${src}" alt="${name}" loading="lazy" onerror="this.style.display='none'">`
        : '';
      const swatchBg = src === 'NA.png' ? '#C8C8C8' : hex;
      return `
        <div class="color-page-card" data-code="${code}" data-name="${normalizeText(name)}" data-pantone="${normalizeText(data.pantone)}">
          <div class="color-page-swatch" style="background:${swatchBg}">${img}</div>
          <div class="color-page-info">
            <span class="color-page-code">${code}</span>
            <span class="color-page-name">${name}</span>
            <span class="color-page-pantone">${data.pantone}</span>
          </div>
        </div>`;
    }).join('');

    grid.dataset.rendered = '1';

    const countEl = document.getElementById('colors-page-count');
    const noResults = document.getElementById('colors-no-results');
    if (countEl) countEl.textContent = `${keys.length} cores disponíveis`;

    const searchInput = document.getElementById('colors-page-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = normalizeText(searchInput.value);
        let visible = 0;
        grid.querySelectorAll('.color-page-card').forEach(card => {
          const match = !q || card.dataset.code.includes(q) || card.dataset.name.includes(q) || card.dataset.pantone.includes(q);
          card.classList.toggle('hidden', !match);
          if (match) visible++;
        });
        if (countEl) countEl.textContent = q ? `${visible} cores encontradas` : `${keys.length} cores disponíveis`;
        if (noResults) noResults.classList.toggle('hidden', visible > 0);
      });
    }
  }

  // ─── Representantes / Mapa do Brasil ─────────────────────────
  let selectedRepId = null;

  function repForState(uf) {
    return representatives.find(r => r.states.includes(uf));
  }

  let mapLoaded = false;
  async function renderBrazilMap() {
    if (mapLoaded) return;
    const container = document.getElementById('brazil-map');
    try {
      const res = await fetch('brazil.svg');
      const svgText = await res.text();
      container.innerHTML = svgText;

      // Annotate each <path> with UF, region, name, rep
      container.querySelectorAll('path[id]').forEach(path => {
        const uf = path.id.toUpperCase();
        const meta = UF_GRID[uf];
        if (!meta) return;
        const [, , name, region] = meta;
        const rep = repForState(uf);
        path.setAttribute('data-uf', uf);
        path.setAttribute('data-region', region);
        path.setAttribute('data-name', name);
        if (rep) path.setAttribute('data-rep', rep.id);
      });

      mapLoaded = true;
      // Re-apply any current highlight
      updateMapHighlight();
    } catch (err) {
      container.innerHTML = '<p style="padding:2rem;text-align:center;color:var(--text-muted)">Não foi possível carregar o mapa. Verifique se <code>brazil.svg</code> está na mesma pasta.</p>';
    }
  }

  function renderRepsList() {
    const list = document.getElementById('reps-list');
    const title = document.getElementById('reps-sidebar-title');

    const ordered = [...representatives].sort((a, b) => {
      const regionOrder = ['Norte','Nordeste','Centro-Oeste','Sudeste','Sul'];
      return regionOrder.indexOf(a.region) - regionOrder.indexOf(b.region) || a.name.localeCompare(b.name);
    });

    title.textContent = selectedRepId
      ? 'Representante selecionado'
      : `Todos os representantes (${representatives.length})`;

    const visible = selectedRepId
      ? ordered.filter(r => r.id === selectedRepId)
      : ordered;

    list.innerHTML = visible.map(r => `
      <div class="rep-card${r.id === selectedRepId ? ' active' : ''}"
           data-rep="${r.id}" data-region="${r.region}">
        <div class="rep-header">
          <span class="rep-name">${r.name}</span>
          <span class="rep-region-badge" data-region="${r.region}">${r.region}</span>
        </div>
        <div class="rep-states">
          ${r.states.map(s => `<span class="rep-state-chip">${s}</span>`).join('')}
        </div>
        <div class="rep-contacts">
          <a class="rep-contact" href="tel:+55${r.phone.replace(/\D/g,'')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            ${r.phone}
          </a>
          <a class="rep-contact whatsapp" href="https://wa.me/${r.whatsapp}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-1.77-.89-2.93-1.58-4.1-3.58-.31-.53.31-.5.89-1.65.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2A10 10 0 0 0 2 12c0 1.76.46 3.42 1.27 4.86L2 22l5.25-1.38A9.99 9.99 0 1 0 12 2z"/></svg>
            WhatsApp
          </a>
          <a class="rep-contact" href="mailto:${r.email}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
            ${r.email}
          </a>
        </div>
      </div>
    `).join('');

    if (selectedRepId) {
      list.insertAdjacentHTML('afterend',
        `<button class="btn-clear-rep" id="btn-clear-rep">Ver todos os representantes</button>`);
    }
  }

  function selectRep(repId) {
    selectedRepId = (selectedRepId === repId) ? null : repId;
    updateMapHighlight();
    renderRepsList();
  }

  function updateMapHighlight() {
    const paths = document.querySelectorAll('#brazil-map path[data-uf]');
    if (!selectedRepId) {
      paths.forEach(p => p.classList.remove('highlight', 'dim'));
      return;
    }
    const rep = representatives.find(r => r.id === selectedRepId);
    if (!rep) return;
    paths.forEach(p => {
      if (rep.states.includes(p.dataset.uf)) {
        p.classList.add('highlight');
        p.classList.remove('dim');
      } else {
        p.classList.remove('highlight');
        p.classList.add('dim');
      }
    });
  }

  function showMapTooltip(path) {
    const tooltip = document.getElementById('map-tooltip');
    const rep = representatives.find(r => r.id == path.dataset.rep);
    tooltip.innerHTML = `
      <strong>${path.dataset.name} (${path.dataset.uf})</strong>
      ${rep ? rep.name : 'Sem representante'}
      ${rep ? `<small>${rep.phone}</small>` : ''}
    `;
    tooltip.classList.remove('hidden');
    const rect = path.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - tipRect.width / 2) + 'px';
    tooltip.style.top = (rect.top - tipRect.height - 8) + 'px';
  }
  function hideMapTooltip() {
    document.getElementById('map-tooltip').classList.add('hidden');
  }

  // ─── Init ────────────────────────────────────────────────────
  function init() {
    renderSegmentDropdown();
    renderAdvancedFilters();
    renderGrid();

    // Search (now in filter bar)
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const fabricSearchWrap = document.getElementById('filter-search-wrap');
    searchInput.addEventListener('input', e => {
      state.search = e.target.value.trim();
      fabricSearchWrap.classList.toggle('has-value', e.target.value.length > 0);
      renderGrid();
    });
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      state.search = '';
      fabricSearchWrap.classList.remove('has-value');
      renderGrid();
    });

    // Advanced panel toggle (smooth open/close)
    const toggle = document.getElementById('advanced-toggle');
    const panel = document.getElementById('advanced-panel');

    function closePanel() {
      panel.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      panel.style.transform = '';
      panel.style.transition = '';
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      // Lock background scroll on mobile when panel is open
      if (window.innerWidth <= 768) {
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }
    });

    // Close panel on outside tap
    document.addEventListener('click', e => {
      if (!panel.contains(e.target) && !toggle.contains(e.target) && panel.classList.contains('open')) {
        closePanel();
      }
      // Close any open dropdown when clicking outside it
      document.querySelectorAll('.dropdown.open').forEach(dd => {
        if (!dd.contains(e.target)) closeDropdown(dd.id);
      });
    });

    // Drag handle to close (swipe down on the handle area)
    let dragStartY = 0;
    let dragDelta = 0;
    let dragging = false;

    panel.addEventListener('touchstart', e => {
      const panelRect = panel.getBoundingClientRect();
      if (e.touches[0].clientY - panelRect.top > 52) return;
      dragStartY = e.touches[0].clientY;
      dragDelta = 0;
      dragging = true;
      panel.style.transition = 'none';
    }, { passive: true });

    panel.addEventListener('touchmove', e => {
      if (!dragging) return;
      dragDelta = Math.max(0, e.touches[0].clientY - dragStartY);
      panel.style.transform = `translateY(${dragDelta}px)`;
    }, { passive: true });

    panel.addEventListener('touchend', () => {
      if (!dragging) return;
      dragging = false;
      if (dragDelta > 80) {
        closePanel();
      } else {
        panel.style.transition = '';
        panel.style.transform = '';
      }
      dragDelta = 0;
    });

    // Gramatura inputs
    document.getElementById('gram-min').addEventListener('input', e => {
      const v = e.target.value.trim();
      state.gramMin = v === '' ? null : Number(v);
      updateBadge(); renderGrid();
    });
    document.getElementById('gram-max').addEventListener('input', e => {
      const v = e.target.value.trim();
      state.gramMax = v === '' ? null : Number(v);
      updateBadge(); renderGrid();
    });

    // Color search
    document.getElementById('color-search').addEventListener('input', e => {
      state.colorSearch = e.target.value.trim();
      updateBadge(); renderGrid();
    });

    // Clear filters
    document.getElementById('clear-filters').addEventListener('click', clearFilters);

    // Card click → modal, seleção ou comparação
    document.getElementById('fabric-grid').addEventListener('click', e => {
      const card = e.target.closest('.fabric-card');
      if (!card) return;
      if (state.selectionMode) {
        toggleCardSelection(card.dataset.code);
      } else if (state.compareMode) {
        toggleCompareCard(card.dataset.code);
      } else {
        const fabric = fabrics.find(f => f.code === card.dataset.code);
        if (fabric) openModal(fabric);
      }
    });

    // Comparar
    document.getElementById('compare-toggle-btn').addEventListener('click', toggleCompareMode);
    document.getElementById('btn-compare-now').addEventListener('click', openCompareView);
    document.getElementById('btn-compare-cancel').addEventListener('click', cancelCompare);
    document.getElementById('compare-overlay-close').addEventListener('click', closeCompareView);
    document.getElementById('compare-overlay').addEventListener('click', e => {
      if (e.target.id === 'compare-overlay') closeCompareView();
    });

    // Material quick dropdown
    renderMaterialQuickDropdown();

    // Seleção
    document.getElementById('select-toggle-btn').addEventListener('click', toggleSelectionMode);
    document.getElementById('btn-select-all').addEventListener('click', selectAllVisible);
    document.getElementById('btn-cancel-select').addEventListener('click', cancelSelection);
    document.getElementById('btn-download-csv').addEventListener('click', downloadCSV);
    document.getElementById('btn-download-pdf').addEventListener('click', downloadPDF);

    // View tabs
    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.addEventListener('click', () => switchView(tab.dataset.view));
    });

    // Calendar navigation
    document.getElementById('cal-prev').addEventListener('click', () => {
      calDate = new Date(calDate.getFullYear(), calDate.getMonth() - 1, 1);
      renderCalendar();
    });
    document.getElementById('cal-next').addEventListener('click', () => {
      calDate = new Date(calDate.getFullYear(), calDate.getMonth() + 1, 1);
      renderCalendar();
    });
    document.getElementById('cal-today').addEventListener('click', () => {
      calDate = new Date();
      renderCalendar();
    });

    // Calendar cell click
    document.getElementById('cal-grid').addEventListener('click', e => {
      const cell = e.target.closest('.cal-cell.has-event');
      if (!cell) return;
      openEventModal(cell.dataset.date);
    });

    // Events sidebar click
    document.getElementById('events-list').addEventListener('click', e => {
      const card = e.target.closest('.event-card');
      if (!card) return;
      openEventModal(card.dataset.date);
    });

    /* ── REPRESENTANTES (desativado temporariamente) ────────────
    const mapEl = document.getElementById('brazil-map');
    mapEl.addEventListener('click', e => {
      const path = e.target.closest('path[data-uf]');
      if (!path || !path.dataset.rep) return;
      selectRep(Number(path.dataset.rep));
    });
    mapEl.addEventListener('mouseover', e => {
      const path = e.target.closest('path[data-uf]');
      if (path) showMapTooltip(path);
    });
    mapEl.addEventListener('mouseout', e => {
      if (e.target.closest('path[data-uf]')) hideMapTooltip();
    });
    document.getElementById('reps-list').addEventListener('click', e => {
      const card = e.target.closest('.rep-card');
      if (card) selectRep(Number(card.dataset.rep));
    });
    document.addEventListener('click', e => {
      if (e.target.id === 'btn-clear-rep') {
        selectedRepId = null;
        updateMapHighlight();
        renderRepsList();
      }
    });
    ── fim REPRESENTANTES ─────────────────────────────────────── */

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', e => {
      if (e.target.id === 'modal-overlay') closeModal();
    });

    // Lightbox — fechar
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox').addEventListener('click', e => {
      if (e.target.id === 'lightbox') closeLightbox();
    });

    // Lightbox — setas
    document.getElementById('lightbox-prev').addEventListener('click', e => { e.stopPropagation(); lbNavigate(-1); });
    document.getElementById('lightbox-next').addEventListener('click', e => { e.stopPropagation(); lbNavigate(+1); });

    // Lightbox — swipe mobile
    let lbTouchX = 0;
    document.getElementById('lightbox').addEventListener('touchstart', e => {
      lbTouchX = e.touches[0].clientX;
    }, { passive: true });
    document.getElementById('lightbox').addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - lbTouchX;
      if (Math.abs(dx) > 50) lbNavigate(dx < 0 ? +1 : -1);
    }, { passive: true });

    // Teclado
    document.addEventListener('keydown', e => {
      const lbOpen  = !document.getElementById('lightbox').classList.contains('hidden');
      const cmpOpen = !document.getElementById('compare-overlay').classList.contains('hidden');
      if (lbOpen) {
        if (e.key === 'ArrowLeft')  lbNavigate(-1);
        if (e.key === 'ArrowRight') lbNavigate(+1);
        if (e.key === 'Escape')     closeLightbox();
      } else if (cmpOpen) {
        if (e.key === 'Escape') closeCompareView();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  init();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(equalizeCardRows, 120);
  });
})();
