Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	var sectionId = event.currentSlide.id;
	switch(sectionId) {
		case "slide_2":
			console.log("Dit moet je zien!");
		break;
	}
});