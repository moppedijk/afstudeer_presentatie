// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	history: true,

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'plugin/markdown/marked.js' },
		{ src: 'plugin/markdown/markdown.js' },
		{ src: 'plugin/notes/notes.js', async: true },
	],
	width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
});;Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	var sectionId = event.currentSlide.id;
	switch(sectionId) {
		case "slide_2":
			console.log("Dit moet je zien!");
		break;
	}
});