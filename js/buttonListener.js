/** 
 * Jquery for key presses
 * Note: all of these could just call the functions, and that would be better, but I
 * wanted to use the data structure instead just for this one time.
 */
$(document).on('click', 'a#Resume', function() {
	console.log('here!');
	buttonPressed('Resume');
});

$(document).on('click', 'a#Bio', function() {
	buttonPressed('Bio');
});

$(document).on('click', 'a#Projects', function() {
	buttonPressed('Projects');
});