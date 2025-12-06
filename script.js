// Добавляем анимацию клика на кнопку
document.addEventListener('DOMContentLoaded', function() {
    const buyBtn = document.querySelector('.buy-btn');
    
    if (buyBtn) {
        buyBtn.addEventListener('click', function(e) {
            // Создаем эффект частиц
            for(let i = 0; i < 15; i++) {
                createParticle(e.clientX, e.clientY);
            }
            
            // Временное сообщение
            const message = document.createElement('div');
            message.textContent = 'Начинаем загрузку...';
            message.style.position = 'fixed';
            message.style.bottom = '30px';
            message.style.left = '50%';
            message.style.transform = 'translateX(-50%)';
            message.style.color = '#fff';
            message.style.fontSize = '16px';
            message.style.fontWeight = '600';
            message.style.background = 'rgba(138, 43, 226, 0.9)';
            message.style.padding = '12px 30px';
            message.style.borderRadius = '12px';
            message.style.zIndex = '10000';
            message.style.boxShadow = '0 8px 25px rgba(138, 43, 226, 0.4)';
            message.style.animation = 'fadeInOut 3s ease forwards';
            
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 3000);
        });
    }
    
    // Добавляем эффект свечения для 3D буквы при наведении
    const letterS = document.querySelector('.letter-s');
    if (letterS) {
        letterS.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 50px rgba(138, 43, 226, 0.8))';
        });
        
        letterS.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 30px rgba(138, 43, 226, 0.5))';
        });
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    const size = 6 + Math.random() * 8;
    particle.style.position = 'fixed';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    const colors = ['#8a2be2', '#9370db', '#ba55d3', '#dda0dd'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.zIndex = '10000';
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    
    document.body.appendChild(particle);
    
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 5;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    
    let opacity = 1;
    const animation = setInterval(() => {
        particle.style.left = parseFloat(particle.style.left) + vx + 'px';
        particle.style.top = parseFloat(particle.style.top) + vy + 'px';
        opacity -= 0.03;
        particle.style.opacity = opacity;
        particle.style.transform = `scale(${opacity})`;
        
        if(opacity <= 0) {
            clearInterval(animation);
            particle.remove();
        }
    }, 16);
}

