
const Path = require('path');
const src = Path.join(__dirname, '../src');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// let multiplesFiles = pages.map(function (entryName) {
//   return new HtmlWebpackPlugin({
//     hash: true,
//     myOptions: { foo: 'bar' },
//     inject: 'body',
//     template: `nunjucks-html-loader!src/${entryName}.html`,
//     filename: `src/${entryName}.html`,
//   });
// });

const pages = ['index', 'page'];

const HtmlWebpackPlugin = require('html-webpack-plugin');
let multiplesFiles = pages.map(function(entryName) {
    return new HtmlWebpackPlugin({
      hash: true,
      myOptions: { foo: 'bar' },
      inject: 'body',
      filename: `${entryName}.html`,
      template:   `src/templates/${entryName}.njk`
  });
  });
module.exports = multiplesFiles;