/*
 * grunt-jsfmt
 * https://github.com/james2doyle/grunt-jsfmt
 *
 * Copyright (c) 2014 james2doyle (James Doyle)
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jsfmt', 'a task for the jsfmt library', function () {
    var jsfmt = require('jsfmt');
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      format: true,
      rewrite: []
    });

    function handleFile(file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var results = grunt.file.read(filepath);
        if (options.rewrite.length > 0) {
          options.rewrite.forEach(function(rule) {
            results = jsfmt.rewrite(results, rule);
          });
        }
        if (options.format) {
          results = jsfmt.format(results);
        }
        return results;
      });

      // Write the destination file.
      grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    }

    // Iterate over all specified file groups.
    this.files.forEach(handleFile);
  });

};
