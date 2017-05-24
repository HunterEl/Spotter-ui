'use strict';

const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname + "/public"),
        inline: true,
        port: 1313
    },
    entry: {
      javascript: './app.jsx'
    },

    output : {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['react']
              }
            },
            {
              test: /\.jsx$/,
              loaders: ['react-hot-loader', 'babel-loader'],
              exclude: /node_modules/
            }
        ]
    }
};
