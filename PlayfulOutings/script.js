document.addEventListener('DOMContentLoaded', () => {
    // Select all navbar links
    const navLinks = document.querySelectorAll('.dropdown a[data-target]');
    
    // Select all carousel pages
    const carouselPages = document.querySelectorAll('.carousel-wrap');

    // Add click event listener to each navbar link
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            // Get the target page from the data attribute
            const targetPage = link.getAttribute('data-target');

            // Hide all carousel pages
            carouselPages.forEach(page => {
                page.classList.remove('active');
            });

            // Show the targeted carousel page
            const activePage = document.querySelector(`.carousel-wrap[data-carousel="${targetPage}"]`);
            if (activePage) {
                activePage.classList.add('active');
            }
        });
    });

    // Optionally, show the first page by default
    const firstPage = document.querySelector('.carousel-wrapper');
    if (firstPage) {
        firstPage.classList.add('active');
    }
});
