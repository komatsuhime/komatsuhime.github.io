const squares = document.querySelectorAll('.row');

/* squares.forEach((square) => {
    square.addEventListener("click", () => {
        console.log("click!");
        square.classList.add('draw');
    });
}); */

for (let square of squares) {
    square.addEventListener("click", () => {
        console.log("click!");
        square.classList.add('draw');
    });
};