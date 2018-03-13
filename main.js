/* Wait for window load */
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut(750);
  });

/*Message*/
console.log("Hello there, looking for errors, bugs, complications, conundrums, problems, puzzles or out of place characters? Well that's ok, hopefully you won't find any :)");

/* Navagation */
$(document).ready(function(){
    $(".button a, #menu").click(function(){
        $(".overlay").fadeToggle(200);
    });
    $('.overlay').on('click', function(){
    	$('.overlay').fadeOut(200);
	});
});
 