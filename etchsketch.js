const grid = document.querySelector(".gridContainer");
const newGridSize = document.getElementById("grid-size");
const reset = document.getElementById("reset");
const randomHoverColor = document.getElementById("random-color");
const blkHover = document.getElementById("black");


// default starting grid with rainbow hover //
function createGrid() {
    for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
    }
    const squareEvent = document.getElementsByClassName("square");
    for (let i=0; i < squareEvent.length; i++) {
        squareEvent[i].addEventListener("mouseenter", function() {
            squareEvent[i].style.backgroundColor = getRandomColor();
    })
}
  }
// reassigns grid css properties to passthrough the input //
function updateGrid(input) {
    grid.innerHTML = "";
    
    grid.style.setProperty(
        "grid-template-columns",`repeat(${input}, 2fr)`
    );
    
    grid.style.setProperty(
        "grid-template-rows",`repeat(${input}, 2fr)`
    );
    for (let i = 0; i < (input*input); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
      }
}


function gridSizing(){
    let input = prompt("What size square grid would you like?");
    console.log(input.value)
    updateGrid(input);
    const squareEvent = document.getElementsByClassName("square");
    for (let i=0; i < squareEvent.length; i++) {
        squareEvent[i].addEventListener("mouseenter", function() {
            squareEvent[i].style.backgroundColor = getRandomColor();
        })
    }
}

// hover color rainbow //
function rainbowHover() {
    for (let i=0; i < squareEvent.length; i++) {
        squareEvent[i].addEventListener("mouseenter", function() {
            squareEvent[i].style.backgroundColor = getRandomColor();
        })
    }
}

// hover color to black //

function blackHover() {
    for (let i=0; i < squareEvent.length; i++) {
        squareEvent[i].addEventListener("mouseenter", function() {
            squareEvent[i].style.backgroundColor = "black";
        })
    }
}

// background to white //

function resetColor() {
    for (let i=0; i < squareEvent.length; i++) {
        squareEvent[i].style.backgroundColor = "white";
    }
}

// random color generator //
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

// event listener for hover entering //

const squareEvent = document.getElementsByClassName("square");
for (let i=0; i < squareEvent.length; i++) {
    squareEvent[i].addEventListener("mouseenter", function() {
        squareEvent[i].style.backgroundColor = getRandomColor();
    })
}


createGrid();



newGridSize.addEventListener('click', gridSizing);
reset.addEventListener('click', resetColor);
randomHoverColor.addEventListener('click', rainbowHover);
blkHover.addEventListener('click', blackHover);

