const toggle = document.getElementById('menupng');
const cros = document.getElementById('closeMenu');
const resMenu = document.getElementById('responsive-menu');

function openMenu() {
  resMenu.style.display = 'flex';
}

function closeMenu() {
  resMenu.style.display = 'none';
}

toggle.addEventListener('click', openMenu);
cros.addEventListener('click', closeMenu);
resMenu.addEventListener('click', closeMenu);