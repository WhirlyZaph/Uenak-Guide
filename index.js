// Scrolling
var navbar = document.getElementById("navbar");
function whenScroll(scrollFlag) {
	if (scrollFlag.deltaY > 0) {navbar.setAttribute("style", "top:-80px");}
	else {navbar.setAttribute("style", "top:0");}
}
document.addEventListener("wheel", whenScroll);

// Hides
var menubar = document.getElementById("menubarid");
function whenClick(event) {
	if (!event.target.matches(".killoutside")) {
		if (menubar.classList.contains("show")) {menubar.classList.remove("show");}
	}
}
document.addEventListener("click", whenClick);

// Sliding
var c1 = 3; // Order number of rightmost visible card
var cards1 = document.getElementById("cc1");
var buttonLeft1 = document.getElementById("cbl1");
var buttonRight1 = document.getElementById("cbr1");
function contentLeft1() {
	c1 -= 1;
	content1();
}
function contentRight1() {
	c1 += 1;
	let tempc1 = document.getElementById("cci1 " + c1);
	tempc1.classList.remove("lazy");
	content1();
}
function content1() {
	let tempc1 = -378 * (c1 - 3);
	let trans1 = "transform:translate3d(" + tempc1 + "px, 0px, 0px)";
	cards1.setAttribute("style", trans1);
	if (c1 <= 3) {
		buttonLeft1.setAttribute("style", "visibility:hidden");
	} else if (c1 >= 7) {
		buttonRight1.setAttribute("style", "visibility:hidden");
	} else {
		buttonLeft1.setAttribute("style", "visibility:visible");
		buttonRight1.setAttribute("style", "visibility:visible");
	}
}