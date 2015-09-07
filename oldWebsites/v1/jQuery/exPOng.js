$(document).ready(function() {
	// set up ------------------------------------------------------------>
	var canvas;
	var ctx;
	var width;
	var height;
	var paddle1;
	var paddle2;
	var ball;
	var GAMEOVER;
	var gameStart;
	var madeCanvas = false;
	var cw = 10;
	//this will set up game
	function init(){
		gameStart = true;
		$('#canvasCenter').append('<canvas id = "canvas" width = "640" height = "480"/>');
		ctx  = $("#canvas")[0].getContext("2d");
		width = $("#canvas").width();
		height = $("#canvas").height();
		madeCanvas = true;
		ctx.fillStyle = "#EEEEEE";
		ctx.fillRect(0, 0, width, height);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, width, height);
		paddle1 = {
			x: .5,
			y:(height/2)/10,
			score:0
		};
		paddle2 = {
			x:((width-10)/10) - .5,
			y:(height/2)/10,
			score:0
		};
		ball = {
			x:(width/2)/10,
			y:(height/2)/10,
			speedX:1, // speed is basically velocity in this case
			speedY:.1
			//angle stuff later
		};
		
		GAMEOVER = false;
		
		if(typeof game_loop != "undefined") 
			clearInterval(game_loop);
		game_loop = setInterval(paint, 60); 
	}
	function reInit(){
		ball = {
			x: (width/2)/10,
			y:(height/2)/10,
			speedX:1, // speed is basically velocity in this case
			speedY:.1
			//angle stuff later
		};
		paddle2.y = (height/2)/10;
		paddle1.y = (height/2)/10;
	}
	$('#pongDiv').fadeTo('slow',.1);
	$('#pongDiv').click(function(){
		//need an if statement here to make sure it doesn't occur constantly
		if(document.getElementById('canvas')==null){
			$('#picture').remove();
		} else {
			//canvas could be being run by other game so we destroy canvas and recreate it to terminate loop
			$('#canvas').remove();		
		}
		init();
	});
	
	$('#pongDiv').mouseenter(function(){
		$('#pongDiv').fadeTo('slow',1);
	});
	$('#pongDiv').mouseleave(function(){
		$('#pongDiv').fadeTo('slow',.1);
	});
	// game stuff -------------------------------------------------------->
	function paint(){
		if(ball.speedX>0){
			ball.speedX+=.001;
		} else{
			ball.speedX-=.001;
		}
		value = checkBallPos();
		ctx.clearRect(0,0,width,height);
		//score and half line
		ctx.font="80px Aria";
		ctx.fillStyle='#bbbbbb';
		ctx.fillText(paddle1.score,(width/2)-120,100);
		ctx.fillText(paddle2.score,(width/2)+80,100);
		ctx.fillRect(width/2,0,2,height);
		//more game stuff
		if(value == null){
			// this means game continues on, since the ball hasn't ended
			ball.x += ball.speedX;
			ball.y += ball.speedY;
		} else{
			//if the value isn't null than it will take the number value to gie a point to the score
			if(value == 1){
				paddle1.score+=1;
			} else{
				paddle2.score+=1
			}
		}
		paddleBot();
		paintCell();
		paintPaddles();
		
	}
	function paddleBot(){
		if(paddle1.y+4 <= ball.y || paddle1.y >= ball.y){
			if(paddle1.y<ball.y){
				paddle1.y+=1;
			} else if(paddle1.y>ball.y){
				paddle1.y-=1;
			}
		} 
	}
	function removeOldPaddles(){
		ctx.fillStyle = "#EEEEEE";
		ctx.fillRect(paddle2.x*cw, paddle2.y*cw, cw, cw*4);
	}
	function paintPaddles(){
		ctx.fillStyle = "#7a7a7a";
		ctx.fillRect(paddle1.x*cw, paddle1.y*cw, cw, cw*4);
		ctx.fillRect(paddle2.x*cw, paddle2.y*cw, cw, cw*4);
	}
	function removeOldBall(){
		ctx.fillStyle = "#EEEEEE";
		ctx.fillRect(ball.x*cw, ball.y*cw, cw, cw);
	}
	function paintCell(){
		ctx.fillStyle = "#7a7a7a";
		ctx.fillRect(ball.x*cw, ball.y*cw, cw, cw);
	}
	function checkBallPos(){
		if(ball.y <= .2 || ball.y>=((height/10)-1)){
			ball.speedY*=-1;
		}
		if (ball.x > (width/10)){	
			reInit();  //the init calls will have ot be changed eventually to allow for more scoring etc.
			return 1;
		} else if (ball.x < 0){
			reInit();
			return 2;
		}  else{
			x =checkCollision();
			if(x == 1){ //paddle1
				ball.speedX*=-1;
				if(ball.y > paddle1.y+2){
					ball.speedY+=.1;
				} else {
					ball.speedY-=.1;
				}
			} else if(x == 2) { //paddle2
				ball.speedX*=-1;
				if(ball.y > paddle2.y+2){
					ball.speedY+=.1;
				} else {
					ball.speedY-=.1;
				}
			}
			return null;
		}
	}
	function checkCollision(){
		if(ball.speedX>0){ //going in positive direction to player on right side
			if((ball.x <= paddle2.x  && ball.x>=paddle2.x-1.5 ) && (ball.y <= paddle2.y+4  && ball.y>=paddle2.y-.4)){
				return 2;
			} 
		} else{ // going in negative direciton to bot on left side
			if((ball.x <= paddle1.x+1.5  && ball.x>=paddle1.x ) && (ball.y <= paddle1.y+4  && ball.y>=paddle1.y-.4)){
				return 1;
			} 
		}
		return null;
	}
	$(document).keydown(function(e){
		if(gameStart==true){
			var key = e.which;
			if(key == "38") { // up
				if(paddle2.y>=0){
					removeOldPaddles();
					paddle2.y-=2;
					paintPaddles();
				}
			}
			else if(key == "40") { // down
				if(paddle2.y<=(height/10)-4){
					removeOldPaddles();
					paddle2.y+=2;
					paintPaddles();
				}
			}
			else if(key == "32") { // this needs to be played with
				if(gameOver == true){
					gameOver = false;
					init();
				}
			}
		}
	})
});