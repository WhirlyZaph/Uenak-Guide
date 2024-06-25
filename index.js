// Scrolling
var navbar = document.getElementById("navbar");
var noscroll = false;
function whenScroll(scrollFlag) {
	if (scrollFlag.deltaY > 0 && !noscroll) {navbar.setAttribute("style", "top:-80px");}
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
var c2 = 3;
var cards2 = document.getElementById("cc2");
var buttonLeft2 = document.getElementById("cbl2");
var buttonRight2 = document.getElementById("cbr2");
function contentLeft2() {
	c2 -= 1;
	content2();
}
function contentRight2() {
	c2 += 1;
	let tempc2 = document.getElementById("cci2 " + c2);
	tempc2.classList.remove("lazy");
	content2();
}
function content2() {
	let tempc2 = -378 * (c2 - 3);
	let trans2 = "transform:translate3d(" + tempc2 + "px, 0px, 0px)";
	cards2.setAttribute("style", trans2);
	if (c2 <= 3) {
		buttonLeft2.setAttribute("style", "visibility:hidden");
	} else if (c2 >= 7) {
		buttonRight2.setAttribute("style", "visibility:hidden");
	} else {
		buttonLeft2.setAttribute("style", "visibility:visible");
		buttonRight2.setAttribute("style", "visibility:visible");
	}
}