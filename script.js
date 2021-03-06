document.querySelectorAll('.dropbtn').forEach((el) => {
  el.addEventListener('click', (event) => {
    el.firstElementChild.classList.toggle('show');
    el.style.opacity = 1;
  });
});

window.onclick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};
