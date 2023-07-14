const squares = document.querySelectorAll('.row');

for (let square of squares) {
    square.addEventListener("click", toggleClass);
}

function toggleClass() {
    if (this.classList.contains('erase')) {
        this.classList.remove('erase');
        this.classList.add('draw');
    } else if (this.classList.contains('draw'))  {
        this.classList.remove('draw');
        this.classList.add('erase');
    }
}