"use strict";
// 1. Tema: Kullanıcı seçimi tarayıcıda saklanır; kişisel veri toplanmaz.
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
let savedTheme = null;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { /* depolama kapalı olabilir */ }
if (savedTheme === 'dark') root.dataset.theme = 'dark';
function syncThemeButton() { const dark = root.dataset.theme === 'dark'; themeButton.setAttribute('aria-pressed', String(dark)); themeButton.setAttribute('aria-label', dark ? 'Açık temaya geç' : 'Koyu temaya geç'); }
syncThemeButton();
themeButton.addEventListener('click', () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) {} syncThemeButton(); showToast('Tema değiştirildi.'); });
// 2. Mobil menü: erişilebilirlik durumu her açma/kapamada güncellenir.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Menüyü aç'); }));
// 3. Proje filtreleme.
const filterButtons = document.querySelectorAll('[data-filter]');
filterButtons.forEach(button => button.addEventListener('click', () => { const selected = button.dataset.filter; let visible = 0; document.querySelectorAll('.project-card').forEach(card => { const matches = selected === 'all' || card.dataset.category === selected; card.hidden = !matches; if (matches) visible++; }); filterButtons.forEach(b => { const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); }); const summary = document.querySelector('#filter-summary'); if (summary) summary.textContent = `${visible} çalışma gösteriliyor.`; }));
// 4. Form doğrulama ve 5. güvenli geri bildirim. Bu form ağ isteği YAPMAZ.
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', async event => { event.preventDefault(); const fields = [{id:'name',message:'Lütfen adınızı girin.'},{id:'email',message:'Geçerli bir e-posta adresi girin.'},{id:'message',message:'Mesaj en az 10 karakter olmalıdır.'}]; let firstInvalid = null; for (const field of fields) { const element = document.getElementById(field.id); const value = element.value.trim(); const valid = field.id === 'name' ? value.length >= 2 : field.id === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : value.length >= 10; const error = document.getElementById(field.id+'-error'); error.textContent = valid ? '' : field.message; element.setAttribute('aria-invalid', String(!valid)); if (!valid && !firstInvalid) firstInvalid = element; } const status = document.querySelector('#form-status'); if (firstInvalid) { status.textContent = 'Lütfen işaretli alanları düzeltin.'; firstInvalid.focus(); return; } const name = document.querySelector('#name').value.trim(), email = document.querySelector('#email').value.trim(), message = document.querySelector('#message').value.trim(); const draft = `Gönderen: ${name} (${email})\n\n${message}`; try { await navigator.clipboard.writeText(draft); status.textContent = 'Mesaj taslağı kopyalandı. Uygun iletişim kanalında kendiniz gönderebilirsiniz.'; showToast('Mesaj taslağı kopyalandı.'); } catch (_) { status.textContent = 'Mesaj geçerli; tarayıcı kopyalamaya izin vermedi. Mesajı kendiniz seçip kopyalayabilirsiniz.'; } });
function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); // Bildirim kullanıcı eyleminden sonra, kısa süre görünür.
 window.clearTimeout(showToast.timeoutId); showToast.timeoutId = window.setTimeout(() => toast.classList.remove('show'), 2500); }
const year = document.getElementById('year'); if (year) year.textContent = String(new Date().getFullYear());