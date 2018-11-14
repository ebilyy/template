const pages = ['index', 'page'];

const HtmlWebpackPlugin = require('html-webpack-plugin');
let multiplesFiles = pages.map(function(entryName) {
    return new HtmlWebpackPlugin({
      hash: true,
      filename: entryName + '.html',
      template:   `src/${entryName}.html`
  });
  });
module.exports = multiplesFiles;