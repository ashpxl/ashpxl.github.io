document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navigationItem');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
function goToGames(button) {
  const navLinks = document.querySelectorAll('.navigationItem');
  const btnBg = button.parentNode.querySelector(".particles");
  if (btnBg) btnBg.classList.add("animated");
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  setTimeout(() => {
    a('/games');
    const allGames = document.querySelector('.allgames');
    if (allGames) allGames.classList.add('active');
  }, 200);
}
