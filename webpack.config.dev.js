var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [ './app/main.react.js' ],
    vendors: [ 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server' ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
        loader: 'eslint'
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
