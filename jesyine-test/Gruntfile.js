module.exports = function(grunt) {
    grunt.initConfig({
        env : {
            options : {
            // Shared Options Hash
            },
            dev : {
                NODE_ENV: 'dev',
                HOST_PORT: 'http://127.0.0.1:8080',
            }
        },
        mochaTest : {
            test : {
                options : {
                    reporter : 'XUnit',
                    captureFile : 'report/test-result.xml',
                    clearRequireCache : true,
                    timeout : 10000
                },
                src : [
                        'test/UserTest.js'
                ]
            }
        },
    
        clean : [ "report/" ]
    });
    
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-env');
    
    grunt.registerTask('dev', [ 'env:dev', 'mochaTest' ]);

};
