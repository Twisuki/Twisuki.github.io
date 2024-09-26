function init () {
	// 设定初始页面 info
	var initPage = 0;
	
	for (let div of document.getElementsByClassName("nav-btn")) {
		div.className = "nav-btn nav-not-display";
	}
	document.getElementsByClassName("nav-btn")[initPage].className = "nav-btn nav-on-display";
	
	for (let div of document.getElementsByClassName("index")) {
		div.className = "index index-not-display";
	}
	document.getElementsByClassName("index")[initPage].className = "index index-on-display";
	
	// 贪吃蛇加载
	var snakeImg = document.getElementById("info-github-snake-img");
	var snakeTimer = setTimeout(function () {
		if (! snakeImg.complete) {
			console.log("Github贪吃蛇更新失败, 本地加载");
			console.log("Load Error: The Github Snake can't update, switch to load with local source !");
			snakeImg.src = "./src/snake.svg";
		}
	}, 5000)
	
	// 访问总数加载
	var countImg = document.getElementById("info-github-count-img");
	var countTimer = setTimeout(function () {
		if (! countImg.complete) {
			console.log("访问总数加载失败, 本地加载");
			console.log("Load Error: The Total Visited can't update, switch to load with local source !");
			countImg.src = "./src/count.svg";
		}
	}, 5000)
	
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
