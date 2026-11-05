document.querySelectorAll('.images img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoom');
  });
});