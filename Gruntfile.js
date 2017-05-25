module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      browserify: {
        files: ['src/scripts/**/*.js'],
        tasks: ['browserify']
      }
    },

    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}], ['grunt-less-browserify']]
        },        
        src: ['src/scripts/index.js'],
        dest: 'src/app.js',
      }
    }, 
	
	uglify: {
		my_target: {
		  files: {
			'dist/output.min.js': ['src/app.js']
		  }
		}
	}, 
	
	exec: {
		clean: {
			command: 'del app.js', 
			cwd: 'src'
		}, 
		loadModules: {
			command: 'npm install'
		}
	}

  });

  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-exec'); 

  grunt.registerTask('init', ['exec: loadModules']); 
  grunt.registerTask('build', ['browserify', 'uglify', 'exec:clean']);

};