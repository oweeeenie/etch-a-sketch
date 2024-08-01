const container = document.querySelector("#square-container");
const header = document.createElement("div");
header.id = "header";
document.body.prepend(header);

for (let div_square = 0; div_square < 256; div_square++) {
    let gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
}

const gridDivs = document.querySelectorAll("#square-container div");
gridDivs.forEach(div => {
    div.addEventListener("mouseover" , () => {
        div.style.backgroundColor = "wheat";
    });
});

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Grid";
header.appendChild(resetButton);
