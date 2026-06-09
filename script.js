const themeToggle = document.getElementById('themeToggle');
const scrollButtons = document.querySelectorAll('[data-scroll]');

scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetSelector = button.getAttribute('data-scroll');
    const target = document.querySelector(targetSelector);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

if (themeToggle) {
  themeToggle.disabled = true;
  themeToggle.textContent = 'Ngjyra e mëparshme';
}
