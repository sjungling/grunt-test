module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'test.js']
    },
    sass: {
      all: ['sass/**.scss'],
      options: {
        check: true,
        compass: true
      }
    },
    jsbeautifier: {
      files: ["scripts/**/*.js"]
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jsbeautifier');

  // Default task.
  grunt.registerTask('default', ['jshint', 'sass', 'jsbeautifier']);

  // Travis CI task.
  grunt.registerTask('travis', ['jshint', 'sass', 'jsbeautifier']);

};

