// ─── Cookie Consent Logic ────────────────────────────────────────────────────

const STORAGE_KEY = 'cookie_consent';

const banner      = document.getElementById('cookieBanner');
const overlay     = document.getElementById('modalOverlay');
const openModal   = document.getElementById('openModal');
const closeModal  = document.getElementById('closeModal');
const acceptBtn   = document.getElementById('acceptBtn');
const declineBtn  = document.getElementById('declineBtn');
const acceptBtnModal  = document.getElementById('acceptBtnModal');
const declineBtnModal = document.getElementById('declineBtnModal');

// Show banner only if no prior choice
function init() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    // slight delay so the slide-in feels intentional
    setTimeout(() => banner.classList.remove('hidden'), 600);
  }
}

function hideBanner() {
  banner.classList.add('hidden');
}

function hideModal() {
  overlay.setAttribute('aria-hidden', 'true');
}

function showModal() {
  overlay.setAttribute('aria-hidden', 'false');
}

function accept() {
  localStorage.setItem(STORAGE_KEY, 'accepted');
  hideBanner();
  hideModal();
}

function decline() {
  localStorage.setItem(STORAGE_KEY, 'declined');
  hideBanner();
  hideModal();
}

// Start hidden, init will reveal if needed
banner.classList.add('hidden');

openModal.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);
acceptBtn.addEventListener('click', accept);
declineBtn.addEventListener('click', decline);
acceptBtnModal.addEventListener('click', accept);
declineBtnModal.addEventListener('click', decline);

// Close modal on overlay background click
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) hideModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideModal();
});

init();
