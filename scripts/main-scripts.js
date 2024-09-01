document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌓';
    }

    // Language change functionality
    languageSelect.addEventListener('change', function() {
        // Here you would implement the logic to change the language
        // For demonstration, we'll just log the selected language
        console.log('Selected language:', languageSelect.value);
    });

    // Initialize theme icon
    updateThemeIcon();
});