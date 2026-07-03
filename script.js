function addWish() {
    const wish = prompt('Enter your birthday wish for Sabeeha:');
    if (wish && wish.trim() !== '') {
        const wishList = document.getElementById('wishes-list');
        const wishElement = document.createElement('div');
        wishElement.className = 'user-wish';
        wishElement.innerHTML = `<p>"${wish.trim()}"</p>`;
        wishList.appendChild(wishElement);
        
        const wishes = JSON.parse(localStorage.getItem('sabeehaWishes') || '[]');
        wishes.push(wish.trim());
        localStorage.setItem('sabeehaWishes', JSON.stringify(wishes));
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const wishes = JSON.parse(localStorage.getItem('sabeehaWishes') || '[]');
    const wishList = document.getElementById('wishes-list');
    wishes.forEach(wish => {
        const wishElement = document.createElement('div');
        wishElement.className = 'user-wish';
        wishElement.innerHTML = `<p>"${wish}"</p>`;
        wishList.appendChild(wishElement);
    });
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF85B3', '#95E1D3'][Math.floor(Math.random() * 5)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '5';
    document.body.appendChild(confetti);
    
    let top = 0;
    const interval = setInterval(() => {
        top += Math.random() * 3 + 2;
        confetti.style.top = top + 'px';
        if (top > window.innerHeight) {
            clearInterval(interval);
            confetti.remove();
        }
    }, 20);
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createConfetti(), i * 30);
        }
    }
});