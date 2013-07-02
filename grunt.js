// Default task.
grunt.registerTask('default', 'lint');

// Travis CI task.
grunt.registerTask('travis', 'lint qunit');
