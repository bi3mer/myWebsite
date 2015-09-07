$(document).ready(function(){
	/*
	Note: I did not write this code, but mearly modified bits of it. I do plan on writing my own version over winterbreak.
	-colan, 2014
	*/
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	ctx.font='10px Aria';
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var cw = 10;
	var d;
	var food;
	var score;

	var snake_array;
	
	var gameOver = false;

	function init(){
		d = "right"; //default direction
		create_snake();
		create_food(); 
		score = 0;
		if(typeof game_loop != "undefined") 
			clearInterval(game_loop);
		game_loop = setInterval(paint, 60); // 60 ms interval
	}
	init();
	
	function create_snake(){
		var length = 5; //Length of the snake
		snake_array = []; 
		for(var i = length-1; i>=0; i--)
		{
			snake_array.push({x: i, y:0});
		}
	}
	
	function create_food()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
	}
	
	function paint(){
		ctx.fillStyle = "#EEEEEE";
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, w, h);
		
		var nx = snake_array[0].x;
		var ny = snake_array[0].y;
		if(d == "right") 
			nx++;
		else if(d == "left") 
			nx--;
		else if(d == "up") 
			ny--;
		else if(d == "down") 
			ny++;
		if(nx == -1 || nx >= w/cw || nx <= 0|| ny <= -1 || ny >= h/cw || check_collision(nx, ny, snake_array)){
			ctx.font='30px Aria';
			ctx.strokeText("GAME OVER",150,240);
			ctx.font='10px Aria';
			gameOver = true;
			clearInterval(game_loop);
		}
		if(nx == food.x && ny == food.y){
			var tail = {x: nx, y: ny};
			score++;
			create_food();
		}
		else{
			var tail = snake_array.pop(); 
			tail.x = nx; tail.y = ny;
		}
		
		snake_array.unshift(tail); 
		
		for(var i = 0; i < snake_array.length; i++){
			var c = snake_array[i];
			paint_cell(c.x, c.y);
		}
		paint_cell(food.x, food.y);
		var score_text = "Score: " + score;
		ctx.font='10px Aria';
		ctx.fillText(score_text, 5, h-5);
	}
	function paint_cell(x, y){
		ctx.fillStyle = "#7a7a7a";
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}
	function check_collision(x, y, array){
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}
	$(document).keydown(function(e){
		var key = e.which;
		if(key == "37" && d != "right") 
			d = "left";
		else if(key == "38" && d != "down") 
			d = "up";
		else if(key == "39" && d != "left") 
			d = "right";
		else if(key == "40" && d != "up") 
			d = "down";
		else if(key == "32") {
			if(gameOver == true){
				gameOver = false;
				init();
			}
		}
	})
})