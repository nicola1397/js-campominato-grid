const gridContainer = document.getElementById("gridContainer");
const mode = document.getElementById("mode");
const start = document.getElementById("start");
const punteggio = document.getElementById("punteggio");
let allCells = [];
let explosions = [];
let bomb = [];
let points = 0;

start.addEventListener("click", function () {
  gridContainer.innerHTML = ``;
  gridContainer.classList.remove(`d-none`);

  punteggio.innerText = "Punti: " + 0;
  if (mode.value == 1) {
    generation(100, `easy`);
  } else if (mode.value == 2) {
    generation(81, `medium`);
  } else {
    generation(49, `hard`);
  }
});
