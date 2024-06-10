function show() {
	let element = document.getElementById("illusive");
	element.classList.add("show");
	if(element.classList.contains("hide")) {element.classList.remove("hide");}
}

function hide() {
	let element = document.getElementById("illusive");
	element.classList.add("hide");
	if(element.classList.contains("show")) {element.classList.remove("show");}
	alert("Hello! I am an alert box!!");
}

document.body.onmouseup = hide();