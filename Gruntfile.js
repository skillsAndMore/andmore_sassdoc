module.exports = function(grunt){

    //Configuro Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        watch: {
            css: {
                files: '**/*scss',
                tasks: ['compass']
            }
        }
    });

    //Creo i Task da Eseguire
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}
