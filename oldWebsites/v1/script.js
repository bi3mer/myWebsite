$(document).ready(function() {
	//set up stuff
	$('h3').fadeTo('slow',.1); //fades it immediatley rather than letting it start at full. Also draws attention	
	//dynamic stuff
    $('h3').mouseenter(function(){
    	$('h3').fadeTo('fast',1);
    });
    $('h3').mouseleave(function(){
    	$('h3').fadeTo('slow',.1);
    });
    $(document).keydown(function(key){
    	switch(parseInt(key.which,10)) {
			case 65:
				$('#sprite1').animate({left: "-=10px"}, .001);
				break;
			case 87:
				$('#sprite1').animate({top: "-=10px"}, .001);
				break;
			case 68:
			    $('#sprite1').animate({left: "+=10px"}, .001);
				break;
			case 83:
			    $('#sprite1').animate({top: "+=10px"}, .001);
				break;
		}
	});
    $('#jquery').mouseenter(function(){
		$('#jquery').hide();
		$("#jquery").delay("slow").fadeIn();
    });
	//---------------------------------------------------------------------------------------------------------->
	// http://stackoverflow.com/questions/1056562/how-do-i-prevent-scrolling-with-arrow-keys-but-not-the-mouse
	// is where this was found
	var ar=new Array(33,34,35,36,37,38,39,40);
	$(document).keydown(function(e) {
	     var key = e.which;
	      if($.inArray(key,ar) > -1) {
	          e.preventDefault();
	          return false;
	      }
	      return true;
	});
	//---------------------------------------------------------------------------------------------------------->
});
