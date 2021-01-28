//Initial global
var black = true;
var rainbow = false;

//page elements
const gridContainer = document.querySelector("#grid-container");
const pageButtons = document.querySelectorAll("button");

function gridConstructor(gridMax) {
  let gridArea = gridMax ** 2;
  for (i = 0; i <= gridArea; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");

    gridContainer.style.gridTemplateColumns = `repeat(${gridMax}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridMax}, 1fr)`;
    gridContainer.insertAdjacentElement("beforeend", gridCell);
  }
  var gridAllCells = gridContainer.querySelectorAll("div");
  gridAllCells.forEach((gridCell) =>
    gridCell.addEventListener("mouseover", cellChangeColor)
  );
}

function cellChangeColor() {
  if (black) {
    this.style.backgroundColor = "black";
  } else {
    let rValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    let gValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    let bValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    this.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
  }
}

function colorClear() {
  var gridAllCells = gridContainer.querySelectorAll("div");
  gridAllCells.forEach(
    (gridCell) => (gridCell.style.backgroundColor = "white")
  );
}

function gridSizeChange() {
  let newSize = prompt("Please enter a new grid size:", "1-100");
  while (true) {
    if (newSize < 1 || newSize > 100) {
      newSize = prompt("Please enter a valid grid size:", "1-100");
    } else {
      break;
    }
  }
  colorClear();
  gridConstructor(newSize);
}

//buttons
pageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (true) {
      case btn.classList.contains("black-button"):
        black = true;
        rainbow = false;
        break;
      case btn.classList.contains("rainbow-button"):
        black = false;
        rainbow = true;
        break;
      case btn.classList.contains("reset-button"):
        colorClear();
        break;
      case btn.classList.contains("grid-size"):
        gridSizeChange();
        break;
    }
  });
});

//initial default setup
gridConstructor(16);
