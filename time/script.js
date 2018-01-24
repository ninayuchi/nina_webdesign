$(document).ready(function(){

// INDEX PAGE
	$("h1").mouseenter(function(){
		$("h1").css("color", "white");
		$("body").css("background-color", "lightgrey");
	});

	$("h1").mouseleave(function(){
		$("h1").css("color", "lightgrey");
		$("body").css("background-color", "white");
	});

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

	$(".day15").click(function(){
		$(".pic15").toggleClass("hidden");
	});

	$(".day15").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day15").css("color", "white");
	});

	$(".day15").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});

	$(".day14").click(function(){
		$(".pic14").toggleClass("hidden");
	});

	$(".day14").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day14").css("color", "white");
	});

	$(".day14").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});

	$(".day13").click(function(){
		$(".pic13").toggleClass("hidden");
	});

	$(".day13").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day13").css("color", "white");
	});

	$(".day13").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});

	$(".day12").click(function(){
		$(".pic12").toggleClass("hidden");
	});

	$(".day12").mouseenter(function(){
		$("body").css("background-color", "lightgrey");
		$("h3").css("color", "lightgrey");
		$(".day12").css("color", "white");
	});

	$(".day12").mouseleave(function(){
		$("body").css("background-color", "white");
		$("h3").css("color", "white");
	});

//WEEK
	$(".tuesdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");
		$(".home").toggleClass("hidden");
	});

	$(".wednesdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");
		$(".home").toggleClass("hidden");
	});

	$(".thursdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");	
		$(".home").toggleClass("hidden");
	});

	$(".fridaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");
		$(".home").toggleClass("hidden");
	});

	$(".saturdaypic").click(function(){
		$("div, p, body").toggleClass("white");
		$("div, p, body").toggleClass("grey");
		$(".home").toggleClass("hidden");
	});

//NULL

	$(".nullpic").click(function(){
		$(".null").css("color", "lightgrey");
	});

	$("p").click(function(){
		$(".null, body").removeClass("white");
		$(".null, body").addClass("grey");
		$(".null").css("color", "white");
		$(".one").removeClass("hidden");
	});

	$(".one").click(function(){
		$(".two").removeClass("hidden");
	});

	$(".two").click(function(){
		$(".three").removeClass("hidden");
	});

	$(".three").click(function(){
		$(".four").removeClass("hidden");
	});

	$(".four").click(function(){
		$(".home").removeClass("hidden");
	});
});