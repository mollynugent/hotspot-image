$(document).ready(function () { //checks if html is fully loaded
	$(".circle").on("click", function (e) {
		e.preventDefault();
		console.log("Hello!");
		var circle_clicked = $(this),
			text = circle_clicked.data("text"),
			info_slide = circle_clicked.closest(".photo-container").find(".info_slides"),
			popIn = info_slide.find(".info_popIn");

		popIn.text(text);

		info_slide.addClass("active");
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		var x_clicked = $(this),
			info_slide = x_clicked.closest(".info_slides");
		info_slide.removeClass("active");
	});

});
