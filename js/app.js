'use strict';

var divID = 'content';
var screenID = 'bio';

/**
 * @param {string} htmlString contains html code in string format 
 * Places htmlString into content div section
 */
function placeHTML(htmlString) {
	document.getElementById('content').innerHTML = htmlString
}

////
//// Create strings for tabs
////////////////////////////////////////////
/**
 * create html for bio page
 */
function displayBio() {
	var string = '';
	string += '<img src="images/me.jpg" height="200" style="border-radius: 5px; margin-right: 25px" align="left" />';
	string += '<div>';
		string += '<h4>';
			string += 'Colan Biemer';
		string += '</h4>'
		string += '<b>Email:</b> <a href="mailto:colan@comcast.net" target="_top">colan@comcast.net</a>';
		string += '<br />';
		string += '<b>Accounts:</b>';
		string += '<br />';
		string += '<div style="text-indent: 2em";>';
			string += '<a href="https://www.linkedin.com/pub/colan-colan-biemer-12/72/356/a38"  target="_blank">LinkedIn</a>';
		string += '</div>';
		string += '<div style="text-indent: 2em";>';
			string += '<a href="https://github.com/bi3mer" target="_blank">GitHub</a>';
		string += '</div>';

		string += '<b>Tracks:</b>';
		string += '<div style="text-indent: 2em";>';
			string += 'Game Design and Development';
		string += '</div>';
		string += '<div style="text-indent: 2em";>';
			string += 'Artificial Intelligence';
		string += '</div>';

		string += 'You can see some of my <a href="https://github.com/bi3mer/WorkSpace" target="_blank">code</a> to solve small and well known problems';

		string += '<br/><br/><!-- Get underneath photo -->';

		string += '<p style="text-indent: 2em; text-align: justify;">';
			string += 'Hi, I\'m Colan Biemer a 4th year student at Drexel University in a five year program. I\'m studying Computer Science with a focus in Game Design & Development and Artificial Intelligence. My calling card is the ';
			string += '<a href="http://www.guinnessworldrecords.com/world-records/largest-architectural-videogame-display" target="_blank">';
				string += '"Worlds Largest Architectual Video Game" ';
			string += '</a>';
			string += 'on the Cira Center. The game that was played was Tetris, but more on that in the projects tab. I have a one app on the app store called "Game 1ne", most people are always confused by the "1ne" portion of the name. It\'s just pronounced as "one", not "one-ne." The regular game names were already taken, so this is what I was stuck with. I\'ve also worked on a few other projects which can be seen in the projects tab.';
		string += '</p>';

		string += '<p style="text-indent: 2em;text-align: justify;">';
			string += 'Recently while developing a roguelike game, I got involved with the map generation and started looking through a lot of the possible techniques that can be employed. I started off by testing out the simplest version known as ';
			string += '<a href= "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">';
				string += 'Conway\'s Game of Life ';
			string += '</a>';
			string += 'but found it to be far to sporatic and had no guranteed path. This opened up a multitude of new areas for me to explore. I won\'t try to be to technical with all of the details, but my end solution involved binary map generation for a guranteed path across blocks which make up the map. With this I created a guaranteed path from one block to the next and thusly a path across all blocks. I then extended it to be n-ary map generation. Here is one finished '; 
			string += '<a href = "https://github.com/bi3mer/WorkSpace/blob/master/GeneralProblems/Python/Procedural/Photos/finishedPost.png" target="_blank">';
				string += 'map';
			string += '</a>';
			string += '. In the process it exposed me to cellular automata and all the cool patterns associated with it. Part of me wants to figure out how to make a game out of all of the patterns, but I haven\'t figured out the right project for it yet.';
		string += '</p>';
		string += '<br/>';
		string += '<p>';
			string += 'Thanks for taking a look at my site, feel free to ';
			string += '<a href="mailto:colan@comcast.net" target="_top">';
				string += 'contact ';
			string += '</a>';
			string += 'me with any questions!';
		string += '</p>';
	string += '</div>';

	placeHTML(string);
	document.title = "Colan Biemer: Bio";
}

/**
 * create header item
 * if flag is true, then have no worked with and just place the text
 */
function createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language) {
	var string = '';
	string += '<img src="' + imgSrc + '" height="65" width="65" style="border-radius: 5px; margin-right: 25px" align="left">';
	string += '<div>';
		string += '<h4>';
			string += title;
		string += '</h4>';
		string += '<b>Role: </b> ' + role;
		string += '<br />';
		if(noWorkedWithFlag === true) {
			string += workedWith;
		} else {
			string += '<b>Worked With: </b>' + workedWith;
		}
		string += '</br>';
		string += '<b>Language: </b>' + language;
	string += '</div>';

	return string;
}

/**
 * create paragraph to go inside of accordion
 */
function createParagraph(paragraph) {
	var string = '';
	string += '<p style="text-indent: 2em; text-align: justify;">';
		string += paragraph;
	string += '</p>';

	return string;
}
/**
 * create body for accordion
 */
function createCollapsableBody(body, heading) {
	var string = '';
	string += '<div id="collapse' + heading + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + heading + '">';
		string += '<div class="panel-body">';
			string += body
		string += '</div>';
	string += '</div>';
	return string;
}

/**
 * create header for accordion
 */
 function createCollapsableHeader(header, heading) {
 	var string = '';
	string += '<div class="panel-heading" role="tab" id="heading' + heading + '">';
		string += '<h5>';
			string += '<a class="collapsed" role="button" style="color: black" data-toggle="collapse" data-parent="#accordion" href="#collapse' + heading + '" aria-expanded="false" aria-controls="collapse' + heading + '">';
				string += header;
			string += '</a>';
		string += '</h5>';
	string += '</div>';
	

	return string;
 }

/**
 * create item for accordion
 */
function createCollapsableItem(header, body){
	var string = '';
	string += '<div class="panel panel-default">';
		string += header;
		string += body;
	string += '</div>';

	return string;
}

function createAccordionHead() {
	return '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">';
}

function createAccordionEnd() {
	return '</div>';
}

function createTetris(heading) {
	// Header
	var imgSrc = 'images/ciraCenter_Tetris.jpg';
	var title  = 'Cira Center "Worlds Largest Game Ever" Tetris Project';
	var role   = 'Lead Programmer';
	var workedWith = 'Frank Lee and GayLord Holder';
	var noWorkedWithFlag = false;
	var language = 'Python'

	// Body
	var bodyString = '';
	var paragraph = 'The year before I worked on this project the ';
	paragraph += '<a href = "http://www.fastcolabs.com/3008594/worlds-biggest-game-pong-heres-how-they-built-it" target = "_blank">';
		paragraph +=  'Worlds Largest Game of Pong';
	paragraph += '</a>';
	paragraph += ' had been made and played on the Cira Center. Frank Lee and Gaylord Holder had both worked on the project and the lead'; 
	paragraph += 'programmer was Marc Barrowclift. During the development of the code base, many design decisions had been made in the heat';
	paragraph += 'of the moment due to the small time frame they had to get everything working. This resulted in an interesting code base that';
	paragraph += 'was handed to me the next year when Marc decided to move onto another project.';

	bodyString += createParagraph(paragraph);

	paragraph = 'When I started the project the longest piece of code I\'d written was at the max 400 lines and I had been given a 5k plus'; 
	paragraph += 'directory of code. At the time I had the slightest inkling of Object-Oriented programming, and instead mainly relied on'; 
	paragraph += 'functional programming. This resulted in some pretty heavy lifting on the coding side and a difficult time of figuring out;' 
	paragraph += 'how the existing code base was working. Within a month of playing around I had unknowingly created my own version of UML and';
	paragraph += 'had a pretty good understanding of how everything was happening.';

	bodyString += createParagraph(paragraph);

	paragraph = 'With this basic understanding and having made some small bug fixes throughout the first month I began working on the';
	paragraph += 'real task of the project: to put Tetris on the Cira Center utilizing both sides of the building. On top of this, the larger goal was to have'; 
	paragraph += 'a multiplayer version Tetris ready in time for ';
	paragraph += '<a href="https://www.facebook.com/phillytechweek" target="_blank">';
		paragraph += 'Philly Tech Week.';
	paragraph += '</a>';

	bodyString += createParagraph(paragraph);

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

function createInfiniteSkies(heading) {
	// Header
	var imgSrc = 'https://infiniteskiesgame.files.wordpress.com/2015/10/cropped-5400_3d_space_scene_hd_wallpapers.jpg';
	var title  = 'Infinite Skies - In Development';
	var role   = 'AI Programmer';
	var workedWith = 'Cody Rowlands, Alex Bafaloukos, Bryan Fawber, Bernard Sheeran, and Vincent De Tommaso';
	var noWorkedWithFlag = false;
	var language = 'Unity C#'

	// Body
	var bodyString = '';
	var paragraph = 'This project is still in development, for a game workshop class, and has been fairly interesting to work on. ';
	paragraph += 'Currently my role is to implement pathfinding into the game, which should be fairly simple ';
	paragraph += 'since unity has a built in NavMesh system. However because we are using a planets, I\'ve had ';
	paragraph += 'to create my own system. While this is ideal for learning, it isn\'t ideal for getting a game ';
	paragraph += 'up and running in a little under 5 weeks. You can of see the process at our ';
	paragraph += '<a href="https://infiniteskiesgame.wordpress.com/" target="_blank"> website </a>.'

	bodyString += createParagraph(paragraph);

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

function createTwitterMap(heading) {
	// Header
	var imgSrc = 'images/twitterMap.png';
	var title  = 'Twitter Map';
	var role   = 'Programmer';
	var workedWith = 'Frank Lee';
	var noWorkedWithFlag = false;
	var language = 'HTML, CSS, and Node.js (Javascript)'

	// Body
	var bodyString = '';
	var paragraph = 'This project never got to see the light of day to complexities out of my control but the idea ';
	paragraph += 'behind it was to create a service that would look for tweets with a hashtag of X and then map them ';
	paragraph += 'to a world map. I was able to complete this and without a ton of difficulty. The majority of my time ';
	paragraph += 'was spent refactoring the database design as I was still familiarizing myself with MongoDB. ';
	paragraph += 'The project is open source and can be seen at ';
	paragraph += '<a href="https://github.com/bi3mer/egsCiraPope" target="_blank">github</a>.'

	bodyString += createParagraph(paragraph);

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

function createGame1ne(heading) {
	// Header
	var imgSrc = 'images/game1ne_icon.png';
	var title  = 'Game 1ne';
	var role   = 'Sole Programmer';
	var workedWith = 'Solo Project';
	var noWorkedWithFlag = true;
	var language = 'Objective-C'

	// Body
	var bodyString = '';
	var paragraph = 'Game 1ne started as a small project to learn Objecte-C while I was working on Conquest with Van.';
	paragraph += 'The idea was to be a simple orb collection game. Once orbs could be collected I added enemies as ';
	paragraph += 'red orbs which could destroy the blue orbs, which including you. The project ended up being rather ';
	paragraph += 'simple and took only a weekend to complete, with an extra day of polishing and creating extra bits ';
	paragraph += 'of art, which is not my strength.';

	bodyString += createParagraph(paragraph);

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

function createUnityProjectManager(heading) {
	// Header
	var imgSrc = 'images/unityProjectManager_icon.png';
	var title  = 'Unity Project Manager';
	var role   = 'Sole Programmer';
	var workedWith = 'Solo Project';
	var noWorkedWithFlag = true;
	var language = 'Java'

	// Body
	var bodyString = '';
	var paragraph = 'I worked on this project for CS338 - Graphical User Interfaces. I decided I was unhappy with Unity\'s opening project ';
	paragraph += 'manager and decided to do something about it. My main issue, was that if I imported a project from a friend to ';
	paragraph += 'take a look at it, I\'d have to go through all the files to find it. A trivial problem, but something that I wanted ';
	paragraph += 'to fix.';

	bodyString += createParagraph(paragraph);

	paragraph = 'The biggest issue I encountered was the progress bar while file searching was occuring. Because I was using a third party library to search through ';
	paragraph += 'the directories for unity projects, I wasn\'t able to display the file path as I searched through each and every ';
	paragraph += 'directory. To make up for this I attempted to thread it so I could have a progress bar that had the bar go back and ';
	paragraph += 'forth. This solution did not work, however, and I was forced to thread the progress bar instead. ';

	bodyString += createParagraph(paragraph);

	paragraph = '<p style="text-align: justify;">';
	paragraph += 'You can view a blog post on Drexel\'s GUI blog I did';
	paragraph += '<a href="https://drexelui.wordpress.com/2015/03/19/unity-project-manager/" target="_blank"> here </a>';
	paragraph += '<br/>';
	paragraph += '<a href="https://github.com/bi3mer/Unity-Project-Manager" target="_blank"> View Source </a>';
	paragraph += '</p>';
	paragraph += 'I was required to make a ';
	paragraph += '<a href="https://www.youtube.com/watch?v=e-lCMQJ5jFw" target="_blank"> video </a> ';
	paragraph += 'so feel free to view it.';

	bodyString += paragraph

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

function createZDay(heading) {
	// Header
	var imgSrc = 'images/z-day.png';
	var title  = 'Z-Day';
	var role   = 'Lead Developer';
	var workedWith = 'Cody Rowlands, Mike DiLucca, and John Keough';
	var noWorkedWithFlag = false;
	var language = 'Unity C#';

	// Body
	var bodyString = '';
	var paragraph = 'I worked on this project for CS345 - Game Development: Foundations. The purpose of it was to display ';
	paragraph += 'an understanding of Unity and creating a fun game. This game ended up being a zombie survival game where ';
	paragraph += 'the player played as the zombie surviving a robot apocolypse. The game was an endless wave survival game that would ';
	paragraph += 'play untill the zombie died.';

	bodyString += createParagraph(paragraph);

	paragraph = 'My primary role in the game was the programming for enemies as well as the game manager. I aslo designed the UML ';
	paragraph += 'for the game early on in the project. I had 3 enemies types as well as one boss by the end of the project, which ';
	paragraph += 'had around 5 weeks of development. The design made it so if we had had more models, creating additional enemies ';
	paragraph += 'would have been a simple task. The biggest challenge on this project was meeting the deadline for all of our goals ';
	paragraph += 'as well as finding time for everyone to work together.'

	bodyString += createParagraph(paragraph);

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

function createLearnToApp(heading) {
	// Header
	var imgSrc = 'images/learnToAppIcon.png';
	var title  = 'Learn To App';
	var role   = 'Lead Developer';
	var workedWith = 'Alec Duong, Amanda Chue, and Tyler Boswell';
	var noWorkedWithFlag = false;
	var language = 'Object-C';

	// Body
	var bodyString = '';
	var paragraph = 'I worked on this project for Engr103 which focused on mobile app development. I had a group of four people, including myself. ';
	paragraph += 'This was a freshman course designed for ';
	paragraph += 'engineers to create apps. The idea was to promote self-learning, so the professor rarely taught and instead ';
	paragraph += 'told students to use the time to meet and work. Given that I was only on my second term of c++ I saught help ';
	paragraph += 'from <a href="http://www.lebow.drexel.edu/academics/disciplines/decision-sciences/faculty/pramodabichandani" target="_blank">';
	paragraph += 'Pramod Abichandani </a> who allowed me to sit in on his classes for Objective-C.';

	bodyString += createParagraph(paragraph);

	paragraph = 'During the classes I learned a few design principles along with learning enough to complete the app. The ';
	paragraph += 'project ended up being an app which taught others the basics of app development. It featured a simple interface with ';
	paragraph += 'code snippets to show how something could work or be added. The project itself was not extremely complicated, but ';
	paragraph += 'the learning progress was arduos. Luckily, during that time I learned the basics of how I should appraoch a problem ';
	paragraph += 'with very little, or no, base knowledge.'

	bodyString += createParagraph(paragraph);

	paragraph = 'The last requirement for the project was to create 3 or more youtube videos as tutorials. I hesitate to share this, but ';
	paragraph += '<a href="https://www.youtube.com/watch?v=gEAAiYGjTMA" target="_blank"> here </a>'
	paragraph += 'is one video from the tutorial videos I created.';

	bodyString += createParagraph(paragraph);

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

function createConquest(heading) {
	// Header
	var imgSrc = 'images/unmadeConquest.png';
	var title  = 'Conquest';
	var role   = 'Developer';
	var workedWith = 'Frank Lee and Van Nguyen';
	var noWorkedWithFlag = false;
	var language = 'Objective-C';

	// Body
	var bodyString = '';
	var paragraph = 'I worked on this project at the Entrepeneurial Game studio for about 9 months until it was dropped due to ';
	paragraph += 'technical limitations. The idea of the project was to create a life scale version of Netrek using buildings ';
	paragraph += 'as the planets and players as the ships. This presented many problems with tracking efficeincy, map UI, messaging, ';
	paragraph += 'player battles, etc.';

	bodyString += createParagraph(paragraph);

	paragraph = 'My main role was to support Van in anyway that I could, as I was still learning Object-C and IOS. As a result, I ended up working ';
	paragraph += 'on almsot every aspect of the proejct besides the UI. I worked with multiple databases in attempt to create the most optimal ';
	paragraph += 'multiplayer experience, including azure, amazon aws, iCloud, and others. Unfortunately, all of these options yielded ';
	paragraph += 'similar results, unsurprisingly. As a way to deal with this we looked into bluetooth options, but found the results to be far ';
	paragraph += 'too sporatic for solid multiplayer game play. Along the way we built a messaging system with notifications for teams to work ';
	paragraph += 'together. The result ended up being a scrapped project thanks to the iPhone being unable ';
	paragraph += 'to handle the necessary computations per a frame.'

	bodyString += createParagraph(paragraph);

	var head = createCollapsableHeader(createHeaderItem(imgSrc, title, role, workedWith, noWorkedWithFlag, language), heading);
	var body = createCollapsableBody(bodyString, heading);
	return  createCollapsableItem(head, body);
}

/**
 * create html for projects page
 */
function displayProjects() {
	var string = '';
	string += createAccordionHead();

	string += createTetris('tetris');
	string += createInfiniteSkies('InfiniteSkies');
	string += createTwitterMap('TwitterMap');
	string += createZDay('Z-day');
	string += createUnityProjectManager("unity");
	string += createGame1ne('game1ne');
	string += createConquest('conquest');
	string += createLearnToApp('learnToApp');

	string += createAccordionEnd();
	
	document.getElementById('content').innerHTML = string;
	document.title = "Colan Biemer: Projects";
}

/**
 * create html for resume page
 */
function displayResume() {
	var string = '<div class="panel panel-default" id="resume">';
				string += '<div class="panel-body">';
					string += '<div class="embed-responsive embed-responsive-4by3">';
						string += '<embed class="embed-responsive-item" src = "images/resume.pdf"></embed>'
					string += '</div>';
				string += '</div>';
	string += '</div>';

	placeHTML(string);

	document.title = "Colan Biemer: Resume";
}

function createList(key, type) {
	var string = '';
	var type2 = type;
	// make this key and list creation its own function
	if(key === type){
		string += '<li class = "active">';
		type2 = '<b>' + type + '</b>';
	} else {
		string += '<li>';
	}
	//TODO: bold the active href
	string += '<a id = "' + type + '" href="#" style="text-align:center;">' + type2 + '<span class="sr-only">(current)</span></a>';
	string += '</li>';
	return string;
}

function navBar(key) {
	var string = '';

	string += createList(key, 'Bio');
	string += createList(key, 'Projects');
	string += createList(key, 'Resume');

	document.getElementById('navBarId').innerHTML = string;
}

// Table containing access points to the functions
var table = {
	Bio: displayBio,
	Projects: displayProjects,
	Resume: displayResume
};

/**
 * @param {string} key to access table
 * uses key to run function inside of key
 * Note: will break on bad keys. 
 * P.s. I added this just to have atleast one data structure. Wasn't necessary at all.
 */
function buttonPressed(key) {
	table[key]();
	navBar(key);
}
