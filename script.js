/**
 * CONFIGURATION: Easily customize your links here
 */
const CONFIG = {
  // Teen Patti Palat Game Links
  teenPattiPalat: {
    downloadUrl: 'https://www.palat.cc/share/AgjJjxy=1001',
    shareUrl: 'https://www.palat.cc/share/AgjJjxy=1001',
    title: 'Download Teen Patti Palat - New Version'
  },
  // Backward compatibility alias
  jungleHaan: {
    downloadUrl: 'https://www.palat.cc/share/AgjJjxy=1001',
    shareUrl: 'https://www.palat.cc/share/AgjJjxy=1001',
    title: 'Download Teen Patti Palat - New Version'
  },

  // Sabka Game Links
  sabkaGame: {
    downloadUrl: 'https://www.palat.cc/share/AgjJjxy=1002',
    shareUrl: 'https://www.palat.cc/share/AgjJjxy=1002',
    title: 'Download Sabka Game - New Version'
  },

  // Telegram Channel
  telegram: {
    url: 'https://t.me/drake_rioo',
    handle: '@drake_rioo'
  }
};

/* ==========================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setupDownloadButtons();
  setupShareButtons();
  setupTelegramLink();
  initBackgroundParticles();
});

/* ==========================================================
   DOWNLOAD BUTTONS HANDLER
   ========================================================== */
function setupDownloadButtons() {
  const downloadBtns = document.querySelectorAll('.btn-download');

  downloadBtns.forEach(btn => {
    const key = btn.dataset.downloadKey;
    if (key && CONFIG[key]) {
      btn.href = CONFIG[key].downloadUrl;
    }

    btn.addEventListener('click', (e) => {
      // Button press visual feedback
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);

      // If URL is just '#' or placeholder, inform user
      const targetUrl = btn.getAttribute('href');
      if (!targetUrl || targetUrl === '#') {
        e.preventDefault();
        showToast('Please set your download link in script.js', '⚠️');
      }
    });
  });
}

/* ==========================================================
   SHARE BUTTONS HANDLER (Web Share API + Clipboard Fallback)
   ========================================================== */
function setupShareButtons() {
  const shareBtns = document.querySelectorAll('.btn-share');

  shareBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const key = btn.dataset.shareKey;
      const gameConfig = CONFIG[key] || {};
      const title = btn.dataset.shareTitle || gameConfig.title || 'Download New Version';
      const shareUrl = gameConfig.shareUrl || window.location.href;

      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: `Download ${title} now! Check it out here:`,
            url: shareUrl
          });
          return;
        } catch (err) {
          if (err.name !== 'AbortError') {
            copyToClipboard(shareUrl);
          }
        }
      } else {
        copyToClipboard(shareUrl);
      }
    });
  });
}

/* Clipboard Copy Utility */
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('Link copied to clipboard!'))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    showToast('Link copied to clipboard!');
  } catch (err) {
    showToast('Failed to copy link', '✕');
  }
  document.body.removeChild(textArea);
}

/* ==========================================================
   TELEGRAM LINK HANDLER
   ========================================================== */
function setupTelegramLink() {
  const telegramCard = document.querySelector('[data-telegram-link]');
  if (telegramCard && CONFIG.telegram) {
    telegramCard.href = CONFIG.telegram.url;
    const handleEl = telegramCard.querySelector('.telegram-handle');
    if (handleEl && CONFIG.telegram.handle) {
      handleEl.textContent = CONFIG.telegram.handle;
    }
  }
}

/* ==========================================================
   TOAST POPUP NOTIFICATION
   ========================================================== */
let toastTimeout;
function showToast(message, icon = '✓') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const msgSpan = toast.querySelector('.toast-message');
  const iconSpan = toast.querySelector('.toast-icon');

  if (msgSpan) msgSpan.textContent = message;
  if (iconSpan) iconSpan.textContent = icon;

  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* ==========================================================
   AMBIENT BACKGROUND PARTICLES (Starry Cosmos)
   ========================================================== */
function initBackgroundParticles() {
  const canvas = document.getElementById('particles-bg');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = 38;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.7 + 0.15,
      speedAlpha: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      vy: -(Math.random() * 0.2 + 0.05),
      color: Math.random() > 0.4 ? '255, 255, 255' : '192, 132, 252'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.alpha += p.speedAlpha;
      if (p.alpha > 0.85 || p.alpha < 0.1) {
        p.speedAlpha = -p.speedAlpha;
      }

      p.y += p.vy;
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;
      ctx.shadowBlur = p.radius > 1 ? 6 : 0;
      ctx.shadowColor = `rgba(${p.color}, 0.8)`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}
