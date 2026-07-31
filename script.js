const body = document.body;
const intro = document.querySelector("#intro");
const enterButton = document.querySelector("#enter-profile");
const profile = document.querySelector("#profile");
const canvas = document.querySelector("#neural-canvas");
const context = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function enterProfile() {
  if (body.classList.contains("entered")) return;

  body.classList.add("entered");
  profile.setAttribute("aria-hidden", "false");
  window.setTimeout(() => intro.setAttribute("aria-hidden", "true"), reduceMotion ? 0 : 1300);
}

enterButton.addEventListener("click", enterProfile);

intro.addEventListener("click", (event) => {
  if (event.target === intro || event.target.classList.contains("intro-grid")) enterProfile();
});

if (window.location.hash) {
  body.classList.add("instant-entry");
  window.requestAnimationFrame(enterProfile);
}

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
    context.fillStyle = index % 7 === 0 ? "rgba(141, 124, 255, 0.72)" : "rgba(214, 218, 235, 0.43)";
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

if (reduceMotion) {
  drawNetwork();
  window.cancelAnimationFrame(animationFrame);
} else {
  drawNetwork();
}
