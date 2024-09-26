
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" contect="width=device-width, initial-scale=1.0">
	<script src="index.js"></script>
	
	<link rel="stylesheet" href="stylesheet/index.css" />
	<link rel="stylesheet" href="stylesheet/navbar.css" />
	
	<link rel="stylesheet" href="stylesheet/info.css" />
	<link rel="stylesheet" href="stylesheet/repo.css" />
	<link rel="stylesheet" href="stylesheet/src.css" />
	<link rel="stylesheet" href="stylesheet/contect.css" />
	
	<link rel="stylesheet" href="stylesheet/custom.css" />
	<title>Twisuki的自我介绍</title>
</head>
<body>
	<div id="body">
		
		<!-- Navbar {Avatar btn1 btn2 btn3 btn4 Link} -->
		<!-- 基本信息 个人仓库 常用资源 联系方式 -->
		<div id="navbar">
			<div id="avatar">
				<a href="https://github.com/Twisuki">
					<img src="./src/avatar.png" title="Nya~" />
				</a>
			</div>
			
			<div id="nav-btn">
				<div id="nav-btn-info" class="nav-btn" title="来认识咱w&#10;Come to know me !">
					<a onclick="showPage(0)">
						基本信息<br />
						Information
					</a>
				</div>
				<div id="nav-btn-repo" class="nav-btn" title="这是咱的仓库&#10;There are my repositories.">
					<a onclick="showPage(1)">
						个人仓库<br />
						Repositories
					</a>
				</div>
				<div id="nav-btn-src" class="nav-btn" title="这些资源希望你也用的上&#10;Some useful source you maybe need">
					<a onclick="showPage(2)">
						常用资源<br />
						Source
					</a>
				</div>
				<div id="nav-btn-contect" class="nav-btn" title="可以来联系咱w&#10;Reach me here !">
					<a onclick="showPage(3)">
						联系方式<br />
						Contect Me
					</a>
				</div>
			</div>
			
			<div id="link">
				<div id="link-github" class="link-logo">
					<a href="https://github.com/Twisuki">
						<img src="./src/github.png"/>
					</a>
				</div>
				<div id="link-bilibili" class="link-logo">
					<a href="https://space.bilibili.com/317707977">
						<img src="./src/bilibili.png"/>
					</a>
				</div>
			</div>
		</div>
		
		<!-- Main -->
		<!-- 页面主体 -->
		<div id="main">
			<!-- index-0 基本信息 -->
			<div id="main-info" class="index">
				<div id="info-cover">
					<img src="./src/cover.jpg" />
				</div>
				
				<div id="info-title">
					<div id="info-title-1">
						你好, 这里是Twisuki !
					</div>
					<div id="info-title-1-en">
						Hello, this is Twisuki !
					</div>
					<div id="info-title-avatar">
						<img src="./src/avatar.png" />
					</div>
					<div id="info-title-2">
						qwq, 咱是苏阳, 可以直接叫咱"苏喵"的.
					</div>
					<div id="info-title-2-en">
						QwQ, I'm Su_Yang, you can just call me Twisuki.
					</div>
					<div id="info-title-3">
						之前的名字是"信标", 不太喜欢这个名字, 希望还是叫咱苏喵吧~
					</div>
					<div id="info-title-3-en">
						I'm used to be called "Beacon", I don't like it so much, so just call me Twisuki please ~
					</div>
				</div>
				
				<hr />
				
				<div id="info-mine">
					<div id="info-mine-left">
						<li class="info-mine">
							咱是来自辽宁的一只猫
						</li>
						<li class="info-mine-en">
							This is a cat from Liaoning Province.
						</li>
						<li class="info-mine">
							现在在湖南大学(HNU)就读
						</li>
						<li class="info-mine-en">
							Now I'm studying in Hunan University(HNU).
						</li>
						<li class="info-mine">
							喜欢玩MC和冰与火之舞, 但是都很菜
						</li>
						<li class="info-mine-en">
							Like playing Minecraft and ADOFAI, but not good at any one.
						</li>
					</div>
					
					<div id="info-mine-right">
						<li class="info-mine">
							只会原生HTML + JavaScript + CSS写web...
						</li>
						<li class="info-mine-en">
							I can only use origenal HTML + js + CSS for web development...
						</li>
						<li class="info-mine">
							常用语言是Java, 最近在学C++和Python
						</li>
						<li class="info-mine-en">
							Ofen use Java, but learning C++ and Python recently.
						</li>
						<li class="info-mine">
							以后还打算学习Android APP开发(?)
						</li>
						<li class="info-mine-en">
							I plan to learn the development of Android APP (maybe). 
						</li>
					</div>
				</div>
				
				<hr />
				
				<div id="info-gender">
					<p class="info-gender">
						其实咱一直都有这样一个问题, 从小也觉得自己好像不适合男生的身份, 直到2023年通过涵酱<a href="https://github.com/yuhan2680">(@yuhan2680)</a>, 开始了对LGBT的了解. 这样一个特殊的群体, 好像解答了咱自己的问题. 自己不是一个纯粹的男生, 也不想变成mtf(可能是不敢面对这样改变的后果吧), 咱自己可能是mtx或者Agender, 但还是偏男性一点...
					</p>
					<p class="info-gender">
						In fact, I have always had this problem. Since childhood, I felt that I were not suitable for a male identity, until 2023 when I started to understand LGBT through Xiaohan<a href="https://github.com/yuhan2680">(@yuhan2680)</a>. This special group seems to have answered my own questions. I'm not a pure boy but I don't want to become an MTF (maybe I dare not face the consequences of such a change). I may be an MTX or Agender myself, but I'm still a bit more masculine.
					</p>
					<p class="info-gender">
						从了解LGBT开始, 自己也陷入了焦虑, 可以说问题得到了解释, 但是得不到解答. 一个是社会对LGBT群体的接纳, 尤其是咱北方这样比较保守的地方; 再一个是对自己将来何去何从没有了规划(虽然本来也没有规划). 从深入接触网络, 认识越来越多的人之后, 自己了解到越来越多的东西, 反而变得越来越苦恼. 
					</p>
					<p class="info-gender">
						Starting from understanding LGBT, I also fell into anxiety. It can be said that the problem was explained but not answered. One is the acceptance of the LGBT community by society, especially in conservative places like our northern region of China; Another issue is that there is no plan for one's future (although there was no plan originally). After delving deeper into the internet and getting to know more and more people, I learned more and more things, but instead became increasingly distressed.
					</p>
					<p class="info-gender">
						今天不再回避这个问题了, 希望看到的朋友能更多的了解咱.
					</p>
					<p class="info-gender">
						Today I won't avoid this question anymore. I hope that friends who see me can get to know me better.
					</p>
				</div>
				
				<hr />
				
				<div id="info-github">
					<li id="info-github-1">
						从现在开始, 打算专心经营自己的Github账号了, 在这里可以学到好多新东西.
					</li>
					<li id="info-github-1-en">
						From now on, I plan to focus on managing my Github account, where I can learn a lot of new things.
					</li>
					
					<picture id="info-github-snake">
						<source srcset="https://raw.githubusercontent.com/Twisuki/Twisuki/output/github-contribution-grid-snake-dark.svg" />
						<img src="./src/snake.svg" />
					</picture>
					<!-- 由Platane开发的Github贪吃蛇
					This is Github Snake developed by Platane.
					https://github.com/Platane/snk -->
					
					<div id="info-github-2">
						访问总数: <br />
						Total Visited: 
					</div>
					<picture id="info-github-count">
						<source srcset="https://profile-counter.glitch.me/twisuki/count.svg" />
						<img title="本地输出, 时间:2024.09.22" src="./src/count.svg" />
					</picture>
					
					<!-- https://github-readme-stats.vercel.app/api/top-langs/?username=twisuki -->
					<div id="info-github-3">
						常用语言: <br />
						Top Languages: 
					</div>
					<div id="info-github-lang">
						
					</div>
				</div>
			</div>
			
			<!-- index-1 个人仓库 -->
			<div id="main-repo" class="index">
				2
			</div>
			
			<!-- index-2 常用资源 -->
			<div id="main-src" class="index">
				3
			</div>
			
			<!-- index-3 联系方式 -->
			<div id="main-contect" class="index">
				4
			</div>
		</div>
		
		<!-- Bottom -->
		<!-- 底部 -->
		<div id="bottom">
			
		</div>
	</div>

	<script>
		init();
	</script>
</body>
</html>
