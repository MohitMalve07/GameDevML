// Navigation toggle for mobile menu
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            // Burger animation
            burger.classList.toggle('toggle');
        });
    }
    
    // Cyberpunk animation effects
    const addGlowEffect = () => {
        const glowElements = document.querySelectorAll('.glow-effect');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.classList.add('active-glow');
            });
            
            element.addEventListener('mouseout', () => {
                element.classList.remove('active-glow');
            });
        });
    };
    
    addGlowEffect();
});