document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Light Mode';
  }

  toggleButton.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      toggleButton.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = '☀️ Light Mode';
      localStorage.setItem('theme', 'dark');
    }
  });
});
