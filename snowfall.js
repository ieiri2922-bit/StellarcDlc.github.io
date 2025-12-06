document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.className = 'snowflakes';
    document.body.appendChild(snowflakesContainer);

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        
        // Random position
        const posX = Math.random() * 100;
        
        // Random animation duration between 5 and 15 seconds
        const duration = Math.random() * 10 + 5;
        
        // Random delay
        const delay = Math.random() * 5;
        
        // Apply styles
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${posX}%`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        
        // Add some random horizontal movement
        snowflake.style.setProperty('--random-x', (Math.random() * 100 - 50) + 'px');
        
        snowflakesContainer.appendChild(snowflake);
        
        // Remove snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, (duration + delay) * 1000);
    }
    
    // Create initial snowflakes
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
    
    // Add new snowflakes periodically
    setInterval(createSnowflake, 500);
});
