// GENERAZIONE CELLA
function cellGen(boxSize) {
  const cell = document.createElement(`div`);
  cell.classList.add(`box`);
  cell.setAttribute(`data-status`, `not-clicked`);
  cell.classList.add(boxSize);
  cell.addEventListener("click", function () {
    clickCheck(this);
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
  allCells = document.getElementsByClassName("box");
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

// CONTROLLO CLICK
function clickCheck(cella) {
  let cellValue = cella.innerText;
  let isBomb = false;
  let clickedStatus = cella.getAttribute("data-status");

  if (clickedStatus != `clicked`) {
    console.log("is clicked?" + clickedStatus);
    for (let i = 0; i < bomb.length; i++) {
      cellValue == bomb[i] ? (isBomb = true) : ``;
    }
    cella.setAttribute("data-status", `clicked`);
    isBomb ? cella.classList.toggle(`bomb`) : cella.classList.toggle(`clicked`);
    bombCheck(isBomb);
    endGameFlip(isBomb);
    punti();
    console.log("cella numero " + cellValue);
  }
  return isBomb;
}

// BOMB CHECK

function bombCheck(exploded) {
  if (exploded == true) {
    alert("GAME OVER!");
  }
}

// FLIP ALL BOXES

function endGameFlip(isBomb) {
  if (isBomb == true) {
    // console.log("innertext" + allCells[3].innerText);
    for (let i = 0; i < allCells.length; i++) {
      let check = false;
      for (let x = 0; x < bomb.length; x++) {
        allCells[i].innerText == bomb[x] ? (check = true) : ``;
        allCells[i].setAttribute("data-status", `clicked`);
      }
      check == true
        ? allCells[i].classList.add(`bomb`)
        : allCells[i].classList.add(`clicked`);
    }
  } else {
    points++;
    console.log(points);
  }

  return points;
}

// POINT COUNTER
function punti() {
  punteggio.innerText = "Punti: " + points;
  if (points == allCells.length - 16) {
    alert("HAI VINTO!");
  }
}
