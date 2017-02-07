module.exports = function(grunt) {
	/*
	 * Do grunt related things here
	 * Every thing happens inside the wrapper function
	 */

	 /** Project configuration **/

	 grunt.initConfig({
	 	pkg: grunt.file.readJSON('package.json'),

	 	/**
	 	 *	Js config
	 	 */

	 	uglify: {
	 		options: {
	 			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	 		},
	 		custom: {
	 			src: 'js/custom.js',
	 			dest: 'js/custom.min.js'
	 		},
	 	},
	 	concat: {
	 		options: {
	 			separator: ';',
	 		},
	 		custom: {
	 			src: ['source/js/*.js'],
	 			dest: 'js/custom.js',
	 		},
	 	},

	 	/**
	 	 *	Css config
	 	 */

	 	compass: {
	 		custom: {
	 			options: {
	 				sassDir: 'source/scss',
	 				cssDir: 'css/theme',
	 			},
	 		},
	 	},

		/**
		 *	Clean commands
		 */

		clean: {
  			css: ['css/theme.css'],
  			js: ['js/custom.js', 'js/custom.min.js'],
  		},

		/**
		 *	Watch command
		 */

  		watch: {
  			options: {
  				livereload: 6278456,
  			},
  			css: {
  				files: ['source/scss/**/*.scss'],
  				tasks: 'update-css',
  			},
  			scripts: {
  				files: ['source/js/*.js'],
  				tasks: 'update-js',
  			},
  			html: {
  				files: 'index.html',
  			},
  		},
	});

	/** Load npm tasks from node_modules **/

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-concat-css');

	/** Grunt tasks **/

	grunt.registerTask('update-css', ['clean:css', 'compass:custom']);
	grunt.registerTask('update-js', ['clean:js', 'concat:custom', 'uglify',]);

	grunt.registerTask('development', ['update-css', 'update-js']);
};

// Don't cross this line ----------------------------------