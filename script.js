// ======= NAVIGATION TOGGLE =======
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

toggle.onclick = () => {
  nav.classList.toggle('active');
};

// ======= AOS INITIALIZE =======
AOS.init({
  duration: 1000, // animation duration
  easing: 'ease-in-out',
  once: true, // animate only once
});
