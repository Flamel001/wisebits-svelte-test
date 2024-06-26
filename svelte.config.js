// Used only by Testing Library

const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  compilerOptions: {
    enableSourcemap: true
  },

  preprocess: sveltePreprocess({
    sourceMap: true
  })
};
