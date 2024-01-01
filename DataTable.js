class DataTable {
  constructor(data, headerId, bodyId) {
    this.data = data;
    this.headerId = headerId;
    this.bodyId = bodyId;
    this.currentSortField = null;
    this.isAscending = true;

    // Initialize the table
    this.initializeTable();
  }

  initializeTable() {
    const tableHeader = document.getElementById(this.headerId);
    const tableBody = document.getElementById(this.bodyId);

    const tableFields = Object.keys(this.data[0]);

    tableFields.forEach(field => {
      const headerCell = document.createElement('th');
      headerCell.textContent = field;
      headerCell.addEventListener('click', () => this.sortTable(field));
      tableHeader.appendChild(headerCell);
    });

    // Initial sorting
    this.sortTable(tableFields[0]);

    // Create rows
    this.updateTable();
  }

  sortTable(field) {
    if (field === this.currentSortField) {
      this.isAscending = !this.isAscending;
    } else {
      this.currentSortField = field;
      this.isAscending = true;
    }

    this.data.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return this.isAscending ? valueA - valueB : valueB - valueA;
      }
    });

    this.updateTable();
  }

  updateTable() {
    const tableBody = document.getElementById(this.bodyId);
    tableBody.innerHTML = ''; // Clear existing rows

    this.data.forEach(item => {
      const row = document.createElement('tr');
      Object.keys(item).forEach(field => {
        const cell = document.createElement('td');
        cell.textContent = item[field];
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });
  }
}