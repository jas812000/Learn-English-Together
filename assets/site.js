// Footer year
const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();

// Click-to-play audio
document.addEventListener('click', (e) => {
  const b = e.target.closest('.speak'); if (!b) return;
  const id = b.getAttribute('data-audio'); const el = document.getElementById('audio-'+id);
  if (el){ el.currentTime=0; el.play(); }
});
