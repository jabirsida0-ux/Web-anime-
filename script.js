const observers = document.querySelectorAll('.fade-in');
const onScroll = () => {
  observers.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
});
