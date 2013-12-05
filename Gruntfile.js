module.exports = function(grunt){
    
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['public/index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['public/js/assets/extras.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['buildcss']
            },
            "mocha-server": {
                files: ['tests/ws.js'],
                tasks: ['mocha-server']
            },
            nodemon: {
                files: ['app.js'],
                tasks: ['nodemon']
            }
        },
        htmlhint: {
            build: {
                options: {
                    // Force tags to have a closing pair
                    'tag-pair': true,
                    // Force tags to be lowercase
                    'tagname-lowercase': true,
                    // Force attribute names to be lowercase
                    'attr-lowercase': true,
                    // Force attributes to have double quotes rather than single
                    'attr-value-double-quotes': true,
                    // Force the DOCTYPE declaration to come first in the document
                    'doctype-first': true,
                    // Force special characters to be escaped
                    'spec-char-escape': true,
                    // Prevent using the same ID multiple times in a document
                    'id-unique': true,
                    // Prevent script tags being loaded in the head for performance reasons
                    'head-script-disabled': true,
                    // Prevent style tags. CSS should be loaded through includes
                    'style-disabled': true
                },
                src: ['public/index.html']
            }
        },
        uglify: {
            build: {
                files: {
                    'public/assets/js/extras.min.js': ['public/js/assets/extras.js'],
                }
            }
        },
        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors: true,
                    consolidateMediaQueries: true
                }
            },
            files: {
                'public/assets/css/index.css': 'public/assets/css/index.css'
            }
        },
        cssmin: {
            build: {
                src: 'public/assets/css/index.css',
                dest: 'public/assets/css/index.css'
            }
        },
        sass: {
            build: {
                files: {
                    'public/assets/css/index.css': 'scss/index.scss'
                }
            }
        },
        "mocha-server": {
            serverTestSuites: {
                src: 'tests/ws.js',
                options: {
                    ui: 'tdd'
                }
            }
        },
        nodemon: {
            dev: {
                options: {
                    file: 'app.js',
                    watchedExtensions: ['js','json'],
                    watchedFolders: ['server'],
                    ignoredFiles: ['node_modules/**']
                },
                env: {
                    NODE_ENV: 'development'
                }
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss', ['sass', 'cssc', 'cssmin']);
    grunt.registerTask('travis', ['htmlhint','sass', 'cssc', 'cssmin', 'uglify','nodemon', "mocha-server"]);
};