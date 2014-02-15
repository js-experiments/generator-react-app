module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
	    options:{
		    transform: [ require('grunt-react').browserify ]
	    },
		  client: {
			  src: ['public/js/react_components/**/*.js', 'public/js/modules/main.js'],
			  dest: 'public/js/app.built.js'
		  }
    },
    watch: {
      files: [ "public/js/modules/**/*.js", "public/js/shims/**/*.js", "public/js/react_components/*.js"],
      tasks: [ 'browserify' ]
    }
  })
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
}
