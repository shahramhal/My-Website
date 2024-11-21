// Smooth scroll for buttons
document.querySelector('.btn').addEventListener('click', (e) => {
    // Prevent default link action (smooth scroll)
    e.preventDefault();
    
    // Create the ripple effect
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple');
    btn.appendChild(ripple);

    // Remove the ripple after animation completes
    setTimeout(() => {
        ripple.remove();
    }, 600); // Animation duration (should match the CSS animation time)

    // Smooth scroll to the projects section
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});


