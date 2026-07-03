let currentPage = 0;
const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');
const totalPages = pages.length;

function showPage(n) {
    pages.forEach(page => page.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    pages[n].classList.add('active');
    dots[n].classList.add('active');
    currentPage = n;
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function goToPage(n) {
    showPage(n);
}

function restartPages() {
    showPage(0);
    window.scrollTo(0, 0);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
});

// Show first page on load
window.addEventListener('DOMContentLoaded', () => {
    showPage(0);
});