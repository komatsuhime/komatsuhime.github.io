const squares = document.querySelectorAll('.row');
const colorInput = document.querySelector("#color");
let color = "#000";

colorInput.addEventListener('input', function(e) {
    color = colorInput.value;
    console.log(color);
});

for (let square of squares) {
    square.addEventListener("click", toggleClass);
}

function toggleClass() {
    if (this.classList.contains('erase')) {
        this.classList.remove('erase');
        this.classList.add('draw');
        this.style.backgroundColor = `${color}`;
        console.log('click!')
    } else if (this.classList.contains('draw'))  {
        this.classList.remove('draw');
        this.classList.add('erase');
        this.style.backgroundColor = "#fff";
    }
}