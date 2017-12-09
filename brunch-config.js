module.exports = {
  paths: {
    watched: ['src']
  },
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  modules: {
    autoRequire: {
      'app.js': ['index']
    },
    nameCleaner: (path) => path.replace(/^src\//, '')
  }
};