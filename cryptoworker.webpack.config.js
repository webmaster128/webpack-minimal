module.exports = {
  entry: './worker/cryptoworker.js',
  output: {
    filename: './worker/out.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      'custom_modules',
      'node_modules'
    ],
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
    ]
  }
};
