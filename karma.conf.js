module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // paths loaded by Karma
      {pattern: 'node_modules/systemjs/dist/system.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/http.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/router.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'client/dev/**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'client/dev/**/*.html', included: false, watched: true},
      {pattern: 'client/dev/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'client/dev/**/*.ts', included: false, watched: false},
      {pattern: 'client/dev/**/*.js.map', included: false, watched: false},

      {pattern: 'tests/client/**/*_test.js', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/client/dev/"
    },

        port: 9876,
 
        logLevel: config.LOG_INFO,
 
        colors: true,
 
        autoWatch: true,
 
        browsers: ['Chrome'],
 
        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],
 
        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],
 
        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'dist/**/!(*spec).js': ['coverage']
        },
 
        coverageReporter: {
            reporters:[
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },
 
        singleRun: true
    })
};