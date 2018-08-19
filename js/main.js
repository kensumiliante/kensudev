;(function(){
	// $(".text-effect-loop").textEffectLoop({
	// 	timeout: 8000,
	// 	loop: "infinite"
	// });

   $(".sticker").sticky({topSpacing:0});
   $(".sticker-social").sticky({topSpacing:18, className:"is-sticky-social"});

  //$.scrollIt();
  $('#nav').onePageNav();

 //  $(".rotate").textrotator({
	// 	animation: "flipCube",
 //        speed: 1500
	// });

  $('.logo').on('mouseover', function(){
  	$(this).addClass('animated pulse');
	}).on('mouseout',function(){
		$(this).removeClass('animated pulse');
  });


  // var h = window.screen.height,
   // total = h - 123;
   // console.log(total);
  
  var intViewportHeight = window.innerHeight;
  intViewportHeight = intViewportHeight - 72;
  $('.banner').css('height', intViewportHeight);

})();