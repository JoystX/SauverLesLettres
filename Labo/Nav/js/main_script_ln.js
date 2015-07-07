function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

$(document).ready(function(){
	var anim = "Style 1";
		
	$("div.nav ul li").mouseover(function(){
		$(this).children("ul").show();
		$(this).children("ul").addClass('animated fadeInUp');
	});
	

	$("div.nav ul li").mouseleave(function(){
		$(this).children("ul").hide();
		$(this).children("ul").removeClass('animated fadeInUp');
	});
	
	
});