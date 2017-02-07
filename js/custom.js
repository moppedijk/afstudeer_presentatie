// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	history: true,

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'plugin/markdown/marked.js' },
		{ src: 'plugin/markdown/markdown.js' },
	],
	width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
});;Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	// var sectionId = event.currentSlide.id;
	// console.log(sectionId);
	// if(sectionId == "prototype_1" || sectionId == "prototype_2" || sectionId == "prototype_3" || sectionId == "prototype_4" ) {
	// 	console.log("disable logo");
	// } else {
	// 	console.log("show logo");
	// }
});