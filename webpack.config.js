var path = require('path');
var webpack =require('webpack');

module.exports = {
    mode: 'development',
    devtool:'eval-source-map',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: './'
    }
}