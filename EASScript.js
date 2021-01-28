//Initial global
var black = true;
var rainbow = false;
var lightsOUt = false;

//page elements
const gridContainer = document.querySelector("#grid-container");
const pageButtons = document.querySelectorAll("button");

function gridConstructor(gridMax) {
  let gridArea = gridMax ** 2;
  for (i = 0; i <= gridArea; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridCell.style.backgroundColor = "white";

    gridContainer.style.gridTemplateColumns = `repeat(${gridMax}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridMax}, 1fr)`;
    gridContainer.insertAdjacentElement("beforeend", gridCell);
  }
  var gridAllCells = gridContainer.querySelectorAll("div");
  gridAllCells.forEach((gridCell) =>
    gridCell.addEventListener("mouseover", cellChangeColor)
  );
}

function removeActiveStatus() {
  pageButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function cellChangeColor() {
  if (black) {
    this.style.opacity = 1;
    this.style.backgroundColor = "black";
  } else if (rainbow) {
    this.style.opacity = 1;
    let rValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    let gValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    let bValue = Math.floor(Math.random() * Math.floor(255)) + 1;
    this.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
  } else {
    let opacity = Number(this.style.opacity);
    if (opacity < 1.1) {
      if (opacity === 0) {
        this.style.backgroundColor = "black";
        this.style.opacity = opacity + 0.1;
      } else if (
        this.style.backgroundColor === "white" ||
        this.style.backgroundColor === "black"
      ) {
        this.style.opacity = opacity + 0.1;
        this.style.backgroundColor = "black";
      } else {
        this.style.opacity = opacity - 0.1;
      }
    }
  }
}

function colorClear() {
  var gridAllCells = gridContainer.querySelectorAll("div");
  gridAllCells.forEach((gridCell) => {
    gridCell.style.backgroundColor = "white";
    gridCell.style.opacity = 0;
  });
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
        lightsOUt = false;
        removeActiveStatus();
        btn.classList.add("active");
        break;
      case btn.classList.contains("rainbow-button"):
        black = false;
        rainbow = true;
        lightsOut = false;
        removeActiveStatus();
        btn.classList.add("active");
        break;
      case btn.classList.contains("lights-out"):
        black = false;
        rainbow = false;
        lightsOut = true;
        removeActiveStatus();
        btn.classList.add("active");
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
document.querySelector(".black-button").classList.add("active");
gridConstructor(16);
