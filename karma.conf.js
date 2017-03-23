module.exports = function(config) {
  config.set({
    basePath: 'src',
    frameworks: ['jasmine'],
    reporters: ['progress', 'htmlDetailed'],
    files: [
      '**/*.spec.js',
      {
        pattern: '.**/*.html',
        watched: false,
        served: true,
        included: false
      }
    ],
    browsers: ['Chrome']
  });
}