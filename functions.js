// GENERAZIONE CELLA
function cellGen(boxSize) {
  const cell = document.createElement(`div`);
  cell.classList.add(`box`);
  cell.classList.add(boxSize);
  cell.addEventListener("click", function () {
    this.classList.toggle(`clicked`);
    console.log(this.innerText);
  });
  return cell;
}

// GENERAZIONE LIVELLO SINGOLA FUNZIONE
function generation(x, classe) {
  for (let i = 0; i < x; i++) {
    const cellElement = cellGen(classe);
    gridContainer.append(cellElement);
    cellElement.innerText = parseInt(i) + 1;
  }
  bombGen(x);
  console.log(bomb);
}

// GENERAZIONE BOMBE SENZA RIPETIZIONI
function bombGen(max) {
  bomb = [];
  let counter = 0;
  while (bomb.length < 16) {
    let randomBomb = Math.floor(Math.random() * (max - 1) + 1);
    for (let i = 0; i <= counter + 1; i++) {
      if (randomBomb == bomb[i]) {
        randomBomb = Math.floor(Math.random() * (max - 1) + 1);
        i = 0;
      }
    }
    bomb[counter] = randomBomb;
    counter++;
  }
  return bomb;
}
