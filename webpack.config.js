let path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, '_build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  devServer: {
    contentBase: [
      path.join(__dirname, '_build'),
      path.join(__dirname, 'app/assets'),
    ],
    compress: true,
    port: 8888,
  }
};
