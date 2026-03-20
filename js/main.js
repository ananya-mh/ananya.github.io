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

const movingCatContainer = document.getElementById('movingCatContainer');
const movingCatImg = document.getElementById('movingCatImg');
const catGifs = ['cat.gif', 'cat2.gif', 'cat3.gif'];

function spawnCat() {
  const isRight = Math.random() > 0.5;
  const randomCat = catGifs[Math.floor(Math.random() * catGifs.length)];
  
  movingCatImg.src = randomCat;
  movingCatContainer.classList.remove('walking-right', 'walking-left', 'visible');
  
  void movingCatContainer.offsetWidth;
  
  movingCatContainer.classList.add('visible');
  movingCatContainer.classList.add(isRight ? 'walking-right' : 'walking-left');
  
  setTimeout(() => {
    movingCatContainer.classList.remove('visible');
  }, 15000);
}

document.getElementById('catTrigger').addEventListener('click', e => {
  e.preventDefault();
  spawnCat();
  catPopup.classList.add('open');
});

popupClose.addEventListener('click', () => catPopup.classList.remove('open'));
popupOk.addEventListener('click', () => catPopup.classList.remove('open'));

catPopup.addEventListener('click', e => {
  if (e.target === catPopup) catPopup.classList.remove('open');
});
