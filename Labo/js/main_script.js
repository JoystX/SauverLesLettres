function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

$(document).ready(function(){
	var selection;
	var Y;
	var X;
	var anim = "Style 1";
	
		//Choose box
	selector = $("div#choose_box span").offset().top;
	Y = ($("div#choose_box span ul").height()) / 2;
	$("div#choose_box span ul").css("top", (-Y + ($("div#choose_box span").height()) / 2));
	
	$("div#choose_box span a").click(function(){	
		
		if (isIE())  
			$("div#choose_box span").children("ul").css({'display':'block', transform:"scale(1, 1)"});
		else 
		 	$("div#choose_box span").children("ul").css({'display':'block', transform:"scale(1, 0.1)"});
			
		$("div#choose_box span").children("ul").animate({transform:"scale(1, 1)"}, 150);
	
	});
	
	$("div#choose_box span").mouseleave(function(){
			$("div#choose_box span").children("ul").animate({transform:"scale(1, 0.1)"}, 150,function(){
				$("div#choose_box span").children("ul").hide();
			});
			
	}); //Choose box over----------------------------------
	
	
	$("div#choose_box span ul li").click(function(){
		X = $(this).html();
		$("div.logo").html(X);
		$("div#choose_box span").children("ul").hide();
		$("div#choose_box span a").html(X + "<img style = 'float:right;margin-right:10px;' src = 'images/cursor.png'/>");
		anim = X;
		
	});
	
	$("div.nav ul li").mouseover(function(){
		$(this).children("ul").show();
		
		if(anim == "Style 2")
			$(this).children("ul").addClass('animated rotateInUpLeft');
			
		else if(anim == "Style 3")
			$(this).children("ul").addClass('animated rotateInDown_Left');
		
		else if(anim == "Style 4")
			$(this).children("ul").addClass('animated rotateInUp_Left');
		
		else if(anim == "Style 5")
			$(this).children("ul").addClass('animated bounceIn');
		
		else if(anim == "Style 6")
			$(this).children("ul").addClass('animated flipIn_X');
			
		else
			$(this).children("ul").addClass('animated fadeInUp');
	});
	

	$("div.nav ul li").mouseleave(function(){
		$(this).children("ul").hide();
		
		if(anim == "Style 2")
			$(this).children("ul").removeClass('animated rotateInUpLeft');
		
		else if(anim == "Style 3")
			$(this).children("ul").removeClass('animated rotateInDown_Left');
		
		else if(anim == "Style 4")
			$(this).children("ul").removeClass('animated rotateInUp_Left');
		
		else if(anim == "Style 5")
			$(this).children("ul").removeClass('animated bounceIn');
		
		else if(anim == "Style 6")
			$(this).children("ul").removeClass('animated flipIn_X');
			
		else
			$(this).children("ul").removeClass('animated fadeInUp');
	});
	
	
});