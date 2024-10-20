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
        cell.style.backgroundColor = "";
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
        newCell.style.backgroundColor = "";
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
function fillU() {
    for (let i = 0; i < grid.rows.length; i++) {
        const row = grid.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            if (cell.style.backgroundColor === "") {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    for (let i = 0; i < grid.rows.length; i++) {
        const row = grid.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    for (let i = 0; i < grid.rows.length; i++) {
        const row = grid.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            cell.style.backgroundColor = "";
        }
    }
}

function colorCell(cell) {
    if (colorSelected && colorSelected !== "SELECT") {
        cell.style.backgroundColor = colorSelected;
    } else {
        alert("Please select a color first.");
    }
}