module.exports = function(grunt) {
 	  grunt.initConfig({
 		 uglify: {
 			dist: {
 				src:['js/final-jquary.js' , 'js/menu.js'],
 				dest:'dist/operacion.min.js'
 			},

  sass: {
    dist: {
      files: {
        'css/style.css': 'css/style.scss'
      }
    }
  },

 		}
 	});
	grunt.loadNpmTasks('grunt-contrib-sass');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 }
