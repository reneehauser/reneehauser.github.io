module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        src: 'stylesheets/*.scss',
        dest: 'css/main.css'
      }
    },

    shell: {
      jekyll: {
        command: 'jekyll serve --watch'
      }
    },

    watch: {
      stylesheets: {
        files: '<%= sass.dist.src %>',
        tasks: ['sass:dist'],
        options: {
          livereload: true
        }
      }
    }

  });


  // npm tasks

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');


  // Custom tasks

  grunt.registerTask('serve',   ['shell:jekyll']);
  grunt.registerTask('default', ['watch']);

};
