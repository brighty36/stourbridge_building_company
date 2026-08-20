const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('open');
    document.body.classList.remove('nav-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    navigation.classList.toggle('open', !isOpen);
    document.body.classList.toggle('nav-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
    }
  });
}

document.querySelectorAll('form[data-draft-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (status) {
      status.textContent = 'Draft form only — no details have been sent.';
      status.focus();
    }
  });
});

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
  const previousButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  const currentLabel = carousel.querySelector('[data-carousel-current]');

  if (slides.length < 2 || !previousButton || !nextButton) return;

  let currentIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));

  const showSlide = (newIndex) => {
    currentIndex = (newIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const isCurrent = index === currentIndex;
      slide.hidden = !isCurrent;
      slide.classList.toggle('is-active', isCurrent);
      slide.setAttribute('aria-hidden', String(!isCurrent));
    });

    if (currentLabel) currentLabel.textContent = String(currentIndex + 1);
  };

  previousButton.addEventListener('click', () => showSlide(currentIndex - 1));
  nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
  showSlide(currentIndex);
});
