console.info("START");

$("i").click(function() {
	console.log("clicked");
	$("#calcArea").append('<div class="bodysection"><h1>How it works</h1><p>This calculator can add up measurements in different units. New features and refinements are coming soon.</p></div>');
});

$(window).scroll(function(){
	console.log($(window).scrollTop())
	if ($(window).scrollTop() >= 290) {
		$("#calcTools").addClass("fixedheader");
		$("i").removeClass("fixedheader");
	} else {
		$("#calctools").addClass("relativeheader");
		$("#calcTools").removeClass("fixedheader");
	}
});