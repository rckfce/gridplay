const containerDiv = document.getElementById("grid");
const viewPointWidth = document.documentElement.clientWidth;

let gridSize = 16;
let gridBoxSize = (viewPointWidth - (gridSize + 1) * 5 - 10) / gridSize;

function drawGrid(size) {
    for (let j = 1; j <= size; j++) {
        for (let i = 1; i <= size; i++) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = i;
            newDiv.classList.add("gridBox");
            newDiv.style.height = gridBoxSize + "px";
            newDiv.style.width = gridBoxSize + "px";
            containerDiv.appendChild(newDiv);
        }
    }
}


drawGrid(gridSize);