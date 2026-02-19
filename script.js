lucide.createIcons();

/* * 1. CUSTOM CURSOR LOGIC 
 */
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');
const cursorText = follower.querySelector('span');

let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

window.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    // Initial position for follower to prevent jump
    if (followerX === 0) {
        followerX = cursorX;
        followerY = cursorY;
    }
});

// Smooth follow animation for the outer ring
const renderCursor = () => {
    followerX += (cursorX - followerX - 20) * 0.15; // 20 is half of original width
    followerY += (cursorY - followerY - 20) * 0.15;

    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';

    requestAnimationFrame(renderCursor);
};
renderCursor();

// Cursor visibility handling
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
    follower.style.opacity = 1;
});
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
    follower.style.opacity = 0;
});

// Hover effect detection
const interactives = document.querySelectorAll('.cursor-active, a, button, .tilt-card');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
        if (el.tagName === 'A' || el.tagName === 'BUTTON') {
            if (el.href && el.href.includes('github')) {
                cursorText.innerText = 'GitHub';
            } else {
                cursorText.innerText = el.innerText.includes('View') ? 'Open' : 'Link';
            }
        } else if (el.classList.contains('tilt-card')) {
            cursorText.innerText = 'GitHub';
        } else {
            cursorText.innerText = 'Click';
        }
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

/* * 2. TYPEWRITER EFFECT
 */
const typeWriterElement = document.getElementById('typewriter');
const textsToType = [
    "Software Engineer",
    ".NET Engineer",
    "Backend Developer",
    "Solution Architect"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentText = textsToType[textIndex];

    if (isDeleting) {
        typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Faster when deleting
    } else {
        typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Finished typing word, pause before deleting
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next word
        isDeleting = false;
        textIndex = (textIndex + 1) % textsToType.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (typeWriterElement) {
        typeWriter();
    }
});


/* * 3. PARTICLE NETWORK ANIMATION 
 */
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null, radius: 150 };

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5;
        this.density = (Math.random() * 20) + 1;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                this.x += (dx / distance) * (mouse.radius - distance) / 100;
                this.y += (dy / distance) * (mouse.radius - distance) / 100;
            }
        }
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const initParticles = () => {
    particles = [];
    for (let i = 0; i < 80; i++) particles.push(new Particle());
};

const animateParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 - distance / 800})`;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
};
initParticles();
animateParticles();

/* * 4. SCROLL REVEAL & TILT 
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));

document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${((y - centerY) / centerY) * -5}deg) rotateY(${((x - centerX) / centerX) * 5}deg)`;
        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});

document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = `translate(0, 0)`);
});
// ============================================
// ENHANCED LOADING SCREEN - ROBUST VERSION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    
    // 1. Safe SessionStorage Check
    let hasSeenLoading = false;
    try {
        hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    } catch (e) {
        console.warn('Session storage is restricted');
    }
    
    if (hasSeenLoading) {
        loadingScreen.style.display = 'none';
        return;
    }
    
    const percentageElement = document.getElementById('loading-percentage');
    const loadingText = document.getElementById('loading-text');
    
    const messages = ['Initializing', 'Loading Assets', 'Almost Ready', 'Welcome'];
    let messageIndex = 0;
    let percentage = 0;
    
    const totalDuration = 2500; // قللنا الوقت لـ 2.5 ثانية عشان أسرع للمستخدم
    const intervalTime = 30; 
    const increments = totalDuration / intervalTime;
    const percentageStep = 100 / increments;
    
    // دالة إخفاء الشاشة
    const hideLoadingScreen = () => {
        try {
            sessionStorage.setItem('hasSeenLoading', 'true');
        } catch (e) {}
        
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // التأكد من تفعيل السكرول لو كان متوقف
            document.body.style.overflow = '';
        }, 800);
    };
    
    // 2. Animate percentage counter
    const percentageInterval = setInterval(() => {
        if (percentage < 100) {
            percentage += percentageStep;
            if (percentage > 100) percentage = 100;
            
            if (percentageElement) {
                percentageElement.textContent = Math.floor(percentage);
            }
            
            // Change loading text based on percentage
            if (loadingText) {
                if (percentage > 25 && messageIndex === 0) {
                    messageIndex = 1;
                    loadingText.textContent = messages[messageIndex];
                } else if (percentage > 50 && messageIndex === 1) {
                    messageIndex = 2;
                    loadingText.textContent = messages[messageIndex];
                } else if (percentage > 80 && messageIndex === 2) {
                    messageIndex = 3;
                    loadingText.textContent = messages[messageIndex];
                }
            }
        } else {
            clearInterval(percentageInterval);
            hideLoadingScreen();
        }
    }, intervalTime);

    // 3. Failsafe Timeout: إجبار الشاشة على الإخفاء بعد 4 ثواني كحد أقصى مهما حصل
    setTimeout(() => {
        clearInterval(percentageInterval);
        if (loadingScreen.style.display !== 'none') {
            hideLoadingScreen();
        }
    }, 4000);
});

// Initialize Lucide icons for loading screen
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// ============================================
// PROJECT FILTERING SYSTEM
// ============================================

class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.noResultsMessage = document.getElementById('no-results');
        this.activeFilter = 'all';
        
        this.init();
    }

    init() {
        // Add click event listeners to filter buttons
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = e.currentTarget.dataset.filter;
                this.filterProjects(filter);
                this.updateActiveButton(e.currentTarget);
            });
        });

        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    filterProjects(filter) {
        this.activeFilter = filter;
        let visibleCount = 0;

        this.projectCards.forEach(card => {
            const categories = card.dataset.category.split(' ');
            const shouldShow = filter === 'all' || categories.includes(filter);

            if (shouldShow) {
                // Show card with animation
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
                visibleCount++;
            } else {
                // Hide card with animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Show/hide no results message
        if (visibleCount === 0) {
            this.noResultsMessage.classList.remove('hidden');
        } else {
            this.noResultsMessage.classList.add('hidden');
        }

        // Reinitialize Lucide icons after DOM changes
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 350);
    }

    updateActiveButton(clickedButton) {
        // Remove active class from all buttons
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to clicked button
        clickedButton.classList.add('active');
    }
}

// Initialize filtering when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ProjectFilter();
});
