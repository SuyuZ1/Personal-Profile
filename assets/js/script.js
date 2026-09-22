const body = document.body;
const intro = document.querySelector("#intro");
const enterButton = document.querySelector("#enter-profile");
const canvas = document.querySelector("#neural-canvas");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function launchProfile() {
  if (body.classList.contains("launching")) return;

  body.classList.add("launching");
  window.setTimeout(() => {
    window.location.href = "pages/home.html";
  }, reduceMotion ? 0 : 680);
}

if (enterButton) enterButton.addEventListener("click", launchProfile);

if (intro) {
  intro.addEventListener("click", (event) => {
    if (event.target === intro || event.target.classList.contains("intro-grid")) launchProfile();
  });
}

document.querySelectorAll('a[href$=".html"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      link.target === "_blank"
    ) {
      return;
    }

    const destination = new URL(link.href, window.location.href);
    if (destination.href === window.location.href) return;

    event.preventDefault();
    body.classList.add("page-leaving");
    window.setTimeout(() => {
      window.location.href = destination.href;
    }, reduceMotion ? 0 : 480);
  });
});

window.addEventListener("pageshow", () => body.classList.remove("page-leaving"));

// Keep scientific figures fitted in the article; inspect native resolution on demand.
const researchFigures = document.querySelectorAll(
  ".story-hero__visual, .policy-work-figure, .data-engine-figure, .policy-vla20-figure, .story-evidence__grid figure"
);
if (researchFigures.length && typeof HTMLDialogElement !== "undefined") {
  const viewer = document.createElement("dialog");
  viewer.className = "figure-viewer";
  viewer.setAttribute("aria-label", "高清研究图");
  viewer.innerHTML = '<div class="figure-viewer__toolbar"><p>高清研究图 · 可按 Esc 关闭</p><button type="button" data-zoom aria-pressed="false">原始尺寸</button><a target="_blank" rel="noopener noreferrer">打开原图 ↗</a><button type="button" data-close autofocus>关闭 ×</button></div><div class="figure-viewer__viewport"><img alt="" /></div>';
  body.append(viewer);
  const viewport = viewer.querySelector(".figure-viewer__viewport");
  const enlarged = viewport.querySelector("img");
  const zoom = viewer.querySelector("[data-zoom]");
  let opener;
  function closeFigure() { viewer.close(); }
  function openFigure(img, button) {
    opener = button;
    enlarged.src = img.currentSrc || img.src;
    enlarged.alt = img.alt;
    viewer.querySelector("a").href = enlarged.src;
    viewport.classList.remove("is-zoomed");
    zoom.textContent = "原始尺寸";
    zoom.setAttribute("aria-pressed", "false");
    viewer.showModal();
    body.classList.add("figure-viewer-open");
    viewport.scrollTo(0, 0);
  }
  zoom.addEventListener("click", () => {
    const expanded = viewport.classList.toggle("is-zoomed");
    zoom.textContent = expanded ? "适应窗口" : "原始尺寸";
    zoom.setAttribute("aria-pressed", String(expanded));
  });
  viewer.querySelector("[data-close]").addEventListener("click", closeFigure);
  viewer.addEventListener("click", event => { if (event.target === viewer) closeFigure(); });
  viewer.addEventListener("close", () => {
    body.classList.remove("figure-viewer-open");
    opener?.focus({ preventScroll: true });
  });
  researchFigures.forEach(figure => {
    const img = figure.querySelector("img");
    if (!img) return;
    const caption = figure.querySelector("figcaption") || figure.appendChild(document.createElement("figcaption"));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "figure-open";
    button.textContent = "查看高清图 ⤢";
    button.setAttribute("aria-label", "查看高清图：" + img.alt);
    caption.append(button);
    img.dataset.figureImage = "";
    button.addEventListener("click", () => openFigure(img, button));
    img.addEventListener("click", () => openFigure(img, button));
  });
}

function revealHashTarget() {
  if (!window.location.hash) return;

  const target = document.querySelector(window.location.hash);
  if (!target) return;

  window.setTimeout(() => {
    target.scrollIntoView({ block: "start", behavior: "auto" });
  }, reduceMotion ? 0 : 760);
}

window.addEventListener("load", revealHashTarget);

if (canvas) {
  const context = canvas.getContext("2d");
  const pointer = { x: -1000, y: -1000 };
  let width = 0;
  let height = 0;
  let particles = [];
  let animationFrame;

  function createParticles() {
    const count = Math.min(82, Math.max(34, Math.floor((width * height) / 19000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      radius: Math.random() * 1.25 + 0.35,
    }));
  }

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    createParticles();
  }

  function drawNetwork() {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -10) particle.x = width + 10;
      if (particle.x > width + 10) particle.x = -10;
      if (particle.y < -10) particle.y = height + 10;
      if (particle.y > height + 10) particle.y = -10;

      const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
      if (pointerDistance < 160) {
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(pointer.x, pointer.y);
        context.strokeStyle = `rgba(141, 124, 255, ${0.16 * (1 - pointerDistance / 160)})`;
        context.stroke();
      }

      for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
        const next = particles[nextIndex];
        const distance = Math.hypot(particle.x - next.x, particle.y - next.y);

        if (distance < 125) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(next.x, next.y);
          context.strokeStyle = `rgba(157, 164, 205, ${0.09 * (1 - distance / 125)})`;
          context.stroke();
        }
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle =
        index % 7 === 0 ? "rgba(141, 124, 255, 0.72)" : "rgba(214, 218, 235, 0.43)";
      context.fill();
    });

    animationFrame = window.requestAnimationFrame(drawNetwork);
  }

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  window.addEventListener("pointerleave", () => {
    pointer.x = -1000;
    pointer.y = -1000;
  });

  resizeCanvas();
  drawNetwork();

  if (reduceMotion) window.cancelAnimationFrame(animationFrame);
}
