module.exports = function(grunt) {

    var buildFiles = ['gruntfile.js'];

    var jsFiles = ['app/**/*.js','index.js','app/*.js'];

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        jshint: {
            all: [buildFiles, jsFiles],
            options: {
                curly: true,
                eqeqeq: true,
                immed: false, // suppress outer closure warning
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
    		    esversion:6,
                browser: true,
                jquery: true,
                smarttabs: true,
                strict: false,
                devel: true,
                scripturl: true,
                globals: {
                    ga: true,
                    exports: true,
                    Globalize: true,
                    router:true,
                    jwt:true,
                    d3: true,
                    Base64: true,
                    nicEditors: true,
                    nicEditor: true,
                    Galleria: true,
                    docCookies: true,
                    Handlebars: true,
                    charcoal: true,
                    _:true,
                    moment:true,
                    Chart:true,
                    io:true,
                    Notification:true
                }
            }
        },

        complexity: {
            generic: {
                src: jsFiles,
                exclude: ['doNotTest.js'],
                options: {
                    breakOnErrors: true,
                    jsLintXML: 'report.xml',         // create XML JSLint-like report 
                    checkstyleXML: 'checkstyle.xml', // create checkstyle report 
                    pmdXML: 'pmd.xml',               // create pmd report 
                    errorsOnly: false,               // show only maintainability errors 
                    cyclomatic: [3, 7, 12],          // or optionally a single value, like 3 
                    halstead: [8, 13, 20],           // or optionally a single value, like 8 
                    maintainability: 100,
                    hideComplexFunctions: false,     // only display maintainability 
                    broadcast: false                 // broadcast data over event-bus 
                }
            }
        },

        concat:{
    		js:{
    		  src:[jsFiles],
                    dest:"public/dist/production.js"
    		}
    	},

        uglify:{
    		compress:{
    			options:{
    			  sourcemap:true,
    			},
    			files:{
    			  'public/dist/production.min.js':['public/dist/production.js']
    			}
    		}
    	},

        clean: {
                dist: ['public/dist/*.js']
        }
    });

    grunt.registerTask('default', ['clean','jshint','complexity','concat']);

    console.log('\nGrunt executed at: ' + new Date() + '.\n');
};

