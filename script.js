// Script für Dark Mode Umschalter und Speicherung in localStorage
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('darkModeCheckbox');
  const body = document.body;

  // Check localStorage und setze Modus
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
