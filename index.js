function init () {
	for (let div of document.getElementsByClassName("nav-btn")) {
		div.className = "nav-btn nav-not-display";
	}
	document.getElementsByClassName("nav-btn")[0].className = "nav-btn nav-on-display";
	
	for (let div of document.getElementsByClassName("index")) {
		div.className = "index index-not-display";
	}
	document.getElementsByClassName("index")[0].className = "index index-on-display";
}

function showPage (index) {
	for (let div of document.getElementsByClassName("nav-btn")) {
		div.className = "nav-btn nav-not-display";
	}
	document.getElementsByClassName("nav-btn")[index].className = "nav-btn nav-on-display";
	
	for (let div of document.getElementsByClassName("index")) {
		div.className = "index index-not-display";
	}
	document.getElementsByClassName("index")[index].className = "index index-on-display";
}