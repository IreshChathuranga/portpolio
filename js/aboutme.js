const dustContainer = document.getElementById('dust-container');

function createDust() {
    const dust = document.createElement('div');
    dust.classList.add('dust');

    // Random vertical position
    dust.style.top = Math.random() * window.innerHeight + 'px';
    dust.style.left = '-10px';
    // dust.style.width = dust.style.height = (1 + Math.random() * 3) + 'px';
    dust.style.animationDuration = (8 + Math.random() * 4) + 's';
    dust.style.animationDelay = Math.random() * 2 + 's';

    dustContainer.appendChild(dust);

    // Remove after animation completes
    setTimeout(() => {
        dust.remove();
    }, 15000);
}

// Create multiple particles
setInterval(createDust, 100);
