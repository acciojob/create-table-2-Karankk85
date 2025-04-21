function createTable() {
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Get number of rows
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  const rows = parseInt(rn);
  const cols = parseInt(cn);

  // Validate input
  if (isNaN(rows) || isNaN(cols)) {
    alert("Please enter numeric values only.");
    return;
  }

  if (rows <= 0 || cols <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  // Create rows and columns
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
