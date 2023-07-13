const squares = document.querySelectorAll('.row');

for (let square of squares) {
    square.addEventListener("click", toggleClass);
    // square.addEventListener("touchstart", toggleClass);

    function toggleClass() {
        if (square.classList.contains('erase')) {
            square.classList.remove('erase');
            square.classList.add('draw');
        } else if (square.classList.contains('draw'))  {
            square.classList.remove('draw');
            square.classList.add('erase');
        }
    }
}