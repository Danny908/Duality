import { ConfigOptions } from 'karma';
import webpackTestConfig from './webpack-test.config';

module.exports = function karma_config(config) {
  const configuration = {
    // Base path that will be used to resolve all patterns (eg. files, exclude).
    basePath: './',

    // Frameworks to use.
    // Available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // List of files to load in the browser.
    files: [
      'karma-test-entry.ts'
    ],

    // Preprocess matching files before serving them to the browser.
    // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'karma-test-entry.ts': ['webpack', 'sourcemap']
    },

    webpack: webpackTestConfig,

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: {
      noInfo: true,
      // Use stats to turn off verbose output.
      stats: {
        chunks: false
      }
    },

    mime: {
      'text/x-typescript': [ 'ts' ]
    },

    coverageIstanbulReporter: {
      reports: ['text-summary', 'html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },

    // Test results reporter to use.
    // Possible values: 'dots', 'progress'.
    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage-istanbul'],

    // Level of logging
    // Possible values:
    // - config.LOG_DISABLE
    // - config.LOG_ERROR
    // - config.LOG_WARN
    // - config.LOG_INFO
    // - config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    // Start these browsers.
    // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'ChromeHeadless',
        flags: [
            '--headless',
            '--disable-gpu',
            '--no-sandbox',
            '--remote-debugging-port=9222'
        ]
      }
    },

    browserConsoleLogOptions: {
      terminal: true,
      level: 'log'
    },

    singleRun: true,
    colors: true
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
    // configuration.reporters = configuration.reporters.concat(['coverage', 'coveralls']);
    // configuration.coverageReporter = {
    //   type : 'lcovonly',
    //   dir : 'coverage/'
    // };
  }

  config.set(configuration as ConfigOptions);
};
