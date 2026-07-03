// Page Navigation
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');
const totalPages = pages.length;

/**
 * Display specific page with smooth transitions
 * @param {number} n - Page index to display
 */
function showPage(n) {
    if (n < 0 || n >= totalPages) return;
    
    pages.forEach(page => page.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    pages[n].classList.add('active');
    dots[n].classList.add('active');
    currentPage = n;
    
    // Update page title for SEO
    updatePageTitle(n);
    
    // Analytics tracking
    trackPageView(n);
}

/**
 * Navigate to next page
 */
function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

/**
 * Navigate to previous page
 */
function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

/**
 * Jump to specific page
 * @param {number} n - Page index
 */
function goToPage(n) {
    showPage(n);
}

/**
 * Return to first page
 */
function restartPages() {
    showPage(0);
    window.scrollTo(0, 0);
}

/**
 * Update page title based on current page
 * @param {number} pageIndex - Current page index
 */
function updatePageTitle(pageIndex) {
    const titles = [
        'Happy Birthday Sabeeha - Page 1',
        'Heartfelt Apology - Page 2',
        'Cherished Memories - Page 3',
        'Final Declaration - Page 4'
    ];
    document.title = titles[pageIndex] + ' | Birthday Wishes 2026';
}

/**
 * Track page views for analytics
 * @param {number} pageIndex - Current page index
 */
function trackPageView(pageIndex) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': document.title,
            'page_path': '/sabeeha-birthday.html#page' + (pageIndex + 1)
        });
    }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
    } else if (e.key === 'Home') {
        e.preventDefault();
        goToPage(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        goToPage(totalPages - 1);
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    showPage(0);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Preload images for better performance
    preloadAssets();
});

/**
 * Preload assets for better performance
 */
function preloadAssets() {
    // Preload fonts if needed
    if (document.fonts) {
        document.fonts.ready.then(() => {
            console.log('Fonts loaded');
        });
    }
}