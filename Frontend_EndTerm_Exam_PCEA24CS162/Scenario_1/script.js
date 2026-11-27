const tiles = document.querySelectorAll('.tile');
const lightbox = document.getElementById('lightbox');
const bigTile = document.getElementById('bigTile');
const closeBtn = document.getElementById('closeBtn');

for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', function () {
    bigTile.style.background = this.style.background;
    bigTile.textContent = this.textContent;
    lightbox.classList.remove('hidden');
  });
}

function closeLightbox() {
  lightbox.classList.add('hidden');
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});