module.exports = {
  entry: {
    './public/js/editor-bundle': './app/editor-app',
    './public/js/widget-bundle': ['babel-polyfill', './app/widget-app'],
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name]-bundle.map',
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
