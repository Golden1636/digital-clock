const clock = document.querySelector(".clock");
const welcome = document.querySelector(".welcome-message");

const tick = () => {
  const now = new Date();

  const h = now.getHours();

  const m = now.getMinutes();

  const s = now.getSeconds();

  // const ms = now.getMilliseconds();

  const html = `
  <span>${h}</span> :
  <span>${m}</span> :
  <span>${s}</span>
  `;

  clock.innerHTML = html;
};
tick();

setInterval(tick, 100);
