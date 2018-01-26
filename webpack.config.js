const path = require('path');
const DEST = path.resolve(__dirname, 'src/main/resources/static');
const TEMPLATES = path.resolve(__dirname, 'src/main/resources/templates');
const SRC = path.resolve(__dirname, 'src/main/js');
const STYLESHEETS = path.resolve(__dirname, 'src/main/stylesheets');

module.exports = {
  entry: ['babel-polyfill', SRC + '/index.js'],
  output: {
    path: DEST,
    filename: 'built/bundle.js',
    publicPath: '/'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    hot: true,
    contentBase: [TEMPLATES, DEST],
    port: 9090,
    proxy: {
      '/': 'http://localhost:8080'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: [/\.scss$/, /\.css$/],
        include: STYLESHEETS,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
