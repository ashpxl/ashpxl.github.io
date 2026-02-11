let games = [];

const gamesPromise = fetch("/js/games.json")
  .then(res => res.json())
  .then(data => {
    games = data;
  })
  .catch(err => {
    console.error("fetch err", err);
  });

function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function getGameCategories(g) {
  const raw = g.Categories ?? g.categories ?? g.genre ?? g.genres ?? null;
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.map(x => String(x).trim().toLowerCase());
  if (typeof raw === "string") return raw.split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
  return [String(raw).toLowerCase()];
}

function gameMatchesGenre(g, genreStr) {
  if (!genreStr) return false;
  const z = genreStr.toLowerCase();
  const x = getGameCategories(g);
  return x.includes(z);
}

function getRecentGames() {
  try {
    const raw = localStorage.getItem("recentGames");
    if (!raw) return [];
    const titles = JSON.parse(raw);
    return Array.isArray(titles) ? titles.slice(-30) : [];
  } catch (e) {
    console.error("Error reading recentGames from localStorage", e);
    return [];
  }
}

function addToRecentGames(game) {
  if (!game || !game.title) return;
  let recent = getRecentGames();
  recent = recent.filter(t => t !== game.title);
  recent.push(game.title);
  localStorage.setItem("recentGames", JSON.stringify(recent.slice(-30)));
}

function loadGames(list, divid) {
  const container = document.getElementById(divid);
  if (!container) {
    console.warn("container not found:", divid);
    return;
  }
  container.innerHTML = "";

  let finalList;

  if (list === "all") {
    finalList = games;
  } else if (list === "random") {
    finalList = getRandomItems(games, 6);
  } else if (list === "recent") {
    const recentTitles = getRecentGames();
    finalList = recentTitles
      .map(title => games.find(g => g.title === title))
      .filter(Boolean);
  } else if (list === "new") {
    finalList = games.slice(-30);
  } else if (typeof list === "string") {
    finalList = games.filter(g => gameMatchesGenre(g, list));
  } else if (Array.isArray(list)) {
    finalList = list;
  } else {
    finalList = [];
  }

  if (!finalList || finalList.length === 0) {
    const msg = document.createElement("div");
    msg.className = "no-results";
    msg.textContent = "No games found.";
    container.appendChild(msg);
    return;
  }
  const sorted =
    list === "recent"
      ? finalList 
      : [...finalList].sort((a, b) => (a.title || "").localeCompare(b.title || ""));

  const frag = document.createDocumentFragment();
  sorted.forEach(g => {
    const div = document.createElement("div");
    div.className = "game";

    const img = document.createElement("img");
    img.src = g.image;
    img.alt = g.title || "game";
    img.loading = "lazy";
    div.appendChild(img);

    const title = document.createElement("h1");
    title.className = "gameh1";
    title.style.marginBottom = "4px";
    title.textContent = g.title;
    div.appendChild(title);
    const safeTitle = encodeURIComponent(
       (g.title || "")
        .trim()
        .replace(/\./g, "-")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
    );
    div.onclick = () => {
      var iframe = document.getElementById('gameiframe');
      if(iframe){
        iframe.src=`/loader.html?game=${g.url}&img=${g.image}&name=${g.title}`;
        document.getElementById('gameTitleh1').innerHTML = g.title;
        history.pushState(null, "", `/g/${safeTitle}`);
      }
      else{
      a(`/g/${safeTitle}`);
      }
      addToRecentGames(g); 
      const navLinks = document.querySelectorAll('.navigationItem');
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.title = `${g.title} Unblocked at AshPXL.github.io`;
    };

    frag.appendChild(div);
  });

  container.appendChild(frag);
}

async function initGames() {
  await gamesPromise;

  const container = document.getElementById("games");
  if (!container) return;

  const genre = container.dataset.genre || "all";
  loadGames(genre, "games");
}

document.addEventListener("DOMContentLoaded", initGames);

document.addEventListener("DOMContentLoaded", (e) => {
  if (e.target.id === "app") initGames();
});
function fullscreen(id){
  const elem = document.getElementById(id);
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}