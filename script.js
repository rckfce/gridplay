const containerDiv = document.getElementById("grid");
const viewPointWidth = document.documentElement.clientWidth;
let randomColor = "";

let gridSize = 16;
let gridBoxSize = (viewPointWidth - (gridSize + 1) * 5 - 10) / gridSize;

for (let i = 1; i <= gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = i;
    newDiv.classList.add("gridBox");
    newDiv.style.height = gridBoxSize + "px";
    newDiv.style.width = gridBoxSize + "px";
    newDiv.style.backgroundColor
    containerDiv.appendChild(newDiv);
}

const box = document.querySelectorAll(".gridBox");

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

box.forEach ((each) => {
    rgb();
    each.addEventListener("mouseover", event => {rgb(); each.classList.add(randomColor);});
    each.addEventListener("mouseout", event => each.classList.remove(randomColor));
});

