const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('show');
  menuButton.innerHTML = isOpen ? '&times;' : '&#9776;';
});
