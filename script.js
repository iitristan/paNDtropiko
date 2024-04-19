function addToPreparing() {
    const userInput = prompt("Enter a number to add to Preparing:");  // Ask the user to enter a number
    if (userInput !== null && !isNaN(userInput)) {  // Check if the input is a number
        const grid = document.querySelector('.preparing-grid');
        const newDiv = document.createElement('div');
        newDiv.textContent = userInput;  // Use the user's input as the content of the new div
        newDiv.onclick = function() {  // Add click event to each new box
            if (confirm("Move this item to Now Serving?")) {
                moveToServing(newDiv);  // Call moveToServing function when confirmed
            }
        };
        grid.appendChild(newDiv);
    } else {
        alert("Please enter a valid number.");  // Alert if the input is not a valid number
    }
}

function moveToServing(box) {
    const servingGrid = document.querySelector('.serving-grid');
    const preparingGrid = document.querySelector('.preparing-grid');
    preparingGrid.removeChild(box);  // Remove the box from Preparing grid
    box.onclick = function() {  // Change onclick event to allow deletion from Now Serving
        if (confirm("Remove this item from Now Serving?")) {
            servingGrid.removeChild(box);
        }
    };
    servingGrid.appendChild(box);  // Add the box to Now Serving grid
}
