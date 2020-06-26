(function(){
	$(".btn-mobileMenu").on("click",function(){
		$(".nav").slideToggle();
	});
	$(".nav-item>a").on("click",function(){
		let test = $(this).attr('href');
		let distance = $(test).offset().top;
		$("body,html").animate({scrollTop:distance},1000);
		return false;
	});
})();
