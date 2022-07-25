const containerDiv = document.getElementById("grid");
const viewPointWidth = document.documentElement.clientWidth;
let randomColor = "";

let gridSize = 16;
let viewNoGaps = viewPointWidth - (gridSize + 1) * 5 - 10;
let gridBoxSize = (viewNoGaps / gridSize).toFixed(0) - 1;

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    gridSize = Number(prompt("Enter grid size", "16"));
    if (!gridSize) {window.location.reload(true);}
    let oldGrid = document.getElementById("grid");
    while (oldGrid.firstChild) {
        oldGrid.removeChild(oldGrid.firstChild);
    }
    viewNoGaps = viewPointWidth - (gridSize + 1) * 5 - 10;
    gridBoxSize = (viewNoGaps / gridSize).toFixed(0) - 1;
    drawGrid();
    hover();
});

for (let i = 1; i <= 16 * 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridBox");
    newDiv.style.height = gridBoxSize + "px";
    newDiv.style.width = gridBoxSize + "px";
    newDiv.style.backgroundColor
    containerDiv.appendChild(newDiv);
}

hover();

function drawGrid() {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridBox");
        newDiv.style.height = gridBoxSize + "px";
        newDiv.style.width = gridBoxSize + "px";
        newDiv.style.backgroundColor
        containerDiv.appendChild(newDiv);
    }
}

function rgb() {
    const random = Math.floor(Math.random() * 8);
    switch (random) {
        case 0:
            randomColor = "red";
            break;
        case 1:
            randomColor = "orange";
            break;
        case 3:
            randomColor = "yellow";
            break;
        case 4:
            randomColor = "green";
            break;
        case 5:
            randomColor = "blue";
            break;
        case 6:
            randomColor = "indigo";
            break;
        case 7:
            randomColor = "violet";
            break;
    }
}

function hover() {
    const box = document.querySelectorAll(".gridBox");
    box.forEach ((each) => {
        rgb();
        each.addEventListener("mouseover", event => {rgb(); each.classList.add(randomColor);});
        each.addEventListener("mouseout", event => each.classList.remove(randomColor));
    });
}