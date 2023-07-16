const squares = document.querySelectorAll('.row');
const colorInput = document.querySelector("#color");
const fillBackgroundButton = document.querySelector("#fillBackground");
let color = "#000";

colorInput.addEventListener('input', function(e) {
    color = colorInput.value;
});

fillBackgroundButton.addEventListener('click', fillBackground);


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

function findAdjacentSquares(square){
    const previousSquare = square.previousElementSibling;
    const nextSquare = square.nextElementSibling;
    console.log(previousSquare, nextSquare);
}