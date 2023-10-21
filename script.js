const expenseForm = document.getElementById('expenseForm');
const expensesContainer = document.getElementById('expenses');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const expenseItem = document.createElement('div');
    expenseItem.className = 'alert alert-info';
    expenseItem.innerHTML = `
        <strong>Amount:</strong> $${amount} | 
        <strong>Description:</strong> ${description} | 
        <strong>Category:</strong> ${category} | 
        <button class="btn btn-danger btn-sm float-right delete-btn">Delete</button> | 
        <button class="btn btn-primary btn-sm float-right edit-btn">Edit</button>
    `;

    expensesContainer.appendChild(expenseItem);

    const deleteButton = expenseItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        expenseItem.remove();
    });

    const editButton = expenseItem.querySelector('.edit-btn');
    editButton.addEventListener('click', function() {
        // Implement edit functionality here
        // You can populate the form fields with the expense details for editing
        // For example: document.getElementById('amount').value = amount;
    });

    // Clear form fields
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = 'fuel';
});