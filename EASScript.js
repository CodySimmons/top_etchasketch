//Initial global
var grid = 16;
var black = true;
var rainbow = false;

//page elements
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector(".reset-button");
// const blackButton = document.querySelector(".black-button");
// const rainbowButton = document.querySelector(".rainbow-button");
const colorButtons = document.querySelectorAll(".color-buttons");

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
  console.log("Hello");
  if (black) {
    this.style.backgroundColor = "black";
  } else {
    let rValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    let gValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    let bValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    this.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
  }
}

function blackButtonPress() {}

function rainbowButtonPress() {}

gridConstructor(grid);
colorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("black-button")) {
      black = true;
      rainbow = false;
    } else if (btn.classList.contains("rainbow-button")) {
      black = false;
      rainbow = true;
    }
  });
});
