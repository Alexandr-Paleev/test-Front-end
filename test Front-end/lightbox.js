$(function(){

	var block = $("#block");

	$(".lightbox").on("click", function(){

		$("<div id='overlay'></div>")
			.css({
				"height": "100%",
				"position":"fixed",
				"width": "100%",
				"background": "#000",
				"opacity": "0",
				"top": "0",
				"left": "0",
				"z-index": "999"
			})
			.animate({"opacity": "0.5"}, "slow")
			.appendTo("body");

		block.fadeIn();

		$("#overlay, .close").on("click", function(){
			block.fadeOut("slow");
			$("#overlay").fadeOut("slow", function(){
				$(this).remove();
			});
		});
	});
});