document.addEventListener("DOMContentLoaded", initGames);
document.addEventListener("DOMContentLoaded", (e) => {
  if (e.target.id === "app") {
    initGames();
  }
});
async function initGames() {
  await gamesPromise;

  const container = document.getElementById("games");
  if (!container) return;

  const genre = container.dataset.genre || "all";
  loadGames(genre, "games");
}