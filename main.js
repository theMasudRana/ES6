// Global variables
const form = document.getElementById('add-form');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);

// Delete item from the list
itemList.addEventListener('click', removeItem);

// Filter items
filter.addEventListener('keyup', filterItems);

// Add item to the list
function addItem(e) {
    e.preventDefault();

    // Get input value
    const itemText = document.getElementById('item').value;

    // Create new element
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';

    // Add text node to new element
    newItem.appendChild(document.createTextNode(itemText));

    // Delete button element
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button with the new created element
    newItem.appendChild(deleteButton);

    // Append new item to the main list
    itemList.appendChild(newItem);
}

// Remove Item
function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const parentLi = e.target.parentElement;
            itemList.removeChild(parentLi);
        }
    }
}

function filterItems(e) {
    // Make all search text to lowre case
    const searchText = e.target.value.toLowerCase();
    // Get list items
    const searchItem = itemList.getElementsByTagName('li');
    // Conver in to a array
    Array.from(searchItem).forEach(function (item) {
        const newItem = item.firstChild.textContent;
        if (newItem.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}