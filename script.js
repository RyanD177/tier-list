let draggedItem;
document.querySelectorAll(".item").forEach(setUpItem);
document.querySelectorAll(".drop-zone").forEach(setUpDropZone);



function setUpItem(item) {
  item.addEventListener("dragstart", onDragItem);
  item.addEventListener("dblclick", ondblclick)
}

function setUpDropZone(dropZone) {
  dropZone.addEventListener("drop", onDropOverDropZone);
  dropZone.addEventListener("dragover", onDragOverDropZone);
}

function onDragItem(event) {
  draggedItem = event.target;
}

function onDragOverDropZone(event) {
  event.preventDefault();
}

function onDropOverDropZone() {
  if (this !== draggedItem.parentNode) {
    this.appendChild(draggedItem);
  }
}

function ondblclick () {
const unrankedZone = document.getElementById('unranked-drop-zone') 
    if(unrankedZone !== this.parentNode){
        unrankedZone.appendChild(this)
    }
}