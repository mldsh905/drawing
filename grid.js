const grid = document.querySelector('.grid');

function setGrid(newGrid) {
    for (let i = 0; i < (Number(newGrid) * Number(newGrid)); i++) {
        const block = document.createElement("div");
        block.classList.add("cell");
        block.style.backgroundColor = "white"
        grid.appendChild(block)
    }
}

function remove(old) {
    while (old.firstChild) {
        old.removeChild(old.firstChild);
    }
}

setGrid(10);

const changeGrid = document.querySelector(".changeGrid");
changeGrid.addEventListener("click", () => {
    let newGrid = prompt("Please enter a new Grid length (2-100)");
    remove(grid);
    if (newGrid >= 2 && newGrid <= 100) {
        grid.style.gridTemplateColumns = "repeat(" + newGrid + ",1fr)";
        grid.style.gridTemplateRows = "repeat(" + newGrid + ",1fr)";
    }
    setGrid(newGrid);
})

const draw = document.querySelector(".draw");
const color = document.querySelector(".color");

draw.addEventListener("click", () => {
    const cell = document.querySelectorAll(".cell");
    cell.forEach((item) => {
        item.addEventListener("mouseover", (item) => {
            item.target.style.backgroundColor = color.value
        })
    })
})

color.addEventListener("input", () => {
    const cell = document.querySelectorAll(".cell");
    cell.forEach((item) => {
        item.addEventListener("mouseover", (item) => {
            item.target.style.backgroundColor = color.value
        })
    })
})

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    const cell = document.querySelectorAll(".cell");
    cell.forEach((item) => {
            item.style.backgroundColor = "white"
        }
    )
})

const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
    const cell = document.querySelectorAll(".cell");
    cell.forEach((item) => {
        item.addEventListener("mouseover", (item) => {
            item.target.style.backgroundColor = "white"
        })
    })
})

const drawRandom = document.querySelector(".drawRandom");
drawRandom.addEventListener("click", () => {
    const cell = document.querySelectorAll(".cell");
    cell.forEach((item) => {
        item.addEventListener("mouseover", (item) => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            item.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
        })
    })
})

