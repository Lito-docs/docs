// Custom Landing Page Scripts

// Intersection Observer for feature card animations
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.feature-card[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  cards.forEach(card => observer.observe(card));
});

// Copy code button functionality
function copyCode(button) {
  const codeEl = button.previousElementSibling;
  const text = codeEl.textContent;

  navigator.clipboard.writeText(text).then(() => {
    // Show success feedback
    const originalHTML = button.innerHTML;
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    button.style.color = '#22c55e';

    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}
