tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Space Grotesk', 'sans-serif'],
          },
          colors: {
            brand: {
              cyan: '#00A8E8',
              royal: '#2B59C3',
              violet: '#6A11CB',
              magenta: '#E91E63',
              orange: '#FF9800',
              amber: '#FFC107',
              dark: '#050814',
              card: '#0B1024',
            }
          },
          animation: {
            'gradient-x': 'gradient-x 6s ease infinite',
            'float': 'float 6s ease-in-out infinite',
            'float-delayed': 'float 6s ease-in-out 3s infinite',
            'pulse-glow': 'pulse-glow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'marquee': 'marquee 28s linear infinite',
          },
          keyframes: {
            'gradient-x': {
              '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
              '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
            },
            'float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-14px)' },
            },
            'pulse-glow': {
              '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 168, 232, 0.5)' },
              '50%': { boxShadow: '0 0 24px 6px rgba(106, 17, 203, 0.35)' },
            },
            'marquee': {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-50%)' },
            }
          }
        }
      }
    };

// 1. EXACT OFFICIAL SERVICES & PRICING DATA FROM PDF
    const SERVICES_DATA = [
      // 1. Creative Design Services
      { id: 'logo', category: 'design', categoryLabel: '1. Creative Design', name: 'Logo Design', priceDisplay: '₹500 onwards', numericPrice: 500, isCustom: false, icon: 'fa-pen-nib', desc: 'Memorable, scalable brand marks crafted with modern visual identity principles.' },
      { id: 'sm-post', category: 'design', categoryLabel: '1. Creative Design', name: 'Social Media Post', priceDisplay: '₹300', numericPrice: 300, isCustom: false, icon: 'fa-image', desc: 'Scroll-stopping static or carousel graphics optimized for Instagram, Facebook & LinkedIn.' },
      { id: 'yt-thumb', category: 'design', categoryLabel: '1. Creative Design', name: 'YouTube Thumbnail', priceDisplay: '₹250', numericPrice: 250, isCustom: false, icon: 'fa-play', desc: 'High-CTR, expressive thumbnails engineered to boost video clicks and watch time.' },
      { id: 'poster-banner', category: 'design', categoryLabel: '1. Creative Design', name: 'Poster & Banner', priceDisplay: '₹300 onwards', numericPrice: 300, isCustom: false, icon: 'fa-panorama', desc: 'Promotional event posters, web banners, and print-ready marketing visuals.' },
      { id: 'restaurant-menu', category: 'design', categoryLabel: '1. Creative Design', name: 'Restaurant Menu Design', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-utensils', desc: 'Appetizing digital & print restaurant menus structured to maximize order value.' },

      // 2. Digital Marketing Services
      { id: 'sm-basic', category: 'marketing', categoryLabel: '2. Digital Marketing', name: 'Basic Social Media Campaign', priceDisplay: '₹999', numericPrice: 999, isCustom: false, icon: 'fa-bullhorn', desc: 'Starter targeted ad campaign setup to kick off brand awareness and reach.' },
      { id: 'sm-standard', category: 'marketing', categoryLabel: '2. Digital Marketing', name: 'Standard Social Media Campaign', priceDisplay: '₹1,999', numericPrice: 1999, isCustom: false, icon: 'fa-chart-line', desc: 'Multi-ad set campaign with audience targeting and engagement optimization.' },
      { id: 'sm-pro', category: 'marketing', categoryLabel: '2. Digital Marketing', name: 'Professional Social Media Campaign', priceDisplay: '₹3,999', numericPrice: 3999, isCustom: false, icon: 'fa-rocket', desc: 'Full-funnel campaign strategy with A/B creative testing and conversion tracking.' },
      { id: 'sm-premium', category: 'marketing', categoryLabel: '2. Digital Marketing', name: 'Premium Social Media Campaign', priceDisplay: '₹6,999', numericPrice: 6999, isCustom: false, icon: 'fa-crown', desc: 'High-scale multi-platform ad execution designed for aggressive brand growth.' },
      { id: 'smm-monthly', category: 'marketing', categoryLabel: '2. Digital Marketing', name: 'Social Media Management', priceDisplay: '₹2,500/month onwards', numericPrice: 2500, isCustom: false, icon: 'fa-calendar-check', desc: 'Consistent content scheduling, profile optimization, and monthly brand presence.' },
      { id: 'lead-gen', category: 'marketing', categoryLabel: '2. Digital Marketing', name: 'Lead Generation', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-magnet', desc: 'Dedicated performance funnels engineered to capture qualified customer inquiries.' },
      { id: 'seo-services', category: 'marketing', categoryLabel: '2. Digital Marketing', name: 'SEO Services', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-magnifying-glass-chart', desc: 'On-page & off-page search engine optimization to rank higher organically.' },

      // 3. Script & Content Writing
      { id: 'ad-script', category: 'content', categoryLabel: '3. Script & Content', name: 'Advertisement Script', priceDisplay: '₹299', numericPrice: 299, isCustom: false, icon: 'fa-scroll', desc: 'Persuasive hook-driven commercial scripts tailored for social & video ads.' },
      { id: 'video-script', category: 'content', categoryLabel: '3. Script & Content', name: 'Video Script', priceDisplay: '₹199', numericPrice: 199, isCustom: false, icon: 'fa-file-lines', desc: 'Structured, engaging storytelling scripts for YouTube videos, reels, and explainers.' },
      { id: 'ai-ad-script', category: 'content', categoryLabel: '3. Script & Content', name: 'AI Ad Script', priceDisplay: '₹500', numericPrice: 500, isCustom: false, icon: 'fa-robot', desc: 'Prompt-engineered scripts paired with visual scene cues for AI video production.' },
      { id: 'blog-writing', category: 'content', categoryLabel: '3. Script & Content', name: 'Blog Writing', priceDisplay: '₹500', numericPrice: 500, isCustom: false, icon: 'fa-feather-pointed', desc: 'Well-researched, SEO-friendly articles that establish authority and drive traffic.' },
      { id: 'web-content', category: 'content', categoryLabel: '3. Script & Content', name: 'Website Content', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-align-left', desc: 'Conversion-focused landing page and website copy written to turn visitors into buyers.' },
      { id: 'promo-copy', category: 'content', categoryLabel: '3. Script & Content', name: 'Promotional Copywriting', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-pen-fancy', desc: 'High-impact taglines, brochures, and sales messaging across digital channels.' },

      // 4. AI Video & Production
      { id: 'ai-video', category: 'aivideo', categoryLabel: '4. AI Video & Production', name: 'AI Video Advertisement', priceDisplay: '₹2,000 onwards', numericPrice: 2000, isCustom: false, icon: 'fa-wand-magic-sparkles', desc: 'Next-gen AI-generated commercial ads with realistic visuals, voiceovers & pacing.' },
      { id: 'animated-ad', category: 'aivideo', categoryLabel: '4. AI Video & Production', name: 'Animated Advertisement', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-film', desc: 'Dynamic 2D/motion-graphic product and service commercials that captivate viewers.' },
      { id: 'video-editing', category: 'aivideo', categoryLabel: '4. AI Video & Production', name: 'Video Editing', priceDisplay: '₹1,000 onwards', numericPrice: 1000, isCustom: false, icon: 'fa-scissors', desc: 'Crisp cuts, color grading, captions, transitions & sound design for reels and YouTube.' },
      { id: 'promo-videos', category: 'aivideo', categoryLabel: '4. AI Video & Production', name: 'Promotional Videos', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-video', desc: 'Brand showcase videos tailored for product launches, events, and digital ads.' },
      { id: 'ai-character', category: 'aivideo', categoryLabel: '4. AI Video & Production', name: 'AI Character Animation', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-user-astronaut', desc: 'Custom AI brand mascots and talking digital avatars for engaging storytelling.' },

      // 5. Website Development
      { id: 'landing-page', category: 'webdev', categoryLabel: '5. Website Development', name: 'Landing Page', priceDisplay: '₹2,500 onwards', numericPrice: 2500, isCustom: false, icon: 'fa-window-maximize', desc: 'Fast, responsive single-page conversion funnel built for ad traffic and leads.' },
      { id: 'biz-web', category: 'webdev', categoryLabel: '5. Website Development', name: 'Business Website', priceDisplay: '₹5,000 onwards', numericPrice: 5000, isCustom: false, icon: 'fa-globe', desc: 'Complete multi-page modern company website with mobile responsiveness & SEO basics.' },
      { id: 'portfolio-web', category: 'webdev', categoryLabel: '5. Website Development', name: 'Portfolio Website', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-briefcase', desc: 'Sleek interactive showcase website for creators, consultants, and agencies.' },
      { id: 'ecommerce-web', category: 'webdev', categoryLabel: '5. Website Development', name: 'E-commerce Website', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-cart-shopping', desc: 'Full online store with product catalog, cart experience, and payment integration.' },
      { id: 'web-maint', category: 'webdev', categoryLabel: '5. Website Development', name: 'Website Maintenance', priceDisplay: 'Custom pricing', numericPrice: 0, isCustom: true, icon: 'fa-screwdriver-wrench', desc: 'Ongoing speed optimization, security backups, content updates, and technical support.' }
    ];

    // 2. EXACT 10-POINT TERMS & CONDITIONS FROM PDF
    const TERMS_DATA = [
      { num: '01', text: '50% advance payment is required before starting the project.' },
      { num: '02', text: 'Remaining payment must be cleared before final delivery.' },
      { num: '03', text: 'Each service includes up to 2 free revisions.' },
      { num: '04', text: 'Additional revisions or changes outside the agreed scope may incur extra charges.' },
      { num: '05', text: 'Project delivery time depends on the service and project requirements.' },
      { num: '06', text: 'Advance payments are generally non-refundable once work has started, subject to the applicable refund policy and law.' },
      { num: '07', text: 'Clients must provide all required content, images, and information on time.' },
      { num: '08', text: 'Final files and ownership rights will be transferred after full payment, subject to third-party licensing terms.' },
      { num: '09', text: 'No guarantee of fixed leads, sales, views, or marketing results.' },
      { num: '10', text: 'Orders will be considered confirmed after client approval and required advance payment.' }
    ];

    // Application State
    let selectedServiceIds = new Set();
    let activeCategory = 'all';
    let searchQuery = '';

    // Category Color Accents
    const CATEGORY_STYLES = {
      design: { badge: 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30', iconBg: 'bg-brand-cyan/15 text-brand-cyan' },
      marketing: { badge: 'bg-brand-magenta/15 text-pink-300 border-brand-magenta/30', iconBg: 'bg-brand-magenta/15 text-pink-400' },
      content: { badge: 'bg-brand-amber/15 text-amber-300 border-brand-amber/30', iconBg: 'bg-brand-amber/15 text-amber-400' },
      aivideo: { badge: 'bg-brand-violet/20 text-purple-300 border-brand-violet/40', iconBg: 'bg-brand-violet/20 text-purple-400' },
      webdev: { badge: 'bg-brand-royal/20 text-blue-300 border-brand-royal/40', iconBg: 'bg-brand-royal/20 text-blue-400' }
    };

    // Toast Helper
    let toastTimeout;
    function showToast(msg) {
      const toast = document.getElementById('toast-notification');
      const toastMsg = document.getElementById('toast-message');
      toastMsg.textContent = msg;
      toast.classList.remove('translate-x-full', 'opacity-0');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add('translate-x-full', 'opacity-0');
      }, 2400);
    }

    // Format INR Currency
    function formatINR(amount) {
      return '₹' + amount.toLocaleString('en-IN');
    }

    // Render Service Cards
    function renderServices() {
      const grid = document.getElementById('services-grid');
      const emptyState = document.getElementById('no-services-found');

      const filtered = SERVICES_DATA.filter(item => {
        const matchesCat = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
      }

      emptyState.classList.add('hidden');
      grid.innerHTML = filtered.map(service => {
        const isSelected = selectedServiceIds.has(service.id);
        const style = CATEGORY_STYLES[service.category];
        return `
          <div class="service-card glass-card rounded-3xl p-6 flex flex-col justify-between ${isSelected ? 'border-brand-cyan ring-1 ring-brand-cyan/50' : ''}"
               onmousemove="handleCardMouseMove(event, this)"
               onmouseleave="handleCardMouseLeave(this)">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <span class="px-3 py-1 rounded-full text-[11px] font-semibold border ${style.badge}">
                  ${service.categoryLabel}
                </span>
                <div class="w-10 h-10 rounded-xl ${style.iconBg} flex items-center justify-center text-base">
                  <i class="fa-solid ${service.icon}"></i>
                </div>
              </div>

              <h3 class="font-display font-bold text-xl text-white mb-2">${service.name}</h3>
              <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">${service.desc}</p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div>
                <div class="text-[11px] uppercase tracking-wider text-slate-400">Starting Price</div>
                <div class="font-display font-bold text-lg sm:text-xl ${service.isCustom ? 'text-purple-300' : 'text-white'}">
                  ${service.priceDisplay}
                </div>
              </div>

              <button onclick="toggleService('${service.id}')"
                      class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-brand-cyan text-slate-950 shadow-lg shadow-brand-cyan/30'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                      }">
                <i class="fa-solid ${isSelected ? 'fa-check' : 'fa-plus'}"></i>
                <span>${isSelected ? 'Added' : 'Add to Estimate'}</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    // 3D Tilt & Spotlight Card Hover Handlers
    function handleCardMouseMove(e, el) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    }

    function handleCardMouseLeave(el) {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }

    // Toggle Service in Estimator
    function toggleService(id) {
      const service = SERVICES_DATA.find(s => s.id === id);
      if (!service) return;

      if (selectedServiceIds.has(id)) {
        selectedServiceIds.delete(id);
        showToast(`Removed "${service.name}"`);
      } else {
        selectedServiceIds.add(id);
        showToast(`Added "${service.name}" to estimate`);
      }
      renderServices();
      updateEstimatorUI();
    }

    // Apply Quick Preset Bundle
    function applyPreset(ids) {
      ids.forEach(id => selectedServiceIds.add(id));
      renderServices();
      updateEstimatorUI();
      showToast('Starter bundle added to your estimate!');
    }

    // Update Estimator Section, Navbar Badge & Floating Bar
    function updateEstimatorUI() {
      const listEl = document.getElementById('estimator-items-list');
      const clearBtn = document.getElementById('clear-estimate-btn');
      const countPill = document.getElementById('est-count-pill');
      const totalEl = document.getElementById('est-total');
      const advanceEl = document.getElementById('est-advance');
      const balanceEl = document.getElementById('est-balance');
      const customNote = document.getElementById('custom-items-note');
      const customCountEl = document.getElementById('custom-items-count');

      // Nav & Floating Bar elements
      const navBadge = document.getElementById('nav-cart-badge');
      const floatBar = document.getElementById('floating-estimator-bar');
      const floatCount = document.getElementById('float-bar-count');
      const floatTotal = document.getElementById('float-bar-total');
      const floatAdv = document.getElementById('float-bar-adv');

      const selectedServices = SERVICES_DATA.filter(s => selectedServiceIds.has(s.id));
      const count = selectedServices.length;

      let numericTotal = 0;
      let customItemsCount = 0;

      selectedServices.forEach(s => {
        if (s.isCustom) {
          customItemsCount++;
        } else {
          numericTotal += s.numericPrice;
        }
      });

      const advanceAmount = Math.round(numericTotal * 0.5);
      const balanceAmount = numericTotal - advanceAmount;

      // Update Numbers
      countPill.textContent = `${count} ${count === 1 ? 'Item' : 'Items'}`;
      totalEl.textContent = numericTotal > 0 ? `${formatINR(numericTotal)}${customItemsCount > 0 ? ' + Custom' : ''}` : (customItemsCount > 0 ? 'Custom Quote' : '₹0');
      advanceEl.textContent = numericTotal > 0 ? formatINR(advanceAmount) : (customItemsCount > 0 ? '50% on Quote' : '₹0');
      balanceEl.textContent = numericTotal > 0 ? formatINR(balanceAmount) : '—';

      if (customItemsCount > 0) {
        customNote.classList.remove('hidden');
        customCountEl.textContent = customItemsCount;
      } else {
        customNote.classList.add('hidden');
      }

      // Render Selected List
      if (count === 0) {
        clearBtn.classList.add('hidden');
        listEl.innerHTML = `
          <div class="p-6 rounded-2xl border border-dashed border-white/15 text-center text-slate-400 text-sm">
            <i class="fa-solid fa-layer-group text-2xl text-slate-500 mb-2 block"></i>
            Your estimate list is currently empty. Add services from the menu above or pick a quick preset!
          </div>
        `;
        navBadge.classList.add('hidden');
        floatBar.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
      } else {
        clearBtn.classList.remove('hidden');
        listEl.innerHTML = selectedServices.map(s => `
          <div class="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div>
              <div class="font-semibold text-sm text-white">${s.name}</div>
              <div class="text-xs text-slate-400">${s.categoryLabel}</div>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-display font-bold text-sm ${s.isCustom ? 'text-purple-300' : 'text-brand-cyan'}">${s.priceDisplay}</span>
              <button onclick="toggleService('${s.id}')" aria-label="Remove ${s.name}" class="w-7 h-7 rounded-lg bg-rose-500/15 hover:bg-rose-500/30 text-rose-400 flex items-center justify-center transition-colors">
                <i class="fa-solid fa-xmark text-xs"></i>
              </button>
            </div>
          </div>
        `).join('');

        // Update Badges & Floating Bar
        navBadge.textContent = count;
        navBadge.classList.remove('hidden');
        floatCount.textContent = count;
        floatTotal.textContent = numericTotal > 0 ? `${formatINR(numericTotal)}${customItemsCount > 0 ? '+' : ''}` : 'Custom';
        floatAdv.textContent = numericTotal > 0 ? formatINR(advanceAmount) : 'TBD';
        floatBar.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
      }
    }

    // Build & Open WhatsApp Pre-Filled Message
    function sendWhatsAppEstimate() {
      const selectedServices = SERVICES_DATA.filter(s => selectedServiceIds.has(s.id));
      const clientNote = document.getElementById('client-project-note').value.trim();

      let message = `Hello *DIGITAL DREAMS*! 👋\nI would like to request a quote / start an order with the following details:\n\n`;

      if (selectedServices.length === 0) {
        message += `• Interested in discussing a custom digital project.\n`;
      } else {
        let numericTotal = 0;
        let hasCustom = false;
        message += `*Selected Services:*\n`;
        selectedServices.forEach((s, idx) => {
          message += `${idx + 1}. ${s.name} — _${s.priceDisplay}_\n`;
          if (s.isCustom) hasCustom = true;
          else numericTotal += s.numericPrice;
        });

        message += `\n*Estimated Starting Total:* ${numericTotal > 0 ? formatINR(numericTotal) : 'Custom Pricing'}${hasCustom && numericTotal > 0 ? ' + Custom Items' : ''}\n`;
        if (numericTotal > 0) {
          message += `*50% Advance to Kickoff:* ${formatINR(Math.round(numericTotal * 0.5))}\n`;
        }
      }

      if (clientNote) {
        message += `\n*Client / Brand Note:* ${clientNote}\n`;
      }

      message += `\nPlease share the final quotation and next steps.`;

      const url = `https://wa.me/919319818037?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    // Render Terms & Conditions
    function renderTerms(filterText = '') {
      const grid = document.getElementById('terms-grid');
      const filtered = TERMS_DATA.filter(t =>
        t.text.toLowerCase().includes(filterText.toLowerCase()) || t.num.includes(filterText)
      );

      grid.innerHTML = filtered.map(term => `
        <div class="glass-card rounded-2xl p-5 flex items-start gap-4">
          <span class="px-2.5 py-1 rounded-lg bg-brand-cyan/15 border border-brand-cyan/30 font-display font-bold text-xs text-brand-cyan shrink-0 mt-0.5">
            ${term.num}
          </span>
          <p class="text-slate-300 text-sm leading-relaxed">${term.text}</p>
        </div>
      `).join('');
    }

    // ==================== INTERACTIVE HERO PIXEL PARTICLE CANVAS ====================
    function initHeroPixelCanvas() {
      const canvas = document.getElementById('hero-pixel-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      let width, height;
      let particles = [];
      const brandColors = ['#00A8E8', '#2B59C3', '#6A11CB', '#E91E63', '#FF9800', '#FFC107'];
      const mouse = { x: -9999, y: -9999, radius: 130 };

      function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        createParticles();
      }

      function createParticles() {
        particles = [];
        const count = Math.min(Math.floor((width * height) / 16000), 75);
        for (let i = 0; i < count; i++) {
          const size = Math.random() * 6 + 3;
          const x = Math.random() * width;
          const y = Math.random() * height;
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            size,
            color: brandColors[Math.floor(Math.random() * brandColors.length)],
            alpha: Math.random() * 0.45 + 0.15,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35
          });
        }
      }

      window.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });

      window.addEventListener('mouseleave', () => {
        mouse.x = -9999;
        mouse.y = -9999;
      });

      window.addEventListener('resize', resize);

      function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Gentle ambient drift
          p.baseX += p.vx;
          p.baseY += p.vy;

          if (p.baseX < 0 || p.baseX > width) p.vx *= -1;
          if (p.baseY < 0 || p.baseY > height) p.vy *= -1;

          // Mouse repulsion (pixel dispersion effect)
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force * 6;
            p.y -= Math.sin(angle) * force * 6;
          } else {
            // Smooth spring return
            p.x += (p.baseX - p.x) * 0.06;
            p.y += (p.baseY - p.y) * 0.06;
          }

          // Draw crisp square pixel block
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.roundRect(p.x, p.y, p.size, p.size, 1.5);
          ctx.fill();
          ctx.restore();
        }

        requestAnimationFrame(animate);
      }

      resize();
      animate();
    }

    // ==================== INITIALIZATION & EVENT LISTENERS ====================
    window.addEventListener('DOMContentLoaded', () => {
      renderServices();
      updateEstimatorUI();
      renderTerms();

      // Category Tab Switching
      document.querySelectorAll('.cat-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.cat-tab').forEach(b => {
            b.classList.remove('active', 'bg-gradient-to-r', 'from-brand-cyan', 'to-brand-royal', 'text-white', 'shadow-lg', 'shadow-brand-cyan/25');
            b.classList.add('bg-white/5', 'text-slate-300', 'border', 'border-white/10');
          });
          btn.classList.add('active', 'bg-gradient-to-r', 'from-brand-cyan', 'to-brand-royal', 'text-white', 'shadow-lg', 'shadow-brand-cyan/25');
          btn.classList.remove('bg-white/5', 'text-slate-300', 'border', 'border-white/10');

          activeCategory = btn.dataset.category;
          renderServices();
        });
      });

      // Service Search Input
      document.getElementById('service-search').addEventListener('input', e => {
        searchQuery = e.target.value;
        renderServices();
      });

      // Reset Filters
      document.getElementById('reset-filters-btn').addEventListener('click', () => {
        searchQuery = '';
        activeCategory = 'all';
        document.getElementById('service-search').value = '';
        document.querySelector('.cat-tab[data-category="all"]').click();
      });

      // Clear Estimator
      document.getElementById('clear-estimate-btn').addEventListener('click', () => {
        selectedServiceIds.clear();
        renderServices();
        updateEstimatorUI();
        showToast('Estimate cleared');
      });

      // Send WhatsApp Quote Button
      document.getElementById('send-whatsapp-quote-btn').addEventListener('click', sendWhatsAppEstimate);

      // Terms Filter
      document.getElementById('terms-filter').addEventListener('input', e => {
        renderTerms(e.target.value);
      });

      // Quick Inquiry Form -> WhatsApp
      document.getElementById('quick-inquiry-form').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('inq-name').value.trim();
        const category = document.getElementById('inq-category').value;
        const msg = document.getElementById('inq-message').value.trim();

        const formatted = `Hello *DIGITAL DREAMS*! 👋\n\n*Name:* ${name}\n*Interested In:* ${category}\n*Project Details:* ${msg}\n\nLooking forward to working together!`;
        window.open(`https://wa.me/919319818037?text=${encodeURIComponent(formatted)}`, '_blank', 'noopener,noreferrer');
      });

      // Mobile Navigation Toggle
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });

      // IntersectionObserver for Scroll-Triggered Reveal Animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    });

    window.onload = function () {
      initHeroPixelCanvas();
    };
