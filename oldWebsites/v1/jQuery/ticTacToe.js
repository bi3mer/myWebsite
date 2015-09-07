$(document).ready(function(){
	//in retrospect i need to use a printboard function instead of that horrible mess below for the clicks
	//the bot in this game can be beaten!
	$('#ticDiv').fadeTo('slow',0.3);
	var board;
	var timer=0;
	arr = [];
	function init(){
		$('#canvasCenter').append('<canvas id = "canvas" width = "640" height = "480"/>');
		ctx  = $("#canvas")[0].getContext("2d");
		width = $("#canvas").width();
		height = $("#canvas").height();
		ctx.fillStyle = "#EEEEEE";
		ctx.fillRect(0, 0, width, height);
		ctx.strokeStyle = "black";

		ctx.drawImage(document.getElementById('topLeft'),2,0);
		ctx.drawImage(document.getElementById('topMiddle'),215,0);
		ctx.drawImage(document.getElementById('topRight'),418,0);

		ctx.drawImage(document.getElementById('middleLeft'),2,160);
		ctx.drawImage(document.getElementById('middleMiddle'),215,160);
		ctx.drawImage(document.getElementById('middleRight'),418,160);

		ctx.drawImage(document.getElementById('bottomLeft'),2,320);
		ctx.drawImage(document.getElementById('bottomMiddle'),215,320);
		ctx.drawImage(document.getElementById('bottomRight'),417,320);

		canvas.addEventListener("mousedown", doMouseDown, false); 

		board = [[10,11,12],[13,14,15],[16,17,18]];
	}
	function printBoard(){
		// for debugging
		for(x=0;x<3;x++){
			console.log(board[x]);
		}
	}
	function reInit(){
		ctx.fillStyle = "#EEEEEE";
		ctx.fillRect(0, 0, width, height);
		ctx.strokeStyle = "black";

		ctx.drawImage(document.getElementById('topLeft'),2,0);
		ctx.drawImage(document.getElementById('topMiddle'),215,0);
		ctx.drawImage(document.getElementById('topRight'),418,0);

		ctx.drawImage(document.getElementById('middleLeft'),2,160);
		ctx.drawImage(document.getElementById('middleMiddle'),215,160);
		ctx.drawImage(document.getElementById('middleRight'),418,160);

		ctx.drawImage(document.getElementById('bottomLeft'),2,320);
		ctx.drawImage(document.getElementById('bottomMiddle'),215,320);
		ctx.drawImage(document.getElementById('bottomRight'),417,320);

		canvas.addEventListener("mousedown", doMouseDown, false); 

		board = [[10,11,12],[13,14,15],[16,17,18]];

	}
	function checkGameOver(d){
		for(var i = 0;i<3;i++){ //horizontal check
			if(d[i][0] == d[i][1] && d[i][0] == d[i][2]){
				return d[i][0];
			}
		}
		for(i = 0;i<3;i++){ //vertical check
			if(d[0][i] == d[1][i] && d[0][i] == d[2][i]){
				return d[0][i];
			}
		}
		if(d[0][0]==d[1][1] && d[0][0]==d[2][2]){ //diagnol checks
			return board[0][0];
		} else if(d[0][2]==d[1][1] && d[1][1]==d[2][0]){
			return d[0][2];
		}
		return null;
	}
	function doMouseDown(event) {
		//it appers that x is offset by 255 and y by 112
		var x = event.x;
  		var y = event.y;

  		var canvas = document.getElementById("canvas");

  		x -= canvas.offsetLeft;
  		y -= canvas.offsetTop;

		if(y < 158){ //this means we are in the top 
			if(x < 214){
				if(board[0][0] > 9 ){
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(215,160);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(215,0);
					ctx.lineTo(0,160);
					ctx.stroke();
					board[0][0] = 1;
					callBot()
				}
			} else if(x < 420){
				if(board[0][1] > 9 ){
					ctx.beginPath();
					ctx.moveTo(215,0);
					ctx.lineTo(418,160);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(215,160);
					ctx.lineTo(418,0);
					ctx.stroke();
					board[0][1] = 1;
					callBot()
				}
			} else{
				if(board[0][2] > 9 ){
					ctx.beginPath();
					ctx.moveTo(418,0);
					ctx.lineTo(630,160);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(418,160);
					ctx.lineTo(630,0);
					ctx.stroke();
					board[0][2] = 1;
					callBot()
				}
			}
		} else if(y<320){ //this means we are in the middle
			if(x < 214){
				if(board[1][0] > 9 ){
					ctx.beginPath();
					ctx.moveTo(0,160);
					ctx.lineTo(215,320);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(215,160);
					ctx.lineTo(0,320);
					ctx.stroke();
					board[1][0] = 1;
					callBot()
				}
			} else if(x < 420){
				if(board[1][1] > 9 ){
					ctx.beginPath();
					ctx.moveTo(215,320);
					ctx.lineTo(418,160);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(215,160);
					ctx.lineTo(418,320);
					ctx.stroke();
					board[1][1] = 1;
					callBot()
				}
			} else{
				if(board[1][2] > 9 ){
					ctx.beginPath();
					ctx.moveTo(418,320);
					ctx.lineTo(630,160);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(418,160);
					ctx.lineTo(630,320);
					ctx.stroke();
					board[1][2] = 1;
					callBot()
				}
			}
		} else { //this means we are in the bottom
			if(x< 214){
				if(board[2][0] > 9 ){
					ctx.beginPath();
					ctx.moveTo(0,320);
					ctx.lineTo(215,480);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(215,320);
					ctx.lineTo(0,480);
					ctx.stroke();
					board[2][0] = 1;
					callBot()
				}
			} else if(x < 420){
				if(board[2][1] > 9 ){
					ctx.beginPath();
					ctx.moveTo(215,320);
					ctx.lineTo(418,480);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(215,480);
					ctx.lineTo(418,320);
					ctx.stroke();
					board[2][1] = 1;
					callBot()
				} 
			} else{
				if(board[2][2] > 9 ){
					ctx.beginPath();
					ctx.moveTo(418,320);
					ctx.lineTo(630,480);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(418,480);
					ctx.lineTo(630,320);
					ctx.stroke();
					board[2][2] = 1;
					callBot()
				}
			}
		}
	}
	function callBot(){
		var freeAreas = getFreeLocations(board); 
		if(checkGameOver(board) == null && freeAreas.length>0){
			botDeploy();
			if(checkGameOver(board) != null){
				gameOver();
			}
		} else {
			gameOver();
		}
	}
	function botDeploy(){
		//if it is the first move
		var freeAreas = getFreeLocations(board); 
		val = bot(2,board);
		var maxValueInArr = 0;
		for(i = 1;i<arr.length;i++){
			if(arr[maxValueInArr]<arr[i]){
				maxValueInArr = i;
			}
		}
		board[freeAreas[parseInt(maxValueInArr)][0]][freeAreas[parseInt(maxValueInArr)][1]]=2;
		drawSquare(maxValueInArr,freeAreas);
		/*
		console.log('made a move!');
		console.log(arr[maxValueInArr]);
		console.log(arr);
		console.log('------');
		*/
		return;
	}
	function bot(player,currentBoard){
		//set up board for local use
		var max = new Array();
		var b = [[0,0,0],[0,0,0],[0,0,0]];
		for(var i = 0; i<3; i++){
			for(var j = 0; j<3; j++){
				b[i][j]=currentBoard[i][j];
			}
		}
		//get free areas to traverse current recursion of board
		var freeAreas=getFreeLocations(b);
		if(checkGameOver(b)==null){ //if game is not over that means we go and loop through possible moves
			for(var x=0;x<freeAreas.length;x++){
				max.push(100); //add 100 as the base
				var value = b[freeAreas[x][0]][freeAreas[x][1]];
				b[freeAreas[x][0]][freeAreas[x][1]]=player; //add to board the player (1 or 2)
				if(checkGameOver(b)==2){ //if player 2 won
					max[x]+=500;
				}else if(checkGameOver(b)==1){ //if player 1 won
					max[x]-=10;
				} else if(freeAreas == 0){//if it is a draw
					max[x]+=250;
				} else { //go to recursion
					if(player == 2){
						max[x]+=bot(1,b);
					} else {
						max[x]+=bot(2,b);
					}
				}
				b[freeAreas[x][0]][freeAreas[x][1]]=value; //reset for next loop of calculation
			}
		} else { //precautionary, most likely will never be here
			if(checkGameOver(b)==2){
				return 200;
			} else{
				return 0;
			}
		} 
		if(max.length>0){
			var maxValue=0;
			for(var i = 1; i<max.length; i++){
				if(max[maxValue]>max[i]){
					maxValue=i;
				}
			}
			arr.length=0;
			for(var x = 0;x<max.length;x++){
				arr.push(max[x]);
			}
			return max[maxValue];
		} else {
			return 1;
		}
	}
	function getFreeLocations(d){
		var locations = [];
		for(var y = 0;y<3;y++){
			for(var x = 0;x<3;x++){
				if(d[y][x]> 9){
					locations.push([y,x]);
				}
			}
		}
		return locations;
	} 
	function drawSquare(val,freeAreas){
		switch (freeAreas[parseInt(val)][0]){
			case 0:
				switch(freeAreas[parseInt(val)][1]){
					case 0:
						ctx.strokeRect(20,20,170,120);
						break;
					case 1:
						ctx.strokeRect(226,20,170,120);
						break;
					case 2:
						ctx.strokeRect(439,20,170,120);
						break;
				}
				break;
			case 1:
				switch(freeAreas[parseInt(val)][1]){
					case 0:
						ctx.strokeRect(20,170,170,120);
						break;
					case 1:
						ctx.strokeRect(226,170,170,120);
						break;
					case 2:
						ctx.strokeRect(439,170,170,120);
						break;
				}
				break;
			case 2:
				switch(freeAreas[parseInt(val)][1]){
					case 0:
						ctx.strokeRect(20,330,170,120);
						break;
					case 1:
						ctx.strokeRect(226,330,170,120);
						break;
					case 2:
						ctx.strokeRect(439,330,170,120);
						break;
				}
				break;
			default:
				reInit();
				break;
		}
	}
	function gameOver(){
		x =returnTypeLoss();
		if (x!=null){
			drawLine(x);
		} else {
			ctx.font='200px Aria';
			ctx.fillStyle='#7a7a7a';
			ctx.fillText('DRAW',20,300);
		}
		setTimeout(function(){reInit()},4000);
	}
	function drawLine(info){
		switch(info[0]){
			case 'horizontal':
				switch(parseInt(info[1])){
					case 0:
						ctx.beginPath();
						ctx.moveTo(50,50);
						ctx.lineTo(600,50);
						ctx.stroke();
						break;
					case 1:
						ctx.beginPath();
						ctx.moveTo(50,210);
						ctx.lineTo(600,210);
						ctx.stroke();
						break;
					case 2:
						ctx.beginPath();
						ctx.moveTo(50,370);
						ctx.lineTo(600,370);
						ctx.stroke();
						break;
					default:
						reInit();
						break;
				}
				break;
			case 'vertial':
				switch(parseInt(info[1])){
					case 0:
						ctx.beginPath();
						ctx.moveTo(100,10);
						ctx.lineTo(50,480);
						ctx.stroke();
						break;
					case 1:
						ctx.beginPath();
						ctx.moveTo(313,12);
						ctx.lineTo(263,480);
						ctx.stroke();
						break;
					case 2:
						ctx.beginPath();
						ctx.moveTo(536,8);
						ctx.lineTo(476,480);
						ctx.stroke();
						break;
					default:
						reInit();
						break;
				}
				break;
			case 'diagnol':
				switch(parseInt(info[1])){
					case 0:
						ctx.beginPath();
						ctx.moveTo(0,0);
						ctx.lineTo(640,480);
						ctx.stroke();
						break;
					case 1:
						ctx.beginPath();
						ctx.moveTo(640,0);
						ctx.lineTo(0,480);
						ctx.stroke();
						break;
					default:
						reInit();
						break;
				}
				break;
			default:
				reInit();
				break;
		}
		return null;
	}
	function returnTypeLoss(){
		for(var i = 0;i<3;i++){ //horizontal check
			if(board[i][0] == board[i][1] && board[i][0] == board[i][2]){
				return ['horizontal',i];
			}
		}
		for(i = 0;i<3;i++){ //vertical check
			if(board[0][i] == board[1][i] && board[0][i] == board[2][i]){
				return ['vertial',i];
			}
		}
		if(board[0][0]==board[1][1] && board[0][0]==board[2][2]){ //diagnol checks
			return ['diagnol',0];
		} else if(board[0][2]==board[1][1] && board[1][1]==board[2][0]){
			return ['diagnol',1];
		}
		return null;
	}
	$('#ticDiv').click(function(){
		//need an if statement here to make sure it doesn't occur constantly
		if(document.getElementById('canvas')==null){
			$('#picture').remove();
		} else {
			//canvas could be being run by other game so we destroy canvas and recreate it to terminate loop
			$('#canvas').remove();		
		}
		init();
	});
	$('#ticDiv').mouseenter(function(){
		$('#ticDiv').fadeTo('slow',1);
	});
	$('#ticDiv').mouseleave(function(){
		$('#ticDiv').fadeTo('slow',0.3);
	});
});

		/*
		console.log('---');
		console.log(freeAreas.length);
		console.log('---');
		if(freeAreas.length>=8){
			console.log('hi 1');
			random = Math.floor(Math.random()*(freeAreas.length));
			board[freeAreas[random][0]][freeAreas[random][1]] = 2;
			drawSquare(random,freeAreas);
			console.log(freeAreas[random]);
			return;
		} */
		//this portion will check to see if it can immediately end the game
		/*
		for(var x = 0 ; x<freeAreas.length; x++){
			value = board[freeAreas[x][0]][freeAreas[x][1]]
			board[freeAreas[x][0]][freeAreas[x][1]]=2;
			if(checkGameOver(board)==2){
				drawSquare(x,freeAreas);
				return;
			} else {
				board[freeAreas[x][0]][freeAreas[x][1]]=value;
			}
		}
		//this portion will stop potential immediate losses
		
		for(x = 0 ; x<freeAreas.length; x++){
			value = board[freeAreas[x][0]][freeAreas[x][1]]
			board[freeAreas[x][0]][freeAreas[x][1]]=1;
			if(checkGameOver(board)==1){
				board[freeAreas[x][0]][freeAreas[x][1]]=2;
				drawSquare(x,freeAreas);
				return;
			} else {
				board[freeAreas[x][0]][freeAreas[x][1]]=value;
			}
		} 
		//if game can't be ended immediatley we now have to find an optimal move
		x = [[0,0,0],[0,0,0],[0,0,0]];
		for(var i = 0; i<3; i++){
			for(var j = 0; j<3; j++){
				x[i][j]=board[i][j];
			}
		}*/