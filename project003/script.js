const squares = document.querySelectorAll('.row');
const colorInput = document.querySelector("#color");
const fillBackgroundButton = document.querySelector("#fillBackground");
const fillButton = document.querySelector("#fill");
let color = "#000";

colorInput.addEventListener('input', function(e) {
    color = colorInput.value;
});

fillBackgroundButton.addEventListener('click', fillBackground);

fillButton.addEventListener('click', fillSquare);

for (let square of squares) {
    square.addEventListener("click", toggleClass);
}

function toggleClass() {
    if (this.classList.contains('erase')) {
        this.classList.remove('erase');
        this.classList.add('draw');
        this.style.backgroundColor = `${color}`;
        findAdjacentSquares(this);
    } else if (this.classList.contains('draw'))  {
        this.classList.remove('draw');
        this.classList.add('erase');
        this.style.backgroundColor = "#fff";
    }
}

function fillBackground() {
    for (let square of squares) {
        if (square.classList.contains('erase')) {
            square.classList.remove('erase');
            square.classList.add('draw');
            square.style.backgroundColor = `${color}`;
    }
}
}

function fillSquare() {

}

function findAdjacentSquares(square){
    const previousSquare = square.previousElementSibling;
    const nextSquare = square.nextElementSibling;
    console.log(previousSquare, nextSquare);

    
}



/* function findAdjacentSquares(square) {
    const id = square.id.split("");
    let columnNum = parseInt(id[1]);
    let rowNum = parseInt(id[3]);
    const idAbove = "c" + columnNum + "r" + (rowNum+1);
    const idBelow = "c" + columnNum + "r" + (rowNum-1);
    const idLeft = "c" + (columnNum-1) + "r" + rowNum;
    const idRight = "c" + (columnNum+1) + "r" + rowNum;
    console.log(idAbove, idBelow, idLeft, idRight);
    return idAbove, idBelow, idLeft, idRight;
}

function fillSquare() {
    
}

function fillAdjacentSquares(idAbove, idBelow, idLeft, idRight) {
    const squareAbove = document.getElementById(idAbove);
    const squareBelow = document.getElementById(idBelow);
    const squareLeft = document.getElementById(idLeft);
    const squareRight = document.getElementById(idRight);

    // squareAbove.classList.remove('erase');
    squareAbove.classList.add('draw');
    squareAbove.style.backgroundColor = `${color}`;

    // squareBelow.classList.remove('erase');
    squareBelow.classList.add('draw');
    squareBelow.style.backgroundColor = `${color}`;

    // squareLeft.classList.remove('erase');
    squareLeft.classList.add('draw');
    squareLeft.style.backgroundColor = `${color}`;

    // squareRight.classList.remove('erase');
    squareRight.classList.add('draw');
    squareRight.style.backgroundColor = `${color}`;
} 
*/