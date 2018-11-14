# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.
Just start your next project based on webpack.


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) 
* Stylus Support via [sass-loader](https://github.com/shama/stylus-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
* You can add new pages to pages array in '/webpack/pages.js' file

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `${pageName}.html`.
