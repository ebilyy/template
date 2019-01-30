const pages = ['index', 'page'];
const Path = require('path');
const src = Path.join(__dirname, '../src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
let multiplesFiles = pages.map(function(entryName) {
  console.log(src, 'src');
    return new HtmlWebpackPlugin({
      hash: true,
      myOptions: { foo: 'bar' },
      inject: 'body',
      template: `nunjucks-html-loader!${src}/templates/${entryName}.html`,
      filename: `${src}/templates/${entryName}.html`,
  });
  });



//   const HtmlWebpackPluginConfigGroups = new HtmlWebpackPlugin({
//     myOptions: { foo: 'bar' },
//     inject: 'body',
//     template: 'nunjucks-html-loader!./theme/templates/groups.html',
//     filename: 'groups.html',
// }); 
module.exports = multiplesFiles;