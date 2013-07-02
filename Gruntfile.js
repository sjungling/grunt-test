module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'test.js'],
      jshintrc: ".jshintrc"
    },
    sass: {
      dev: {
        files: {
          'assets/css/storestyle.css': 'sass/test.scss'
        },
        options: {
          check: true,
          compass: true
        }
      }
    },
    jsbeautifier: {
      files: ["scripts/**/*.js"]
    }
    // watch: {
    //   javascript: {
    //     files: 'scripts/**/*.js',
    //     tasks: ['jshint']
    //   },
    //   sass: {
    //     files: 'sass/**/*.scss',
    //     task: 'sass'
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'sass', 'jsbeautifier']);

  // Travis CI task.
  grunt.registerTask('travis', ['jshint', 'sass', 'jsbeautifier']);

};

