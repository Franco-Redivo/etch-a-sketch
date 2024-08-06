//conitainer div variable
const container = document.querySelector(".container");
 

function appendToContainer(div){
    container.appendChild(div);
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function paintSquare(div){
    let color = random_rgb();
    div.addEventListener("mouseenter",(e) => {
        e.target.style.backgroundColor = color;
    });
}

//creates each div and adds them to container
function createGrid(gridSize){
    const itemSize = 768/gridSize;
    
    for(let i = 0; i < gridSize * gridSize; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;
        appendToContainer(div);
        paintSquare(div);
    }
}


const btn = document.querySelector("button");

btn.addEventListener("click",() => {
    const option = prompt("Enter number of squares per side for new grid");
    if(option > 100){
        alert("100 is the limit");
    }
    container.innerHTML = '';
    createGrid(option);
})

createGrid(16);