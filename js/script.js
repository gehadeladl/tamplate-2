$(document).ready(function(){
	
	$(window).scroll(function(){
		
		var scrol = $(window).scrollTop();
		
		if(scrol > 1000){
			
			$(".scroll1").fadeIn()
			
		}else{
			
			$(".scroll1").fadeOut()
		}
		if(scrol >= 900){
			
			$(".fix").slideDown()
			
		}else{
			
			$(".fix").slideUp()
		}
	});
	
//############################################
    $(".scroll1").on("click" , function(){
		
		$("body , html").animate({
			
			scrollTop : 0
		},1000)
	});
//############################################

	var winH = $(window).height(),
	
	    navH = $(".nav1").innerHeight();
		
	    
		
	$(".slider .carousel-item").height(winH - navH);
	
    $(window).on("resize" , function(){
		
		var winH = $(window).height(),
	
	    navH = $(".nav1").innerHeight();
		
	    $(".slider .carousel-item").height(winH - navH)
	});
	
//############################################
})