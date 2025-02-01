scrollTopForNavbar();

// Navbar 滚动检测
function scrollTopForNavbar () {
	const scrollTopLimit = 80;
	window.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;

	console.log(scrollTop);

	if (scrollTop >= scrollTopLimit) {
		document.getElementById("nav").classList.add("onscrolled");
	} else {
		document.getElementById("nav").classList.remove("onscrolled");
	}
});
}

