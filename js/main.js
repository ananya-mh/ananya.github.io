const links = document.querySelectorAll('a[data-section]');
const sections = document.querySelectorAll('section');

function show(id) {
  if (!document.getElementById(id)) id = 'home';
  sections.forEach(s => s.classList.remove('visible'));
  links.forEach(l => l.classList.remove('active'));
  document.getElementById(id).classList.add('visible');
  document.querySelectorAll(`[data-section="${id}"]`).forEach(l => l.classList.add('active'));
  history.replaceState(null, '', '#' + id);
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    show(link.dataset.section);
  });
});

// restore section from hash on load
const initial = window.location.hash.replace('#', '') || 'home';
show(initial);

// cat popup
const catPopup = document.getElementById('catPopup');
const popupClose = document.getElementById('popupClose');
const popupOk = document.getElementById('popupOk');

document.getElementById('catTrigger').addEventListener('click', e => {
  e.preventDefault();
  catPopup.classList.add('open');
});

popupClose.addEventListener('click', () => catPopup.classList.remove('open'));
popupOk.addEventListener('click', () => catPopup.classList.remove('open'));

catPopup.addEventListener('click', e => {
  if (e.target === catPopup) catPopup.classList.remove('open');
});
