let prevX = 0,
	prevY = 0,
	currX = 0,
	currY = 0;
let press = false;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let color = "000000";

let stopRandom = false;

let sel = "black";

function init() {
	canvas.addEventListener('mousemove', function(e) {
		mousePos('move', e)
	}, false);

	canvas.addEventListener('mousedown', function(e) {
		mousePos('down', e)
	}, false);

	canvas.addEventListener('mouseup', function(e) {
		mousePos('up', e)
	}, false);

	canvas.addEventListener('mouseout', function(e) {
		mousePos('out', e)
	}, false);
}

function mousePos(mouse, e) {
	if (mouse == "move") {
		prevX = currX;
		prevY = currY;
		currX = e.clientX - canvas.offsetLeft;
		currY = e.clientY - canvas.offsetTop;

		if (press == true) {
			switch (sel) {
				case "gradient":
					// Improve this!...
					c = parseInt(color, 16) + 0x00FFFF;
					color = ("000000" + c.toString(16)).substr(-6);
					break;

				case "aquamarine":
					color = "A8FFCC";
					break;

				case "black":
					color = "000000";
					break;

				case "random":
					random();
					break;

			}
			console.log(color);
			dibujar();
		}

	}

	if (mouse == "down") {
		press = true;
		prevX = currX;
		prevY = currY;
		currX = e.clientX - canvas.offsetLeft;
		currY = e.clientY - canvas.offsetTop;
	}

	if (mouse == "up") {
		press = false;
	}

	if (mouse == "out") {
		press = false;
	}
}

function selColor(sel_color) {
	stopRandom = false;
	sel = sel_color.value;
}

function random() {
	let cMax = Math.ceil(255);
	let cMin = Math.floor(0);

	color = "";

	if (stopRandom == false) {
		stopRandom = true;
		for (let i = 0; i <= 2; i++) {
			cRandom = "";
			cRandom = Math.floor(Math.random() * (cMax - cMin)) + cMin;
			cRandom = ("00" + cRandom.toString(16)).substr(-2);
			console.log(cRandom);
			color += cRandom;
		}
	}
}

function dibujar() {
	ctx.beginPath();
	ctx.moveTo(prevX, prevY);
	ctx.lineTo(currX, currY);
	ctx.strokeStyle = "#" + color;
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();
}