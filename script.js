// ==============================
// AOS Initialize (Already in HTML inline)
// ==============================
// AOS.init({ duration: 1200 });


// ==============================
// Dark Mode Toggle
// ==============================
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ==============================
// Back To Top Button
// ==============================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==============================
// Portfolio Filter
// ==============================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ==============================
// Testimonials Slider
// ==============================
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

// Optional: Auto Slide
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000); // Change slide every 5 sec

// ==============================
// Lightbox
// ==============================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img').src;
    lightboxImg.src = img;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// ==============================
// Preloader
// ==============================
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});
