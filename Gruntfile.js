/**
 * grunt-pagespeed-ngrok
 * http://www.jamescryer.com/grunt-pagespeed-ngrok
 *
 * Copyright (c) 2014 James Cryer
 * http://www.jamescryer.com
 */
'use strict'

var ngrok = require('ngrok');

module.exports = function (grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    clean: {
      all: [
        "dist/"
      ]
    },
    imagemin: {
      jpg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.jpg'],
          dest: 'dist/img'
        }, {
          expand: true,
          cwd: 'views/images/',
          src: ['**/*.jpg'],
          dest: 'dist/views/images'
        }]
      }
    },
    cssmin: {
      all: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['**/*.css'],
          dest: 'dist/css'
        }, {
          expand: true,
          cwd: 'views/css/',
          src: ['**/*.css'],
          dest: 'dist/views/css'
        }]
      }
    },
    htmlmin: {
      all: {
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: '.',
          src: ['**/*.html',"!**/node_modules/**"],
          dest: 'dist',
          ext: '.html'
        }]
      }
    },
    uglify: {
      all: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: '**/*.js',
          dest: 'dist/js',
          ext: '.js'
        }, {
          expand: true,
          cwd: 'views/js/',
          src: '**/*.js',
          dest: 'dist/views/js',
          ext: '.js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register default tasks
  grunt.registerTask('default', ['clean', 'htmlmin', 'cssmin', 'uglify', 'imagemin']);
}
