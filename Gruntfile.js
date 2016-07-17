module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['public/app.js',
        'public/js/directives/*.js',
        'public/js/controllers/*.js',
        'public/js/services/*.js'
      ],
      dest: 'public/dist/<%= pkg.name %>.js'
    }
  },
  jshint: {
    beforeconcat: ['public/js/**/*.js', 'public/js/app.js'],
    options: {
      force: 'true',
      ignores: [
        'public/lib/**/*.js',
      ]
    }
  },
  uglify: {
    dist: {
      files: {
      'public/dist/<%= pkg.name %>.min.js': '<%= concat.dist.dest %>'
      }
    }
  },
  cssmin: {
    files: {
      src: 'public/css/*.css',
      dest: 'public/dist/styles.min.css'
    }
  },
  watch: {
    scripts: {
      files: ['public/js/**/*.js', 'public/*.js', 'public/css/*.css'],
      tasks: ['build']
    }
  },
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('build', [
  'jshint',
  'concat',
  'cssmin',
  'uglify'
]);

}
