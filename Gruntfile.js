(function(){
  'use strict';

  module.exports = function (grunt) {

  require('jit-grunt')(grunt,{
    browserSync: 'browser-sync'
  });

    grunt.initConfig({
      copy: {
        main: {
          files: [
            {
              expand: true,
              cwd: 'app/',
              src: '{,*/}*.html',
              dest: 'public/'
            },
            {
              expand: true,
              cwd: 'app/scripts/',
              src: '{,*/}*.js',
              dest: 'public/js'
            }
          ]
        }
      },
      watch: {
        project: {
          files: ['app/{,*/}*.js', 'app/{,*/}*.html', '{,*/}*.json','app/{,*/}*.css'],
          tasks: ['copy'],
          options: {
            livereload: true
          },

        },
      },
      browserSync: {
          dev: {
              bsFiles: {
                  src : [
                      'app/css/*.css',
                      'app/*.html'
                  ]
              },
              options: {
                  watchTask: true,
                  server: './app'
              }
          }
      }
    });

    grunt.registerTask('default', ['browserSync', 'watch']);

  };
})();
