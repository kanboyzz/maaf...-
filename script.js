// Ambil elemen DOM
const bgMusic = document.getElementById('bgMusic');
const btnStart = document.getElementById('btnStart');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const btnForgive = document.getElementById('btnForgive');
const btnContinue = document.getElementById('btnContinue');
const btnReplay = document.getElementById('btnReplay');

const cards = {
  1: document.getElementById('card1'),
  2: document.getElementById('card2'),
  3: document.getElementById('card3'),
  4: document.getElementById('card4'),
  5: document.getElementById('card5')
};

// Fungsi pindah slide
function showCard(cardNumber) {
  Object.values(cards).forEach(card => card.classList.add('hidden'));
  cards[cardNumber].classList.remove('hidden');
}

// Play musik saat klik pertama
function playMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
}

// Slide 1 -> Slide 2
btnStart.addEventListener('click', () => {
  playMusic();
  showCard(2);
});

// Slide 2 -> Slide 3 (Iya)
btnYes.addEventListener('click', () => {
  showCard(3);
});

// Fitur Tombol "Gak Mau" Lari/Kabur
function moveButton() {
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40) - (window.innerWidth / 2 - 100);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40) - (window.innerHeight / 2 - 100);
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveButton();
});

// Slide 3 -> Slide 4
btnForgive.addEventListener('click', () => {
  showCard(4);
});

// Slide 4 -> Slide 5
btnContinue.addEventListener('click', () => {
  showCard(5);
});

// Slide 5 -> Ulangi dari Awal
btnReplay.addEventListener('click', () => {
  btnNo.style.position = 'static';
  showCard(1);
});
