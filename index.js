const container = document.querySelector("#square-container");

for (let div_square = 0; div_square < 256; div_square++) {
    let gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
}