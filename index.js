const container = document.querySelector("#square-container");
const header = document.createElement("div");
header.id = "header";
document.body.prepend(header);

for (let div_square = 0; div_square < 256; div_square++) { //this makes the grid 16x16 whenever the webpage is loaded. its a loop to make up to 256.
    let gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
}

const gridDivs = document.querySelectorAll("#square-container div"); // 1 of 2, this grabs all boxes and allows for the hover effect. and the color they appear as.
gridDivs.forEach(div => {
    div.addEventListener("mouseover" , () => {
        div.style.backgroundColor = "#89cff0";
    });
});

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Grid";
header.appendChild(resetButton);

resetButton.addEventListener  ("click" , () => {
    let howManySquares = prompt("Enter the number of boxes per side")  // 2 of 2. this is used to actually style and create the newly inputted boxes.
    let numberOfSquares = Number(howManySquares);

    if (howManySquares <1 || howManySquares > 100 || isNaN(howManySquares)) { // this pretty much picks the true statment, and prints it. so if you enter
        alert("Please enter a number between 1 and 100");                     // more than 100 or less than 1, it does nothing. but if you enter between
    } else {                                                                  // 1 and 100, then the code will make that many boxes. ex: 10 = 10x10 (100 total boxes).
        container.innerHTML = "";
        const squareSize = 100 / numberOfSquares;
        
        for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {     // this code actually creates the new grid depending on the previous prompt input
            let gridSquare = document.createElement("div");               // i dont fully understand it, but hey, it works and uses multiplication of course!
            gridSquare.style.width = `${squareSize}vw`;                   // oh and we use the same CSS i used before, its just a copy of it so its consistent.
            gridSquare.style.height = `${squareSize}vh`;
            gridSquare.style.backgroundColor = "white";
            gridSquare.style.border = "1px solid black";
            container.appendChild(gridSquare);
        }
        const gridDivs = document.querySelectorAll("#square-container div");    // this is a copy of the previous code to make the hoverr effect show up again
        gridDivs.forEach(div => {                                               // after using the reset grid button and entering a new number.
            div.addEventListener("mouseover" , () => {
                div.style.backgroundColor = "#89cff0";
    }); 
});

}
});
