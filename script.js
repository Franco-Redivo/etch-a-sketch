//conitainer div variable
const container = document.querySelector(".container");
 

function appendToContainer(div){
    container.appendChild(div);
}

//creates each div and adds them to container
function createGrid(gridSize){
    const itemSize = 768/gridSize;
    
    for(let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        appendToContainer(div);
        paintSquare(div);
    }
}


function paintSquare(div){
    div.addEventListener("mouseenter",(e) => {
        e.target.style.backgroundColor = "green";
    });
}

const btn = document.querySelector("button");

btn.addEventListener("click",() => {
    const option = prompt("Enter number of squares per side for new grid");
})