let navToken = 0;
let currentAbort = null;
async function fetchHTML(url, signal) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  return res.text();
}

async function renderFromHTML(
  html,
  { full = false, transitionDuration = 100, token } = {}
) {
  if (token !== navToken) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const target = document.getElementById("app");
  if (!target) throw new Error("#app container not found");

  target.style.transition = `opacity ${transitionDuration}ms`;

  target.style.opacity = 0;
  await new Promise(r => setTimeout(r, transitionDuration));

  if (token !== navToken) return;

  target.innerHTML = "";

  const source = full ? doc.body : doc.querySelector("#app");
  if (!source) throw new Error("No #app found in fetched HTML");

  for (const node of [...source.childNodes]) {
    if (token !== navToken) return;

    if (node.nodeName === "SCRIPT") {
      await executeScript(node, token);
    } else {
      target.appendChild(node.cloneNode(true));
    }
  }

  if (token !== navToken) return;

  target.dispatchEvent(
    new Event("DOMContentLoaded", { bubbles: true })
  );

  target.style.opacity = 1;
}

function executeScript(oldScript, token) {
  return new Promise(resolve => {
    if (token !== navToken) return resolve();

    const script = document.createElement("script");

    for (const attr of oldScript.attributes) {
      script.setAttribute(attr.name, attr.value);
    }

    if (oldScript.src) {
      script.onload = resolve;
      script.onerror = resolve;
      script.src = oldScript.src;
    } else {
      script.textContent = oldScript.textContent;
      resolve();
    }

    document.body.appendChild(script);
  });
}
async function a(page, options = {}) {
  if (location.pathname.endsWith(page)) return;

  navToken++;

  if (currentAbort) currentAbort.abort();
  currentAbort = new AbortController();

  const token = navToken;

  try {
    const html = await fetchHTML(page, currentAbort.signal);

    if (token !== navToken) return;

    await renderFromHTML(html, { ...options, token });

    if (token !== navToken) return;

    history.pushState(options.state || {}, "", page);
  } catch (err) {
    if (err.name !== "AbortError") {
      console.error(err);
    }
  }
  refreshAds();
}
function refreshAds() {
  if (window.adsbygoogle) {
    adsbygoogle.push({});
  }
}