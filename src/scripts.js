export function bgMove() {
  const el = document.querySelector("#background");
  const logo = document.querySelector("#logo_section");

  el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = (-e.offsetX / 25) + "px";
    el.style.backgroundPositionY = (-e.offsetY / 25) + "px";
    logo.style.top = 50-e.offsetY/1000 + "%";
    logo.style.left = 50-e.offsetX/1000 + "%";
  });
}
