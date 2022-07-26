const containerDiv = document.getElementById("grid");
 
const viewPointWidth = 500;

let gridSize = 16;
let viewNoGaps = viewPointWidth - gridSize - 1;
let gridBoxSize = viewNoGaps / gridSize;

/* drawing new grid after button press */
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    gridSize = Number(prompt("Enter grid size", "16"));
    if (!gridSize) {window.location.reload(true);}
    let oldGrid = document.getElementById("grid");
    while (oldGrid.firstChild) {
        oldGrid.removeChild(oldGrid.firstChild);
    }
    viewNoGaps = viewPointWidth - gridSize - 1;
    gridBoxSize = viewNoGaps / gridSize;
    drawGrid();
    hover();
});

for (let i = 1; i <= 16 * 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridBox");
    newDiv.style.height = gridBoxSize + "px";
    newDiv.style.width = gridBoxSize + "px";
    /* newDiv.style.backgroundColor */
    containerDiv.appendChild(newDiv);
}

hover();

function drawGrid() {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        newDiv.style.height = gridBoxSize + "px";
        newDiv.style.width = gridBoxSize + "px";
        /* newDiv.style.backgroundColor */
        containerDiv.appendChild(newDiv);
    }
}

function rgb() {
    const random = Math.floor(Math.random() * 255);
    return random;    
}

function getRandomColor() {
    return "rgb(" + rgb() + ", " + rgb() + ", " + rgb() + ")";
}

function hover() {
    const box = document.querySelectorAll(".gridBox");
    box.forEach ((each) => {
        each.addEventListener("mouseover", event => {
            if (!each.classList.contains("rgbCheck")) {
                each.style.backgroundColor = getRandomColor();
            }
            each.classList.add("rgbCheck");
            
            /* changes brightness */
            if (!each.style.filter) {
                each.style.filter = "brightness(1)";                                
            }
            let bValue = Number(each.style.filter.slice(11).slice(0, 3)) - 0.1; /* get brightness value */
            if (each.style.filter === "brightness(1)") {
                bValue = 0.9;
            }
            each.style.filter = "brightness(" + bValue + ")";
        });
    });
}