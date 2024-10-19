// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");

// Add a row
function addR() {
    const row = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
        const cell = document.createElement("td"); 
        cell.style.backgroundColor = "white";
        cell.onclick = () => colorCell(cell);
        row.appendChild(cell);
    }
    grid.appendChild(row);
    numRows++;

    if (numCols === 0) {
        numCols = 1;
    }
}


// Add a column
function addC() {
    numCols++;
    for (let i = 0; i < numRows; i++) {
        const row = grid.rows[i];
        const newCell = document.createElement("td");
        newCell.style.backgroundColor = "white";
        newCell.onclick = () => colorCell(newCell);
        row.appendChild(newCell);
    }
}

// Remove a row
function removeR() {
    if (numRows === 0) {
        alert("No rows to remove");
        return 0;
    }
    grid.removeChild(grid.lastChild);
    numRows--;
}

// Remove a column
function removeC() {
    if (numCols === 0) {
        alert("No columns to remove");
        return 0;
    }
    for (let i = 0; i < numRows; i++) {
        const row = grid.rows[i];
        row.removeChild(row.lastChild);
    }
    numCols--;
    
    if (numCols === 0) {
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}