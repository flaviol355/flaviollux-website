document.addEventListener("DOMContentLoaded", function() {
    // Get current page URL
    const currentPageUrl = window.location.pathname.split('/').pop();

    // Get all nav links
    const navLinks = document.querySelectorAll('nav ul#menu a');

    // Loop through all nav links
    navLinks.forEach(link => {
        // Check if nav link href matches current page URL
        if (link.getAttribute('href') === currentPageUrl) {
            // Add 'active' class to the matching nav link
            link.classList.add('active');
        } else {
            // Remove 'active' class if it's not the current page
            link.classList.remove('active');
        }
    });
});
