let items = document.querySelectorAll('.silder .item'); // Select ALL slider items
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3; //Start from first item

function loadShow() {
    let stt = 0;
    const gap = 30; //Gap in pixels between items
    const baseOffset = 120 + gap;
    items.forEach(item => {
        item.style.pointerEvents = 'none'; // Disable all items initially
    });

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = `none`;
    items[active].style.opacity = 1;
    items[active].style.pointerEvents = 'auto'; // Enable active item

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${baseOffset * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-baseOffset * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}


const bg = document.querySelector('.mypic');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

bg.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;

    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});



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