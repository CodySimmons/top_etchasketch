# top_etchasketch

https://www.theodinproject.com/courses/foundations/lessons/etch-a-sketch-project

An etch-a-sketch project that keeps a grid with a fixed container,
dynamically inserting cells based on input by the user.

Cells will change color as the user hovers their mouse over each cell.
Allows for cells to change random colors, black, or fade to black.

What I learned:

gridAllCells.forEach((gridCell) =>
gridCell.addEventListener("mouseover", cellChangeColor)
);
This bit is calling the function without the () passes the function's script through,
allowing the script to run, using the 'this' in the function to apply to the gridCell.

A better understanding of 'this' and => in general

Feel more comfortable selecting and manipulating elements from the document,
including how to use gridtemplate column and rows.
