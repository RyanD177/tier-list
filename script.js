let draggedItem;
document.querySelectorAll(".item").forEach(setupItem);
document.querySelectorAll('.drop-zone').forEach(setUpDropZone)

function setupItem (item) {
    item.addEventListener("dragstart", onDragItem);
    item.addEventListener("dblclick", onDoubleClick);

}


function setUpDropZone (dropZone) {
    dropZone.addEventListener("drop", onDropOverDropZone  );
    dropZone.addEventListener("dragover", onDragOverDropZone );

}



function onDragItem (event){
    draggedItem = event.target;
 
 }

 
function onDoubleClick () {
    const unrankedDropZone = document.getElementById('unranked-drop-zone')

    if(unrankedDropZone !== this.parentNode){
        unrankedDropZone.appendChild(this);
    }
}



function onDropOverDropZone () {
    if(this !== draggedItem.parentNode){
        this.appendChild(draggedItem);
    }
   
}






function onDragOverDropZone (event) {
    event.preventDefault();

}