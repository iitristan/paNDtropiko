function addToPreparing() {
    const input = document.getElementById('addNumberInput');
    const number = input.value;
    if (number) {
        const preparingQueue = document.getElementById('preparingQueue');
        const box = document.createElement('div');
        box.textContent = number;
        box.className = 'number-box'; // Added a class for styling and clarity
        box.onclick = function() { moveToServing(this); }; // Use 'this' to reference the clicked element
        preparingQueue.appendChild(box);
        input.value = ''; // Clear input after adding
    }
}

function moveToServing(element) {
    const nowServingQueue = document.getElementById('nowServingQueue');
    const box = document.createElement('div');
    box.className = 'serving-box'; // Similar purpose, for styling and differentiation
    const text = document.createElement('span');
    text.textContent = element.textContent;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() { removeFromServing(this.parentElement); }; // Ensure reference to the parent box
    
    box.appendChild(text);
    box.appendChild(deleteBtn);
    nowServingQueue.appendChild(box);
    element.remove(); // Remove the original element from preparing
}

function removeFromServing(box) {
    box.remove(); // Simplified removal method
}
