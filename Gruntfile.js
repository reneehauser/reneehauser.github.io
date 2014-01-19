module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        compass: true
      },
      dist: {
        src: 'stylesheets/main.scss',
        dest: 'css/main.css'
      }
    },

    shell: {
      jekyllServe: {
        command: 'jekyll serve'
      },
      jekyllBuild: {
        command: 'jekyll build'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      stylesheets: {
        files: ['stylesheets/*.scss'],
        tasks: ['build'],
      },
      templates: {
        files: ['_includes/*.html', '_layouts/*.html'],
        tasks: ['build']
      }
    }

  });


  // npm tasks

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');


  // Custom tasks

  grunt.registerTask('serve',   ['shell:jekyllServe']);
  grunt.registerTask('build',   ['sass:dist', 'shell:jekyllBuild']);
  grunt.registerTask('default', ['watch']);

};
