# top_etchasketch

https://www.theodinproject.com/courses/foundations/lessons/etch-a-sketch-project

An etch-a-sketch project that keeps a grid with a fixed container,
dynamically inserting cells based on input by the user.

Cells will change color as the user hovers their mouse over each cell.
Currently allows for cells to change to either black or rainbow (name it Razer mode)

What I learned:

gridAllCells.forEach((gridCell) =>
gridCell.addEventListener("mouseover", cellChangeColor)
);
This bit is calling the fuction without the () passes the function's script through,
allowing the script to run, using the 'this' in the function to apply to the gridCell.
