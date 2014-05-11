/*
 * grunt-jsfmt
 * https://github.com/james2doyle/grunt-jsfmt
 *
 * Copyright (c) 2014 james2doyle (James Doyle)
 * Licensed under the MIT license.
 */

 'use strict';

 module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
      'Gruntfile.js',
      'tasks/*.js',
      '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    jsfmt: {
      default_options: {
        files: {
          'tmp/default_options': ['test/fixtures/nothing']
        }
      },
      custom_options: {
        options: {
          rewrite: ['_.reduce(a, b, c) -> a.reduce(b, c)']
        },
        files: {
          'tmp/custom_options': ['test/fixtures/underscore-reduce']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jsfmt', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
