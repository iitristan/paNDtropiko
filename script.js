function addToPreparing() {
    const input = document.getElementById('addNumberInput');
    const number = input.value;
    if (number) {
        const preparingQueue = document.getElementById('preparingQueue');
        const box = document.createElement('div');
        box.textContent = number;
        box.addEventListener('click', () => moveToServing(number));
        preparingQueue.appendChild(box);
        input.value = ''; // Clear input after adding
    }
}

function moveToServing(number) {
    const nowServingQueue = document.getElementById('nowServingQueue');
    const box = document.createElement('div');
    const text = document.createElement('span');
    text.textContent = number;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => removeFromServing(box);
    
    box.appendChild(text);
    box.appendChild(deleteBtn);
    nowServingQueue.appendChild(box);
}

function removeFromServing(box) {
    box.parentNode.removeChild(box);
}
