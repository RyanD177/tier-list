const coloredSquare = document.querySelectorAll('item').forEach(setupItem);

function dropZone() {
    addEventListener("drag", (event) => {

    });
addEventListener("dragover", (event) => {

});

}

function setupItem () {

    addEventListener("dragstart", (event) => {
        console.log('drag start working ')
    });
}

// Call the function to set up the event listeners
setupItem();
