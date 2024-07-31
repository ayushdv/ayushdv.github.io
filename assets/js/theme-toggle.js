document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.body.classList.add(currentTheme);

  if (currentTheme === 'dark') {
    toggleButton.textContent = 'Switch to Light Mode';
  }

  toggleButton.addEventListener('click', function() {
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.replace('light-mode', 'dark-mode');
      toggleButton.textContent = 'Switch to Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.replace('dark-mode', 'light-mode');
      toggleButton.textContent = 'Switch to Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  });
});
