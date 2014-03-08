'use strict'

function size(width) {
  return function (driver, webdriver) {
    driver.manage().window().setSize(width, 600 /* any height*/);
    return driver;
  };
}

module.exports = {
  seleniumHost: 'http://localhost:4444/wd/hub',
  browsers: ['firefox'],
  envHosts: {
    build: 'http://localhost:4000/example/build',
    prod: 'http://localhost:4000/example/prod'
  },
  paths: [
    { 'Tiny CSS Difference': ['/tiny_css_difference.html', size(800)] },
    {
      'Chart Difference': ['/chart_difference.html', function (browser, webdriver) {
        size(800)(browser).sleep(2000);
      }]
    }
  ],
  reportFormat: 'file'
};