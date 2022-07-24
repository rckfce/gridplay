const containerDiv = document.getElementById("grid");
const viewPointWidth = document.documentElement.clientWidth;


let gridSize = 16;
let gridBoxSize = (viewPointWidth - (gridSize + 1) * 5 - 10) / gridSize;

for (let i = 1; i <= gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = i;
    newDiv.classList.add("gridBox");
    newDiv.style.height = gridBoxSize + "px";
    newDiv.style.width = gridBoxSize + "px";
    containerDiv.appendChild(newDiv);
}

const box = document.querySelectorAll(".gridBox");

/*  Doing this with CSS
box.forEach ((each) => {
    each.addEventListener("mouseover", event => each.classList.add("onHover"));
    each.addEventListener("mouseout", event => each.classList.remove("onHover"));
});
 */
