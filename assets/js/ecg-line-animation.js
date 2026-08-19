  // Fade-up reveal on scroll — toggles Tailwind utility classes only
  const revealTargets = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-3');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => revealObserver.observe(el));
 
  // ECG line draw — measures the real path length, then plays the
  // Tailwind-config animation once the SVG scrolls into view
  const ecgSvg = document.getElementById('ecgSvg');
  const ecgPath = document.getElementById('ecgPath');
  const ecgDot = document.getElementById('ecgDot');
 
  const ecgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const len = ecgPath.getTotalLength();
        ecgPath.style.strokeDasharray = len;
        ecgPath.style.strokeDashoffset = len;
        void ecgPath.getBoundingClientRect(); // force reflow
        ecgPath.classList.remove('opacity-0');
        ecgPath.classList.add('animate-draw-ecg');
        ecgDot.classList.remove('opacity-0');
        ecgDot.classList.add('animate-dot-appear');
        ecgObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  ecgObserver.observe(ecgSvg);