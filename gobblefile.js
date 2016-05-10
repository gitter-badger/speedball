var gobble = require('gobble');

var builtFile = gobble('src')
  .transform('babel')
  .transform('rollup', {
    entry: 'speedball.js',
    format: 'umd',
    moduleName: 'Speedball',
    moduleId: 'speedball'
  });

module.exports = gobble([
  builtFile.transform( 'uglifyjs', { ext: '.min.js' }),
  builtFile
]);
