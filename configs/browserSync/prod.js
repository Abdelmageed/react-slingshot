import historyApiFallback from 'connect-history-api-fallback';

module.exports = {
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/client/*.html'
  ],

  middleware: [historyApiFallback()]
}