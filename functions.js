function cellGen(boxSize) {
  const cell = document.createElement(`div`);
  cell.classList.add(`box`);
  cell.classList.add(boxSize);
  cell.addEventListener("click", function () {
    this.classList.toggle(`clicked`);
  });
  return cell;
}

function easy() {
  for (let i = 0; i < 100; i++) {
    const cellElement = cellGen("easy");
    gridContainer.append(cellElement);
    cellElement.innerText = parseInt(i) + 1;
  }
}
function medium() {
  for (let i = 0; i < 81; i++) {
    const cellElement = cellGen("medium");
    gridContainer.append(cellElement);
    cellElement.innerText = parseInt(i) + 1;
  }
}
function hard() {
  for (let i = 0; i < 49; i++) {
    const cellElement = cellGen("hard");
    gridContainer.append(cellElement);
    cellElement.innerText = parseInt(i) + 1;
  }
}
