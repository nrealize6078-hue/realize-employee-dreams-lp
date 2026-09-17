(() => {
  const progress = document.getElementById('reading-progress');
  if (!progress) return;
  let scheduled = false;
  const update = () => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    const amount = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
    progress.style.transform = `scaleX(${amount})`;
    scheduled = false;
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('load', schedule, { once: true });
  if (document.fonts) document.fonts.ready.then(schedule);
  update();
})();

/* 固定ボトムバー: ヒーローを過ぎたら出す */
(() => {
  const bar = document.getElementById('cta-bar');
  const hero = document.querySelector('.hero');
  if (!bar || !hero) return;
  const show = (v) => bar.classList.toggle('is-visible', v);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => show(!e.isIntersecting), { threshold: 0 }).observe(hero);
  } else {
    show(true);
  }
})();
