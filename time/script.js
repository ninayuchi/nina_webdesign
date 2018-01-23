$(document).ready(function(){

// INDEX PAGE
	$(".day20").click(function(){
		$(".pic20").toggleClass("hidden");
	});

	$(".day20").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day20").css("color", "white");
	})

	$(".day20").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});


	$(".day18").click(function(){
		$(".pic18").toggleClass("hidden", 1000);
	});

	$(".day18").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day18").css("color", "white");
	});

	$(".day18").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});

	$(".day16").click(function(){
		$(".pic16").toggleClass("hidden");
	});

	$(".day16").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day16").css("color", "white");
	});

	$(".day16").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});

	$(".day19").click(function(){
		$(".pic19").toggleClass("hidden");
	});

	$(".day19").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day19").css("color", "white");
	});

	$(".day19").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});

	$(".day17").click(function(){
		$(".pic17").toggleClass("hidden");
	});

	$(".day17").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day17").css("color", "white");
	});

	$(".day17").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});


//WEEK
	$(".tuesdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");
	});

	$(".wednesdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");	});

	$(".thursdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");	});

	$(".fridaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");	});

	$(".saturdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");	});


});