const payrollTable = [];

const clearInputFields = () => {
    document.querySelectorAll('.grid-item input').forEach(input => input.value = '');
    document.getElementById('emname').focus();
};

const displayTable = () => {
    const tableContainer = document.getElementById("table");
    if (!payrollTable.length) {
        tableContainer.innerHTML = `
            <p>No entries in the payroll table.</p>
            <button id="clearTable" disabled>Clear Table</button>
        `;
        return;
    }

    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Employee Name</th>
                    <th>Days Worked</th>
                    <th>Daily Rate</th>
                    <th>Gross Pay</th>
                    <th>Deductions</th>
                    <th>Net Pay</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
    `;

    payrollTable.forEach((entry, index) => {
        tableHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${entry.emname}</td>
                <td>${entry.days}</td>
                <td>${entry.rate.toFixed(2)}</td>
                <td>${(entry.days * entry.rate).toFixed(2)}</td>
                <td>${entry.less.toFixed(2)}</td>
                <td>${(entry.days * entry.rate - entry.less).toFixed(2)}</td>
                <td>
                    <button onclick="promptDelete(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;
    tableHTML += `<button id="clearTable" onclick="clearPayrollTable()">Clear Table</button>`;
    tableContainer.innerHTML = tableHTML;
};

const promptDelete = (index) => {
    if (confirm(`Are you sure you want to delete employee #${index + 1}?`)) {
        payrollTable.splice(index, 1);
        displayTable();
    }
};

const clearPayrollTable = () => {
    if (confirm('Are you sure you want to clear the entire payroll table?')) {
        payrollTable.length = 0; // Clear all entries
        displayTable();
    }
};

// Button Event Listeners
document.getElementById('addtotable').addEventListener('click', () => {
    const emname = document.getElementById('emname').value.trim();
    const days = parseInt(document.getElementById('days').value, 10);
    const rate = parseFloat(document.getElementById('rate').value);
    const less = parseFloat(document.getElementById('less').value) || 0;

    if (!emname || days <= 0 || rate <= 0) {
        alert('Please provide valid inputs for Employee Name, Days Worked, and Daily Rate.');
        return;
    }

    payrollTable.push({ emname, days, rate, less });
    displayTable();
    clearInputFields();
});

document.getElementById('clearinput').addEventListener('click', clearInputFields);