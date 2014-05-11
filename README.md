# grunt-jsfmt

> a task for the [jsfmt](https://github.com/rdio/jsfmt) library

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsfmt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsfmt');
```

## The "jsfmt" task

### Usage

In your project's Gruntfile, add a section named `jsfmt` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsfmt: {
    default: {
      options: {
        rewrite: ['_.reduce(a, b, c) -> a.reduce(b, c)']
      },
      files: {
        'path/to/output.js': ['path/to/infile.js']
      }
    }
  }
})
```

### Options

#### options.rewrite

Type: `Array`
Default value: `'[]'`

An array of values that you want to rewrite.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License

Copyright (c) 2014 james2doyle (James Doyle). Licensed under the MIT license.
