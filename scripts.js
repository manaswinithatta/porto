// script.js

document.addEventListener("DOMContentLoaded", function() {
    const roles = ["Software Developer", "Cloud Engineer", "Business Analyst", "Data Analyst"];
    const colors = ["#007bff", "#28a745", "#17a2b8", "#ffc107"];
    const fonts = ["Arial, sans-serif", "Arial, sans-serif", "Arial, sans-serif, Arial, sans-serif", "Arial, sans-serif,"];
    let roleIndex = 0;
    let charIndex = 0;
    let currentRole = '';
    const dynamicText = document.querySelector('.dynamic-text');
    
    function typeEffect() {
        if (charIndex < roles[roleIndex].length) {
            currentRole += roles[roleIndex].charAt(charIndex);
            dynamicText.textContent = currentRole;
            dynamicText.style.color = colors[roleIndex];
            dynamicText.style.fontFamily = fonts[roleIndex];
            charIndex++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(eraseEffect, 2000);
        }
    }
    
    function eraseEffect() {
        if (charIndex > 0) {
            currentRole = currentRole.substring(0, charIndex - 1);
            dynamicText.textContent = currentRole;
            charIndex--;
            setTimeout(eraseEffect, 100);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 500);
        }
    }
    
    typeEffect();
    document.querySelectorAll('.internship ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.internship ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
});
